import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { BlogArticle, GitHubConfig } from '../types';
import initialArticlesData from '../constants/blogData.json';

interface BlogContextType {
  articles: BlogArticle[];
  addArticle: (article: BlogArticle) => void;
  updateArticle: (article: BlogArticle) => void;
  deleteArticle: (id: number) => void;
  toggleHideArticle: (id: number) => void;
  
  // Github Sync
  triggerGithubSync: (articlesToSave?: BlogArticle[]) => Promise<void>;
  syncStatus: { type: 'idle' | 'loading' | 'success' | 'error', message: string };
  resetSyncStatus: () => void;
  refreshArticles: () => Promise<void>;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

const STORAGE_KEY = 'microforms_blog_posts';

// HARDCODED CONFIGURATION - PERMANENT
// Updated to use the user's requested repository (gdorleon/microFormS) and file path (src/blog.json)
const GITHUB_CONFIG: GitHubConfig = {
    owner: 'gdorleon',
    repo: 'microFormS',
    path: 'src/blog.json', 
    token: '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'
};

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize articles state (Load from LocalStorage first, fallback to local JSON)
  const [articles, setArticles] = useState<BlogArticle[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error("Failed to load blog posts from storage", error);
    }
    return initialArticlesData as unknown as BlogArticle[];
  });

  const [syncStatus, setSyncStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error', message: string }>({ type: 'idle', message: '' });

  // FETCH LATEST DATA (Cache Disabled)
  const refreshArticles = async () => {
    console.log("Fetching latest blog data from GitHub...");
    const { owner, repo, path } = GITHUB_CONFIG;
    
    // Use raw.githubusercontent.com for raw file access with anti-cache param
    const url = `https://raw.githubusercontent.com/${owner}/${repo}/main/${path}?t=${new Date().getTime()}`;

    try {
        const res = await fetch(url, { 
            cache: 'no-store',
            headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }
        });
        
        if (res.ok) {
            const textData = await res.text();
            let remoteArticles: BlogArticle[] = [];

            try {
                // Try pure JSON parse
                remoteArticles = JSON.parse(textData);
            } catch (jsonError) {
                console.warn("JSON parse failed. Data might be malformed or in legacy TS format.");
                return;
            }

            if (remoteArticles && Array.isArray(remoteArticles)) {
                console.log(`Updated local state with ${remoteArticles.length} articles from GitHub.`);
                setArticles(remoteArticles);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(remoteArticles));
            }
        } else {
            console.warn(`Failed to fetch public blog data: ${res.status}`);
        }
    } catch (error) {
        console.error("Error fetching live blog data:", error);
    }
  };

  // Run refresh on mount
  useEffect(() => {
    refreshArticles();
    
    // Optional: Poll every 60 seconds to keep clients in sync
    const interval = setInterval(refreshArticles, 60000);
    return () => clearInterval(interval);
  }, []);

  // Sync to local storage on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  }, [articles]);

  const addArticle = (article: BlogArticle) => {
    const newArticles = [article, ...articles];
    setArticles(newArticles);
  };

  const updateArticle = (updatedArticle: BlogArticle) => {
    const newArticles = articles.map((article) => article.id === updatedArticle.id ? updatedArticle : article);
    setArticles(newArticles);
  };

  const deleteArticle = (id: number) => {
    const newArticles = articles.filter((article) => article.id !== id);
    setArticles(newArticles);
  };

  const toggleHideArticle = (id: number) => {
      setArticles((prev) => 
        prev.map((article) => 
            article.id === id ? { ...article, isHidden: !article.isHidden } : article
        )
      );
  };

  const resetSyncStatus = () => {
    setSyncStatus({ type: 'idle', message: '' });
  };

  // PURE JSON GENERATOR
  const generateFileContent = (data: BlogArticle[]) => {
    // STRICT: Only return the JSON array string.
    return JSON.stringify(data, null, 4);
  };

  // SAVE TO GITHUB (Commit & Push)
  const triggerGithubSync = async (articlesToSave?: BlogArticle[]) => {
      console.log('--- Starting GitHub Sync (Pure JSON) ---');
      
      const { owner, repo, path, token } = GITHUB_CONFIG;
      const dataToSave = articlesToSave || articles;
      
      setSyncStatus({ type: 'loading', message: 'Connecting to GitHub...' });

      try {
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
        const headers = {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
        };

        // Step A: Get current SHA
        let sha = undefined;
        // Anti-cache param
        const getResponse = await fetch(`${apiUrl}?t=${Date.now()}`, { headers, cache: 'no-store' });
        
        if (getResponse.status === 401) {
            throw new Error("GitHub Configuration Error: Invalid Token.");
        }
        
        if (getResponse.ok) {
            const getData = await getResponse.json();
            sha = getData.sha;
        } else if (getResponse.status === 404) {
            console.log("File not found on remote, creating new.");
        } else {
             const text = await getResponse.text();
             throw new Error(`GitHub API Error: ${text}`);
        }

        setSyncStatus({ type: 'loading', message: 'Uploading data...' });

        // Step B: Prepare Content (Pure JSON)
        const content = generateFileContent(dataToSave);
        
        // Validate JSON before sending
        try { JSON.parse(content); } catch (e) { throw new Error("Internal Error: Generated invalid JSON."); }

        // Encode Content
        const base64Content = btoa(unescape(encodeURIComponent(content)));

        // Step C: Push
        const body = JSON.stringify({
            message: `Update blog.json via dashboard (${new Date().toISOString()})`,
            content: base64Content,
            sha: sha, 
        });

        const putResponse = await fetch(apiUrl, {
            method: 'PUT',
            headers,
            body,
        });

        if (!putResponse.ok) {
             const errText = await putResponse.text();
             let errorMsg = errText;
             try { 
                 const parsed = JSON.parse(errText);
                 errorMsg = parsed.message || errText; 
             } catch {}
             throw new Error(`Save Failed: ${errorMsg}`);
        }

        console.log("GitHub Sync Successful.");
        setSyncStatus({ type: 'success', message: 'Saved to GitHub successfully!' });
        
        // Step D: Immediate Refresh
        // Wait a short delay for GitHub's raw CDN to propagate
        setTimeout(() => {
            refreshArticles();
            setSyncStatus({ type: 'idle', message: '' });
        }, 1500);

      } catch (error: any) {
          console.error("[Sync Error]", error);
          setSyncStatus({ type: 'error', message: error.message || 'Unknown error occurred' });
      }
  };

  return (
    <BlogContext.Provider value={{ 
        articles, 
        addArticle, 
        updateArticle, 
        deleteArticle, 
        toggleHideArticle, 
        triggerGithubSync, 
        syncStatus, 
        resetSyncStatus,
        refreshArticles
    }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = (): BlogContextType => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
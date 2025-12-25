
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { BlogArticle, GitHubConfig } from '../types';
import { blogArticles as initialArticles } from '../constants/blogData';

interface BlogContextType {
  articles: BlogArticle[];
  addArticle: (article: BlogArticle) => void;
  updateArticle: (article: BlogArticle) => void;
  deleteArticle: (id: number) => void;
  toggleHideArticle: (id: number) => void;
  
  // Github Config & Sync
  githubConfig: GitHubConfig | null;
  configureGithub: (config: GitHubConfig) => void;
  triggerGithubSync: (articlesToSave?: BlogArticle[]) => Promise<void>;
  syncStatus: { type: 'idle' | 'loading' | 'success' | 'error', message: string };
  resetSyncStatus: () => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

const STORAGE_KEY = 'microforms_blog_posts';
const GITHUB_CONFIG_KEY = 'microforms_github_config';

// HARDCODED CONFIGURATION
const PERMANENT_GITHUB_CONFIG: GitHubConfig = {
    owner: 'logik101',
    repo: 'microF',
    // Updated path to include 'src/' which is standard for React repos
    path: 'src/constants/blogData.ts', 
    token: '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'
};

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize articles state
  const [articles, setArticles] = useState<BlogArticle[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error("Failed to load blog posts from storage", error);
    }
    return initialArticles;
  });

  // Initialize GitHub config state with permanent config
  const [githubConfig, setGithubConfig] = useState<GitHubConfig | null>(PERMANENT_GITHUB_CONFIG);

  const [syncStatus, setSyncStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error', message: string }>({ type: 'idle', message: '' });

  // Save to LocalStorage whenever articles change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
    } catch (error) {
      console.error("Failed to save blog posts to storage", error);
    }
  }, [articles]);

  const addArticle = (article: BlogArticle) => {
    setArticles((prev) => [article, ...prev]);
  };

  const updateArticle = (updatedArticle: BlogArticle) => {
    setArticles((prev) => 
        prev.map((article) => article.id === updatedArticle.id ? updatedArticle : article)
    );
  };

  const deleteArticle = (id: number) => {
    setArticles((prev) => prev.filter((article) => article.id !== id));
  };

  const toggleHideArticle = (id: number) => {
      setArticles((prev) => 
        prev.map((article) => 
            article.id === id ? { ...article, isHidden: !article.isHidden } : article
        )
      );
  };

  const configureGithub = (config: GitHubConfig) => {
      setGithubConfig(config);
      localStorage.setItem(GITHUB_CONFIG_KEY, JSON.stringify(config));
  };

  const resetSyncStatus = () => {
    setSyncStatus({ type: 'idle', message: '' });
  };

  const generateFileContent = (data: BlogArticle[]) => {
    const dataStr = JSON.stringify(data, null, 4);
    return `import { BlogArticle } from '../types';\n\nexport const blogArticles: BlogArticle[] = ${dataStr};`;
  };

  const triggerGithubSync = async (articlesToSave?: BlogArticle[]) => {
      if (!githubConfig) {
          console.log("No GitHub config found. Skipping sync.");
          // Don't show error to user if config is missing, just ignore (or log to console)
          return;
      }

      const dataToSave = articlesToSave || articles;
      setSyncStatus({ type: 'loading', message: 'Saving changes...' });

      try {
        const { owner, repo, path, token } = githubConfig;
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
        const headers = {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
        };

        // 1. Get current file SHA
        let sha = undefined;
        const getResponse = await fetch(apiUrl, { headers });
        
        if (getResponse.ok) {
            const getData = await getResponse.json();
            sha = getData.sha;
        } else if (getResponse.status === 404) {
            // File doesn't exist, we will create it (SHA not needed)
            console.log("File not found on remote, creating new file...");
        } else {
            const errText = await getResponse.text();
            throw new Error(`Failed to connect to remote storage (${getResponse.status}). ${errText}`);
        }

        // 2. Prepare content
        const content = generateFileContent(dataToSave);
        // Use a UTF-8 safe base64 encoding
        const base64Content = btoa(unescape(encodeURIComponent(content)));

        // 3. Update (or Create) file
        const body = JSON.stringify({
            message: 'Auto-update via MicroFormS Dashboard',
            content: base64Content,
            sha: sha, // If undefined, GitHub API treats this as a create request
        });

        const putResponse = await fetch(apiUrl, {
            method: 'PUT',
            headers,
            body,
        });

        if (!putResponse.ok) {
             const errText = await putResponse.text();
             throw new Error(`Failed to save file. ${errText}`);
        }

        setSyncStatus({ type: 'success', message: 'Changes saved successfully!' });
        
        // Reset status after a delay
        setTimeout(() => {
            setSyncStatus({ type: 'idle', message: '' });
        }, 5000);

      } catch (error: any) {
          console.error(error);
          setSyncStatus({ type: 'error', message: 'Error saving changes.' });
      }
  };

  return (
    <BlogContext.Provider value={{ 
        articles, 
        addArticle, 
        updateArticle, 
        deleteArticle, 
        toggleHideArticle,
        githubConfig,
        configureGithub,
        triggerGithubSync,
        syncStatus,
        resetSyncStatus
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

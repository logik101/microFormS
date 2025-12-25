import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useBlog } from '../context/BlogContext';
import { useTranslations } from '../hooks/useTranslations';
import { BlogArticle } from '../types';
import { RichTextEditor } from '../components/RichTextEditor';

const CreateBlogPage: React.FC = () => {
  const { t } = useTranslations();
  const { isAuthenticated, logActivity } = useAuth();
  const { addArticle, updateArticle, articles, triggerGithubSync, syncStatus, resetSyncStatus } = useBlog();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const isEditing = !!id;
  const existingArticle = isEditing ? articles.find(a => a.id.toString() === id) : null;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [author, setAuthor] = useState('');
  const [readTime, setReadTime] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [localSuccess, setLocalSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
    // Reset sync status on mount
    resetSyncStatus();
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (isEditing && existingArticle) {
      setTitle(existingArticle.titleKey);
      setDescription(existingArticle.descriptionKey);
      setContent(existingArticle.contentKey || '');
      setImageUrl(existingArticle.imageUrl);
      setAuthor(existingArticle.author || '');
      setReadTime(existingArticle.readTimeKey || '');
      // Try to parse date, fallback to today
      const d = new Date(existingArticle.date);
      if (!isNaN(d.getTime())) {
         setDate(d.toISOString().split('T')[0]);
      }
    }
  }, [isEditing, existingArticle]);

  const handleSubmit = async (e: React.FormEvent, isDraft: boolean) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString();

    // Automatically format read time if user enters just a number
    let formattedReadTime = readTime;
    if (readTime && /^\d+$/.test(readTime.trim())) {
        formattedReadTime = `${readTime.trim()} minute(s) reading time`;
    }

    let updatedArticlesList = [...articles];

    if (isEditing && existingArticle) {
        const updatedPost: BlogArticle = {
            ...existingArticle,
            titleKey: title,
            descriptionKey: description,
            contentKey: content,
            imageUrl: imageUrl || 'https://via.placeholder.com/800x400',
            date: formattedDate,
            author: author,
            readTimeKey: formattedReadTime || '5 min read',
            isHidden: isDraft // Update visibility based on action
        };
        updateArticle(updatedPost);
        updatedArticlesList = articles.map(a => a.id === updatedPost.id ? updatedPost : a);
        logActivity('EDIT_POST', `Edited post ID ${existingArticle.id}: ${title.substring(0, 20)}... (${isDraft ? 'Draft' : 'Published'})`);
    } else {
        const newArticle: BlogArticle = {
          id: Math.max(...articles.map((a) => a.id), 0) + 1,
          titleKey: title,
          descriptionKey: description,
          contentKey: content,
          imageUrl: imageUrl || 'https://via.placeholder.com/800x400',
          date: formattedDate,
          author: author,
          readTimeKey: formattedReadTime || '5 min read',
          tagsKey: 'Community',
          isHidden: isDraft, // Set visibility based on action
        };
        addArticle(newArticle);
        updatedArticlesList = [newArticle, ...articles];
        logActivity('CREATE_POST', `Created post: ${title.substring(0, 20)}... (${isDraft ? 'Draft' : 'Published'})`);
    }

    setLocalSuccess(isDraft ? t('draftSavedSuccess') : (isEditing ? t('updatePostSuccess') : t('newPostSuccess')));
    
    // Trigger GitHub Sync automatically (background)
    await triggerGithubSync(updatedArticlesList);
    
    setIsSubmitting(false);

    // Redirect after a moment if successful
    setTimeout(() => {
        navigate('/admin/dashboard');
    }, 2000);
  };

  const PreviewModal = () => {
    if (!showPreview) return null;
    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-75 backdrop-blur-sm">
           <div className="min-h-screen">
               <div className="bg-white min-h-screen relative">
                   <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center shadow-sm">
                       <h3 className="text-lg font-bold text-gray-800">{t('preview')}</h3>
                       <button 
                           onClick={() => setShowPreview(false)}
                           className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
                       >
                           {t('closePreview')}
                       </button>
                   </div>
                   
                   {/* Blog Post Preview Content (Replicating BlogPostPage layout) */}
                   <div className="relative">
                        <div className="absolute inset-0 h-96">
                            <img className="w-full h-full object-cover" src={imageUrl || 'https://via.placeholder.com/800x400'} alt="Preview" />
                            <div className="absolute inset-0 bg-primary opacity-60 mix-blend-multiply" aria-hidden="true" />
                        </div>
                        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
                            <div className="max-w-3xl mx-auto text-center">
                                <h1 
                                    className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
                                    dangerouslySetInnerHTML={{__html: title || 'Post Title'}}
                                />
                                <div className="mt-6 flex justify-center items-center space-x-4 text-lg text-gray-200">
                                     {author && (
                                        <>
                                            <span className="font-semibold">{author}</span>
                                            <span aria-hidden="true">&middot;</span>
                                        </>
                                     )}
                                     <time dateTime={date}>{date}</time>
                                    <span aria-hidden="true">&middot;</span>
                                    <span>{readTime || '5 min read'}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative -mt-16 pb-16">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                             <div className="bg-white rounded-lg shadow-xl overflow-hidden min-h-[300px]">
                                <div 
                                    className="prose prose-lg prose-blue max-w-none mx-auto p-6 md:p-12 text-gray-700"
                                    dangerouslySetInnerHTML={{__html: content || description || 'Post Content'}}
                                />
                             </div>
                        </div>
                    </div>
               </div>
           </div>
        </div>
    )
  }

  if (!isAuthenticated) return null;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PreviewModal />
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isEditing ? t('editPost') : t('createPost')}
        </h1>
        
        {localSuccess && (
             <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
                <strong className="font-bold">{localSuccess}</strong>
            </div>
        )}

        {/* Sync status (generic) */}
        {syncStatus.message && (
             <div className={`mb-6 p-4 rounded-md shadow-sm border-l-4 ${
                syncStatus.type === 'loading' ? 'bg-blue-50 border-blue-500 text-blue-700' :
                syncStatus.type === 'success' ? 'bg-green-50 border-green-500 text-green-700' :
                syncStatus.type === 'error' ? 'bg-red-50 border-red-500 text-red-700' : 'bg-gray-50'
            }`}>
                <div className="flex items-center">
                    {syncStatus.type === 'loading' && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                    <span className="font-medium">{typeof syncStatus.message === 'string' ? syncStatus.message : JSON.stringify(syncStatus.message)}</span>
                </div>
            </div>
        )}

        <form className="space-y-6">
          <RichTextEditor
            label={t('title')}
            value={title}
            onChange={setTitle}
            height="h-16"
            className="mb-4"
            toolbar={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('authorLabel')}</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. John Doe"
                />
             </div>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('dateLabel')}</label>
                <input
                  type="date"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
             </div>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('readTimeLabel')}</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  placeholder="e.g. 5"
                />
             </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t('imageUrl')}</label>
            <input
              type="url"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <RichTextEditor
            label={t('descriptionLabel')}
            value={description}
            onChange={setDescription}
            height="h-32"
          />

          <RichTextEditor
            label={t('contentLabel')}
            value={content}
            onChange={setContent}
            height="h-96"
          />

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-6 border-t border-gray-100">
             <div className="flex space-x-3">
                <button
                    type="button"
                    onClick={() => navigate('/admin/dashboard')}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 font-medium"
                    disabled={isSubmitting}
                >
                    {t('cancel')}
                </button>
                <button
                    type="button"
                    onClick={() => setShowPreview(true)}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md font-medium hover:bg-gray-200 transition-colors"
                >
                    {t('preview')}
                </button>
             </div>
             
             <div className="flex space-x-3">
                <button
                    type="button"
                    onClick={(e) => handleSubmit(e, true)}
                    className="px-6 py-2 bg-gray-600 text-white rounded-md font-bold shadow-md hover:bg-gray-700 transition-all"
                    disabled={isSubmitting}
                >
                    {t('saveAsDraft')}
                </button>
                <button
                    type="button"
                    onClick={(e) => handleSubmit(e, false)}
                    className={`px-6 py-2 bg-primary text-white rounded-md font-bold shadow-md transition-all flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 hover:shadow-lg'}`}
                    disabled={isSubmitting}
                >
                    {isSubmitting && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                    {isSubmitting ? t('publishingToGithub') : t('publish')}
                </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogPage;
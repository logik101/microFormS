
import React, { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';
import { useBlog } from '../context/BlogContext';

const BlogPostPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslations();
    const { articles } = useBlog();

    const article = articles.find(a => a.id.toString() === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!article) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                <h1 className="text-3xl font-bold">Article not found</h1>
                <p className="mt-4">The blog post you are looking for does not exist.</p>
                <NavLink to="/blog" className="mt-8 inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg">
                    {t('backToBlog')}
                </NavLink>
            </div>
        );
    }
    
    // Determine content to show. If it's a translation key, translate it. If it's direct HTML content (from admin), use it directly.
    // However, existing logic treats titleKey/contentKey as potentially keys OR direct content if missing in translations.
    // t() handles fallback.
    const titleContent = t(article.titleKey);
    const bodyContent = t(article.contentKey || article.descriptionKey);

    return (
        <div className="bg-white">
            <div className="relative">
                <div className="absolute inset-0 h-96">
                    <img className="w-full h-full object-cover" src={article.imageUrl} alt={stripHtml(titleContent)} />
                    <div className="absolute inset-0 bg-primary opacity-60 mix-blend-multiply" aria-hidden="true" />
                </div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 
                            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
                            dangerouslySetInnerHTML={{__html: titleContent}}
                        />
                        <div className="mt-6 flex justify-center items-center space-x-4 text-lg text-gray-200">
                             {article.author && (
                                <>
                                    <span className="font-semibold">{article.author}</span>
                                    <span aria-hidden="true">&middot;</span>
                                </>
                             )}
                             <time dateTime={article.date}>{article.date}</time>
                            <span aria-hidden="true">&middot;</span>
                            <span>{t(article.readTimeKey)}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative -mt-16 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                        <div 
                            className="prose prose-lg prose-blue max-w-none mx-auto p-6 md:p-12 text-gray-700"
                            dangerouslySetInnerHTML={{__html: bodyContent}}
                        />
                     </div>
                </div>
            </div>
             <div className="text-center pb-16">
                <NavLink to="/blog" className="text-accent hover:text-amber-600 font-bold text-base">
                    &larr; {t('backToBlog')}
                </NavLink>
            </div>
        </div>
    );
};

// Helper to strip HTML for alt tag
const stripHtml = (html: string) => {
   const tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
};

export default BlogPostPage;

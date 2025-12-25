
import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { useBlog } from '../context/BlogContext';
import { BlogCard } from '../components/BlogCard';
import { NavLink } from 'react-router-dom';

const BlogPage: React.FC = () => {
    const { t } = useTranslations();
    const { articles } = useBlog();

    // Filter out hidden articles
    const visibleArticles = articles.filter(article => !article.isHidden);

    return (
        <div className="bg-light pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-dark sm:text-4xl">{t('navBlog')}</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                        Insights and analysis on the future of microfinance and technology.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
                    {visibleArticles.length > 0 ? visibleArticles.map((article) => (
                       <div key={article.id} className="flex flex-col">
                            <NavLink to={`/blog/${article.id}`} className="block h-full transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl rounded-lg shadow-lg overflow-hidden">
                                <BlogCard article={article} />
                            </NavLink>
                        </div>
                    )) : (
                        <div className="col-span-full text-center py-10">
                            <p className="text-gray-500 text-lg">No posts available.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;

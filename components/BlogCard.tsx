
import React, { useState } from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { BlogArticle } from '../types';
import { FacebookIcon, TwitterXIcon, LinkedInIcon, WhatsAppIcon, LinkIcon } from './icons';

export const BlogCard: React.FC<{ article: BlogArticle }> = ({ article }) => {
    const { t } = useTranslations();
    const [copied, setCopied] = useState(false);

    const titleText = stripHtml(t(article.titleKey));
    const descriptionText = stripHtml(t(article.descriptionKey));
    
    // Construct share URL (assumes HashRouter)
    const shareUrl = `${window.location.origin}${window.location.pathname}#/blog/${article.id}`;

    const handleShare = (e: React.MouseEvent, platform: string) => {
        e.preventDefault();
        e.stopPropagation(); // Prevent card click navigation
        
        let url = '';
        const text = encodeURIComponent(titleText);
        const encodedUrl = encodeURIComponent(shareUrl);

        switch (platform) {
            case 'facebook':
                url = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                break;
            case 'twitter':
                url = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${text}`;
                break;
            case 'linkedin':
                url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}`;
                break;
            case 'whatsapp':
                url = `https://wa.me/?text=${text}%20${encodedUrl}`;
                break;
        }

        if (url) {
            window.open(url, '_blank', 'width=600,height=400');
        }
    };

    const handleCopyLink = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={article.imageUrl} alt={titleText} />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    {article.tagsKey && (
                        <p className="text-sm font-semibold text-primary">
                           {t(article.tagsKey)}
                        </p>
                    )}
                    <div className="block mt-2">
                        <p className="text-lg font-bold text-dark">{titleText}</p>
                        <p className="mt-3 text-base text-gray-600 line-clamp-3">{descriptionText}</p>
                    </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex space-x-1 text-sm text-gray-500">
                            {article.author && <span className="mr-2 font-medium text-gray-900">{article.author}</span>}
                            <time dateTime={article.date}>{article.date}</time>
                        </div>
                        <span className="text-sm text-gray-500">{t(article.readTimeKey)}</span>
                    </div>
                    
                    {/* Social Share Bar */}
                    <div className="flex items-center justify-between pt-2">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{t('share')}</span>
                        <div className="flex space-x-3">
                            <button onClick={(e) => handleShare(e, 'facebook')} className="text-gray-400 hover:text-blue-600 transition-colors" title="Share on Facebook">
                                <FacebookIcon className="h-4 w-4" />
                            </button>
                            <button onClick={(e) => handleShare(e, 'twitter')} className="text-gray-400 hover:text-black transition-colors" title="Share on X">
                                <TwitterXIcon className="h-4 w-4" />
                            </button>
                            <button onClick={(e) => handleShare(e, 'linkedin')} className="text-gray-400 hover:text-blue-700 transition-colors" title="Share on LinkedIn">
                                <LinkedInIcon className="h-4 w-4" />
                            </button>
                            <button onClick={(e) => handleShare(e, 'whatsapp')} className="text-gray-400 hover:text-green-500 transition-colors" title="Share on WhatsApp">
                                <WhatsAppIcon className="h-4 w-4" />
                            </button>
                            <button onClick={handleCopyLink} className={`transition-colors ${copied ? 'text-green-600' : 'text-gray-400 hover:text-gray-700'}`} title={copied ? t('linkCopied') : t('copyCode')}>
                                <LinkIcon className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const stripHtml = (html: string) => {
   const tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
};

import React from 'react';
import { useSearchParams, NavLink } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';
import { siteWideSearchIndex } from '../constants/searchData';
import { translations } from '../constants/translations';
import { SearchResultType } from '../types';
import { PageIcon, ServiceIcon, TeamIcon, FormationIcon, BlogIcon } from '../components/icons';

const getIconForType = (type: SearchResultType) => {
    switch (type) {
      case SearchResultType.PAGE: return <PageIcon />;
      case SearchResultType.SERVICE: return <ServiceIcon />;
      case SearchResultType.TEAM: return <TeamIcon />;
      case SearchResultType.FORMATION: return <FormationIcon />;
      case SearchResultType.BLOG: return <BlogIcon />;
      default: return <PageIcon />;
    }
};

const SearchResultsPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const { t, language } = useTranslations();

    const typeTranslations: Record<SearchResultType, string> = {
        [SearchResultType.PAGE]: t('searchResultTypePage'),
        [SearchResultType.SERVICE]: t('searchResultTypeService'),
        [SearchResultType.TEAM]: t('searchResultTypeTeam'),
        [SearchResultType.FORMATION]: t('searchResultTypeFormation'),
        [SearchResultType.BLOG]: t('searchResultTypeBlog'),
    };

    const searchResults = React.useMemo(() => {
        if (!query.trim()) return [];
        const lowerCaseQuery = query.toLowerCase();
        
        return siteWideSearchIndex.filter(item => {
            const title = (translations[item.titleKey]?.[language] || '').toLowerCase();
            const content = (translations[item.contentKey]?.[language] || '').toLowerCase();
            return title.includes(lowerCaseQuery) || content.includes(lowerCaseQuery);
        });
    }, [query, language]);

    const highlightMatch = (text: string) => {
        if (!query.trim()) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.split(regex).map((part, index) => 
            regex.test(part) ? <mark key={index} className="bg-accent bg-opacity-50 rounded-sm px-1">{part}</mark> : part
        );
    };

    return (
        <div className="bg-light py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto mb-12">
                    <h1 className="text-3xl font-extrabold text-dark sm:text-4xl text-center">
                        {t('searchResultsFor')}: <span className="text-primary">"{query}"</span>
                    </h1>
                </div>
                
                {searchResults.length > 0 ? (
                    <div className="max-w-4xl mx-auto space-y-6">
                         {searchResults.map((item) => (
                            <NavLink 
                                to={item.link} 
                                key={item.id} 
                                className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:border-primary border-2 border-transparent transition-all duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary text-white">
                                        {getIconForType(item.type)}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-primary">{typeTranslations[item.type]}</p>
                                        <h3 className="text-lg font-bold text-dark mt-1">{highlightMatch(t(item.titleKey))}</h3>
                                        <p className="mt-2 text-base text-gray-600 line-clamp-2">
                                            {highlightMatch(t(item.contentKey))}
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                         <div className="inline-block bg-white p-8 rounded-lg shadow-md">
                            <p className="text-xl text-gray-600">{t('noResultsFound')}</p>
                         </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchResultsPage;
import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';
import { useAuth } from '../context/AuthContext';
import LanguageSwitcher from './LanguageSwitcher';
import { MenuIcon, XIcon, SearchIcon, PageIcon, ServiceIcon, TeamIcon, FormationIcon, BlogIcon } from './icons';
import { siteWideSearchIndex } from '../constants/searchData';
import { translations } from '../constants/translations';
import { SearchResult, SearchResultType } from '../types';

const EXTERNAL_BLOG_URL = 'https://microfinance-blog-895917400056.us-west1.run.app/';

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

const SearchSuggestions: React.FC<{
  suggestions: SearchResult[];
  onSuggestionClick: () => void;
}> = ({ suggestions, onSuggestionClick }) => {
  const { t } = useTranslations();

  const typeTranslations: Record<SearchResultType, string> = {
    [SearchResultType.PAGE]: t('searchResultTypePage'),
    [SearchResultType.SERVICE]: t('searchResultTypeService'),
    [SearchResultType.TEAM]: t('searchResultTypeTeam'),
    [SearchResultType.FORMATION]: t('searchResultTypeFormation'),
    [SearchResultType.BLOG]: t('searchResultTypeBlog'),
  };

  return (
    <div className="absolute top-full mt-2 w-full md:w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
      <ul className="max-h-96 overflow-auto py-1">
        {suggestions.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.link}
              onClick={onSuggestionClick}
              className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <div className="mr-3 text-gray-400">{getIconForType(item.type)}</div>
              <div>
                <p className="font-semibold">{t(item.titleKey)}</p>
                <p className="text-xs text-gray-500">{typeTranslations[item.type]}</p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Header: React.FC = () => {
  const { t } = useTranslations();
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const navigate = useNavigate();
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length > 1) {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = siteWideSearchIndex.filter((item) => {
        const title = Object.values(translations[item.titleKey] || {}).join(' ').toLowerCase();
        const content = Object.values(translations[item.contentKey] || {}).join(' ').toLowerCase();
        return title.includes(lowerCaseQuery) || content.includes(lowerCaseQuery);
      });
      setSuggestions(filtered.slice(0, 10));
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
      setSearchQuery('');
      setSuggestions([]);
      setIsSearchOpen(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSuggestions([]);
    setIsSearchOpen(false);
    setIsMenuOpen(false);
  };

  const handleSuggestionClick = () => {
    setTimeout(() => {
      clearSearch();
    }, 100);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `py-2 px-4 rounded-md text-base font-semibold transition-colors duration-300 ${
      isActive ? 'text-primary font-bold' : 'text-gray-700 hover:text-primary'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-4 rounded-md text-base font-medium transition-colors duration-300 ${
      isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-light'
    }`;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" ref={searchContainerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/">
            <img
              className="h-10 sm:h-12 w-auto"
              src="https://logik101.github.io/microF/fulllogo_transparent_nobuffer.png"
              alt="MicroFormS Logo"
            />
          </NavLink>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavLink to="/" className={navLinkClass}>{t('navHome')}</NavLink>
            <NavLink to="/formations" className={navLinkClass}>{t('navFormations')}</NavLink>

            <a href={EXTERNAL_BLOG_URL} className="py-2 px-4 text-base font-semibold text-gray-700 hover:text-primary">
              {t('navBlog')}
            </a>

            <NavLink to="/about" className={navLinkClass}>{t('navAbout')}</NavLink>
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 p-2 rounded-md text-gray-700"
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-2 pb-3 space-y-1">
          <NavLink to="/" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>
            {t('navHome')}
          </NavLink>
          <NavLink to="/formations" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>
            {t('navFormations')}
          </NavLink>

          <a
            href={EXTERNAL_BLOG_URL}
            className="block py-2 px-4 text-base font-medium text-gray-700 hover:bg-light rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('navBlog')}
          </a>

          <NavLink to="/about" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>
            {t('navAbout')}
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;

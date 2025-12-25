import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';
import { useAuth } from '../context/AuthContext';
import LanguageSwitcher from './LanguageSwitcher';
import { MenuIcon, XIcon, SearchIcon, PageIcon, ServiceIcon, TeamIcon, FormationIcon, BlogIcon } from './icons';
import { siteWideSearchIndex } from '../constants/searchData';
import { translations } from '../constants/translations';
import { SearchResult, SearchResultType } from '../types';

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
    <div className="absolute top-full mt-2 w-full md:w-96 rounded-xl shadow-2xl bg-white/95 backdrop-blur-md ring-1 ring-black ring-opacity-5 z-20 border border-gray-100 overflow-hidden">
      <ul className="max-h-96 overflow-auto py-2">
        {suggestions.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.link}
              onClick={onSuggestionClick}
              className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 transition-colors border-b border-gray-50 last:border-0"
            >
              <div className="mr-3 text-primary bg-blue-100 p-2 rounded-full">{getIconForType(item.type)}</div>
              <div>
                <p className="font-bold text-gray-800">{t(item.titleKey)}</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-0.5">{typeTranslations[item.type]}</p>
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      setSuggestions(filtered.slice(0, 8)); // Limit suggestions
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
      setIsSearchOpen(false); // Close mobile search on submit
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSuggestions([]);
    setIsSearchOpen(false);
    setIsMenuOpen(false);
  };
  
  const handleSuggestionClick = () => {
    setTimeout(() => { // Timeout to allow navigation to complete
      clearSearch();
    }, 100);
  }

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `py-2 px-3 lg:px-4 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 ${
      isActive ? 'text-primary bg-blue-50 shadow-sm' : 'text-gray-600 hover:text-primary hover:bg-gray-50'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-3 px-4 rounded-lg text-base font-medium transition-colors duration-300 ${
      isActive
        ? 'bg-primary text-white shadow-md'
        : 'text-gray-700 hover:bg-gray-100'
    }`;

  return (
    <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-white py-4 shadow-sm'
        }`}
        ref={searchContainerRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <NavLink to="/" className="flex items-center gap-2 group">
              <img className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105" src="https://logik101.github.io/microF/fulllogo_transparent_nobuffer.png" alt="MicroFormS Logo" />
            </NavLink>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
            <NavLink to="/" className={navLinkClass}>
              {t('navHome')}
            </NavLink>
            <NavLink to="/formations" className={navLinkClass}>
              {t('navFormations')}
            </NavLink>
            <NavLink to="/blog" className={navLinkClass}>
              {t('navBlog')}
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              {t('navAbout')}
            </NavLink>
            
            <div className="relative ml-2 lg:ml-4">
              <form onSubmit={handleSearchSubmit} className="relative group">
                <input
                  type="search"
                  name="search"
                  placeholder={t('searchPlaceholder')}
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-32 lg:w-48 xl:w-64 bg-gray-100 group-hover:bg-white h-10 px-4 pl-10 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:w-64 lg:focus:w-72 transition-all duration-300 border border-transparent focus:border-primary/30"
                />
                <button type="submit" className="absolute left-0 top-0 mt-2.5 ml-3 text-gray-400 group-hover:text-primary transition-colors">
                  <SearchIcon className="w-5 h-5"/>
                </button>
              </form>
              {suggestions.length > 0 && (
                <SearchSuggestions suggestions={suggestions} onSuggestionClick={handleSuggestionClick} />
              )}
            </div>
            <div className="ml-2">
                <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
                setIsMenuOpen(false);
              }}
              className="p-2 rounded-full text-gray-600 hover:text-primary hover:bg-blue-50 transition-colors"
              aria-label="Toggle search"
            >
              <SearchIcon className="w-6 h-6"/>
            </button>
            <LanguageSwitcher />
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setIsSearchOpen(false);
              }}
              className="ml-1 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <XIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-white/95 backdrop-blur-sm border-b border-gray-100 absolute w-full shadow-lg animate-in slide-in-from-top-2">
          <div className="relative text-gray-600">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="search"
                name="search"
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={handleSearchChange}
                autoFocus
                className="w-full bg-gray-100 h-12 px-5 pl-12 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button type="submit" className="absolute left-0 top-0 mt-3.5 ml-4 text-gray-400">
                <SearchIcon className="w-5 h-5" />
              </button>
            </form>
            {suggestions.length > 0 && (
              <SearchSuggestions suggestions={suggestions} onSuggestionClick={handleSuggestionClick} />
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl animate-in slide-in-from-top-5">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <NavLink to="/" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>
              {t('navHome')}
            </NavLink>
            <NavLink to="/formations" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>
              {t('navFormations')}
            </NavLink>
            <NavLink to="/blog" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>
              {t('navBlog')}
            </NavLink>
            <NavLink to="/about" className={mobileNavLinkClass} onClick={() => setIsMenuOpen(false)}>
              {t('navAbout')}
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
import { useState, useEffect, useCallback } from 'react';

const VALID_PAGES = ['home', 'projects', 'team', 'journey', 'blog', 'join'];

function parsePageFromLocation() {
  const hash = window.location.hash.replace('#', '').toLowerCase().trim();
  if (VALID_PAGES.includes(hash)) return hash;

  const path = window.location.pathname.replace(/^\//, '').toLowerCase().trim();
  if (VALID_PAGES.includes(path)) return path;

  return 'home';
}

export function usePageRouter() {
  const [currentPage, setCurrentPage] = useState(() => parsePageFromLocation());

  useEffect(() => {
    const handleLocationChange = () => {
      const page = parsePageFromLocation();
      setCurrentPage(page);
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigate = useCallback((pageName, options = {}) => {
    const target = VALID_PAGES.includes(pageName) ? pageName : 'home';
    if (window.location.hash !== `#${target}`) {
      window.location.hash = `#${target}`;
    }
    setCurrentPage(target);

    if (options.scroll !== false) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return { currentPage, navigate };
}

import { useEffect, useState } from 'react';

export function useHash() {
  const [currentAnchor, setCurrentAnchor] = useState(window.location.hash);
  useEffect(() => {
    const navigateToCurrentAnchor = () => {
      setCurrentAnchor(window.location.hash);
    };
    window.addEventListener('hashchange', navigateToCurrentAnchor);
    return () => {
      window.removeEventListener('hashchange', navigateToCurrentAnchor);
    };
  }, []);
  return [currentAnchor, setCurrentAnchor];
}

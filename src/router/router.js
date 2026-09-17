// router.js
//
// The non-component half of the tiny custom router: reading/subscribing
// to the current path, and navigate(). Kept in its own plain-JS file
// (separate from Link.jsx) purely so Fast Refresh can tell components
// and utilities apart — it has no effect on behavior.

import { useEffect, useState } from 'react';

/** Reads and subscribes to the current pathname (e.g. "/privacy-policy"). */
export function useRoute() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    function handlePopState() {
      setPathname(window.location.pathname);
      // Wait one frame so the new page has actually rendered before we
      // try to scroll — otherwise an anchor target like #about might
      // not exist in the DOM yet.
      requestAnimationFrame(() => {
        requestAnimationFrame(scrollToHashOrTop);
      });
    }
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return pathname;
}

/**
 * Changes the URL without a full page reload, then notifies anything
 * subscribed via useRoute(). Dispatching a PopStateEvent by hand is a
 * standard trick for tiny routers: it reuses the same listener that
 * already handles the browser's real Back/Forward buttons.
 */
export function navigate(path) {
  if (path !== window.location.pathname + window.location.hash) {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
}

function scrollToHashOrTop() {
  const hash = window.location.hash;
  if (hash) {
    const target = document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
  }
  window.scrollTo({ top: 0, behavior: 'auto' });
}

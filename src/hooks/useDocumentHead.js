// useDocumentHead.js
//
// index.html has one static title/description/canonical, set for the
// homepage. Since this project has no SSR and no metadata library
// installed, each page sets its own via this small effect hook instead.
// It only ever touches these three tags — it never touches the Google
// Search Console verification tag or the Open Graph/Twitter tags.

import { useEffect } from 'react';

export function useDocumentHead({ title, description, canonical }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', description);
    }

    if (canonical) {
      const link = document.querySelector('link[rel="canonical"]');
      if (link) link.setAttribute('href', canonical);
    }
  }, [title, description, canonical]);
}

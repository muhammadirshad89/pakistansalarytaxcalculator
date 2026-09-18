import { useEffect, useState } from 'react';
import { Link } from '../router/Link.jsx';
import { useRoute } from '../router/router.js';

// Two of these are real routes; the other two are anchors into sections
// that already exist on the homepage (see id="how-calculated" and
// id="faq" on those components) — reusing the same hash-scroll behavior
// already built for the footer's About/Contact links, rather than
// duplicating that content on its own page.
const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Salary Tax Guide', to: '/salary-tax-2026-27' },
  { label: 'Income Tax Slabs', to: '/income-tax-slabs-2026-27' },
  { label: 'How Tax Is Calculated', to: '/#how-calculated' },
  { label: 'FAQ', to: '/#faq' },
];

export default function SiteHeader() {
  const pathname = useRoute();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close the mobile menu whenever the route changes. This adjusts state
  // during render (React's documented pattern for "reset state when a
  // prop changes") rather than in an effect, so it doesn't trigger an
  // extra render pass.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsMenuOpen(false);
  }

  // Let Escape close the mobile menu too.
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') setIsMenuOpen(false);
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  // Only real page routes get an active state — the two anchor items
  // above point at sections on the homepage, and reliably highlighting
  // those as you scroll would need a scroll-position listener, which
  // felt like more complexity than this header needs.
  function isActive(itemTo) {
    return !itemTo.includes('#') && itemTo === pathname;
  }

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="site-header-brand" onClick={closeMenu}>
          <span className="site-header-title">Pakistan Salary Tax Calculator</span>
          <span className="site-header-subtitle">Tax Year 2026-27</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="site-nav-menu"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-bar" aria-hidden="true" />
          <span className="nav-toggle-bar" aria-hidden="true" />
          <span className="nav-toggle-bar" aria-hidden="true" />
        </button>

        <div id="site-nav-menu" className={`site-nav-menu${isMenuOpen ? ' is-open' : ''}`}>
          <nav className="site-nav" aria-label="Main">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    onClick={closeMenu}
                    className={isActive(item.to) ? 'is-active' : ''}
                    aria-current={isActive(item.to) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link to="/" className="nav-cta" onClick={closeMenu}>
            Calculate Tax
          </Link>
        </div>
      </div>
    </header>
  );
}

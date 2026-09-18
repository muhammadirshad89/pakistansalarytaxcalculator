// Link.jsx
//
// A drop-in replacement for <a> that navigates client-side using the
// navigate() function from router.js. Middle-click, Ctrl/Cmd-click, and
// external targets still behave like a normal link (open in a new tab,
// etc.) — only a plain left-click is intercepted.

import { navigate } from './router.js';

export function Link({ to, children, onClick, ...rest }) {
  function handleClick(event) {
    // Let the caller react to the click (e.g. closing a mobile menu)
    // before we decide whether to navigate.
    if (onClick) onClick(event);

    const isModifiedClick =
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey;

    if (isModifiedClick) return;

    event.preventDefault();
    navigate(to);
  }

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

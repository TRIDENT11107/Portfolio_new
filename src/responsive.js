// Lightweight responsive helper
// - Adds body classes: is-mobile / is-tablet / is-desktop
// - Sets CSS variables for spacing/scale so CSS can opt in
// This script is intentionally additive and non-destructive.

const BREAKPOINTS = {
  mobile: 420,
  tablet: 768,
};

function applyVars(vars = {}) {
  const root = document.documentElement;
  Object.entries(vars).forEach(([k, v]) => {
    root.style.setProperty(`--${k}`, v);
  });
}

function update() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  const w = window.innerWidth;
  const body = document.body;
  body.classList.remove('is-mobile', 'is-tablet', 'is-desktop');

  if (w <= BREAKPOINTS.mobile) {
    body.classList.add('is-mobile');
    applyVars({
      'section-vertical': '3rem',
      'section-h-padding': '1rem',
      'text-scale': '0.92',
      'card-padding': '1rem',
      'btn-min-height': '44px'
    });
  } else if (w <= BREAKPOINTS.tablet) {
    body.classList.add('is-tablet');
    applyVars({
      'section-vertical': '4rem',
      'section-h-padding': '1rem',
      'text-scale': '0.96',
      'card-padding': '1.25rem',
      'btn-min-height': '44px'
    });
  } else {
    body.classList.add('is-desktop');
    applyVars({
      'section-vertical': '8rem',
      'section-h-padding': '2rem',
      'text-scale': '1',
      'card-padding': '2.5rem',
      'btn-min-height': '44px'
    });
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('load', update);
  let t = null;
  window.addEventListener('resize', () => {
    clearTimeout(t);
    t = setTimeout(update, 120);
  });
}

const Responsive = { update };

// Usage: import './responsive.css'; import Responsive from './responsive';
// Responsive will attach resize listeners and set body classes/vars.
export default Responsive;

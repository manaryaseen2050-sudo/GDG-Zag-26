/**
 * Navbar — Sticky, Glassmorphism, Hamburger Menu
 */
(function () {
  'use strict';

  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.navbar__link');
  let overlay = document.querySelector('.navbar__overlay');

  // Create overlay if it doesn't exist
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'navbar__overlay';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);
  }

  /* ==========================
     Sticky Navbar
  ========================== */
  function handleScroll() {
    if (!navbar) return;

    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ==========================
     Mobile Menu
  ========================== */
  function openMenu() {
    navToggle?.classList.add('active');
    navMenu?.classList.add('active');
    overlay.classList.add('active');

    navToggle?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navToggle?.classList.remove('active');
    navMenu?.classList.remove('active');
    overlay.classList.remove('active');

    navToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    if (navMenu?.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  navToggle?.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);

  /* ==========================
     Active Link on Click
  ========================== */
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();

      navLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  /* ==========================
     Highlight Active Section
  ========================== */
  const sections = document.querySelectorAll('section[id]');

  function highlightNav() {
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');

          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });
  highlightNav();

  /* ==========================
     Close Menu with ESC
  ========================== */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu?.classList.contains('active')) {
      closeMenu();
    }
  });

})();
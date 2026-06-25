/**
 * Manar Yassin — Premium Portfolio
 */

(function () {
  'use strict';

  const GITHUB_USER = 'manaryaseen2050-sudo';
  const GITHUB_ORG = 'GDG-Zag-26';

  /* DOM */
  const loader = document.getElementById('loader');
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const themeToggle = document.getElementById('themeToggle');
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const backToTop = document.getElementById('backToTop');
  const revealElements = document.querySelectorAll('.reveal');
  const sections = document.querySelectorAll('section[id]');
  const testimonialTrack = document.getElementById('testimonialTrack');
  const contactForm = document.getElementById('contactForm');
  const githubProjects = document.getElementById('githubProjects');
  const frontendCountEl = document.getElementById('frontendCount');

  /* ============================================
     Loader
     ============================================ */
  function initLoader() {
    document.body.classList.add('loading');
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.remove('loading');
      }, 1000);
    });
  }

  /* ============================================
     Theme Toggle
     ============================================ */
  function initTheme() {
    const saved = localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (saved === 'dark' || (!saved && prefersDark)) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('portfolio-theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('portfolio-theme', 'dark');
      }
    });
  }

  /* ============================================
     Mobile Nav
     ============================================ */
  function initMobileNav() {
    const closeMenu = () => {
      navMenu.classList.remove('open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navLinks.forEach((link) => link.addEventListener('click', closeMenu));

    document.addEventListener('click', (e) => {
      if (
        navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        closeMenu();
      }
    });
  }

  /* ============================================
     Smooth Scroll
     ============================================ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  /* ============================================
     Scroll UI
     ============================================ */
  function getHeaderOffset() {
    return parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) || 72;
  }

  function updateActiveNav() {
    const scrollPos = window.scrollY + getHeaderOffset() + 20;

    sections.forEach((section) => {
      const top = section.offsetTop - getHeaderOffset();
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }

  function handleScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    scrollProgressBar.style.width = progress + '%';
    header.classList.toggle('scrolled', scrollTop > 50);
    backToTop.classList.toggle('visible', scrollTop > 400);
    updateActiveNav();
  }

  function initBackToTop() {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ============================================
     Typed.js Animation
     ============================================ */
  function initTyped() {
    if (typeof Typed === 'undefined') return;

    new Typed('#typedText', {
      strings: ['UI/UX Designer', 'Frontend Developer', 'Creative Problem Solver'],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      showCursor: false,
    });
  }

  /* ============================================
     Scroll Reveal
     ============================================ */
  function initScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
  }

  /* ============================================
     Counter Animation
     ============================================ */
  function animateCounter(el, target) {
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(update);
  }

  function initCounters() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.target, 10);
            if (!isNaN(target)) animateCounter(el, target);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('.stat-number[data-target]:not(#frontendCount)').forEach((el) => {
      observer.observe(el);
    });
  }

  /* ============================================
     Skill Progress Bars
     ============================================ */
  function initSkillBars() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fill = entry.target;
            const width = fill.dataset.width;
            if (width) fill.style.width = width + '%';
            observer.unobserve(fill);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('.skill-fill').forEach((el) => observer.observe(el));
  }

  /* ============================================
     Testimonial Infinite Scroll
     ============================================ */
  function initTestimonials() {
    if (!testimonialTrack) return;
    testimonialTrack.querySelectorAll('.testimonial-card').forEach((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      testimonialTrack.appendChild(clone);
    });
  }

  /* ============================================
     GitHub Projects
     ============================================ */
  async function fetchGitHubProjects() {
    if (!githubProjects) return;

    try {
      const [userRes, orgRes] = await Promise.allSettled([
        fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6`),
        fetch(`https://api.github.com/repos/${GITHUB_USER}/${GITHUB_ORG}`),
      ]);

      let repos = [];

      if (userRes.status === 'fulfilled' && userRes.value.ok) {
        repos = await userRes.value.json();
      }

      if (orgRes.status === 'fulfilled' && orgRes.value.ok) {
        const orgRepo = await orgRes.value.json();
        const exists = repos.some((r) => r.id === orgRepo.id);
        if (!exists) repos.unshift(orgRepo);
      }

      repos = repos.filter((r) => !r.fork).slice(0, 6);

      if (repos.length === 0) {
        githubProjects.innerHTML = `
          <div class="github-error glass-card">
            <p>No public repositories found. Visit my <a href="https://github.com/${GITHUB_USER}" target="_blank" rel="noopener noreferrer">GitHub profile</a>.</p>
          </div>`;
        return;
      }

      if (frontendCountEl) {
        frontendCountEl.dataset.target = repos.length;
        animateCounter(frontendCountEl, repos.length);
      }

      githubProjects.innerHTML = repos
        .map(
          (repo) => `
        <article class="github-card glass-card">
          <h4><i class="fa-brands fa-github"></i> ${escapeHtml(repo.name)}</h4>
          <p>${escapeHtml(repo.description || 'No description available.')}</p>
          <div class="github-meta">
            ${repo.language ? `<span><i class="fa-solid fa-circle" style="font-size:0.5rem;color:var(--primary)"></i> ${escapeHtml(repo.language)}</span>` : ''}
            <span><i class="fa-regular fa-star"></i> ${repo.stargazers_count}</span>
          </div>
          <div class="project-actions">
            <a href="${repo.html_url}" class="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> GitHub</a>
            ${repo.homepage ? `<a href="${repo.homepage}" class="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>` : ''}
          </div>
        </article>`
        )
        .join('');
    } catch {
      githubProjects.innerHTML = `
        <div class="github-error glass-card">
          <p>Unable to load GitHub projects. View them on <a href="https://github.com/${GITHUB_USER}/${GITHUB_ORG}" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        </div>`;

      if (frontendCountEl) {
        frontendCountEl.dataset.target = '1';
        animateCounter(frontendCountEl, 1);
      }
    }
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /* ============================================
     Contact Form Validation
     ============================================ */
  function initContactForm() {
    if (!contactForm) return;

    const fields = {
      name: { el: document.getElementById('name'), error: document.getElementById('nameError'), validate: (v) => v.trim().length >= 2 || 'Name must be at least 2 characters.' },
      email: { el: document.getElementById('email'), error: document.getElementById('emailError'), validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Please enter a valid email address.' },
      subject: { el: document.getElementById('subject'), error: document.getElementById('subjectError'), validate: (v) => v.trim().length >= 3 || 'Subject must be at least 3 characters.' },
      message: { el: document.getElementById('message'), error: document.getElementById('messageError'), validate: (v) => v.trim().length >= 10 || 'Message must be at least 10 characters.' },
    };

    const formSuccess = document.getElementById('formSuccess');

    function validateField(key) {
      const field = fields[key];
      const result = field.validate(field.el.value);
      const isValid = result === true;

      field.el.classList.toggle('error', !isValid);
      field.error.textContent = isValid ? '' : result;
      return isValid;
    }

    Object.keys(fields).forEach((key) => {
      fields[key].el.addEventListener('blur', () => validateField(key));
      fields[key].el.addEventListener('input', () => {
        if (fields[key].el.classList.contains('error')) validateField(key);
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formSuccess.hidden = true;

      const results = Object.keys(fields).map((key) => validateField(key));
      if (!results.every(Boolean)) return;

      const { name, email, subject, message } = {
        name: fields.name.el.value.trim(),
        email: fields.email.el.value.trim(),
        subject: fields.subject.el.value.trim(),
        message: fields.message.el.value.trim(),
      };

      const mailtoLink = `mailto:manar.yassin.software@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
      window.location.href = mailtoLink;

      formSuccess.hidden = false;
      contactForm.reset();
      Object.values(fields).forEach((f) => {
        f.el.classList.remove('error');
        f.error.textContent = '';
      });
    });
  }

  /* ============================================
     Init
     ============================================ */
  function init() {
    initLoader();
    initTheme();
    initMobileNav();
    initSmoothScroll();
    initBackToTop();
    initTyped();
    initScrollReveal();
    initCounters();
    initSkillBars();
    initTestimonials();
    initContactForm();
    fetchGitHubProjects();

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

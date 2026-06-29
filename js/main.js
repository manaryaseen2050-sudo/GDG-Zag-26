/**
 * Main — Loader, Cursor Glow, Parallax, Tilt, Magnetic Buttons, Ripple, Form, Lazy Load
 */
(function () {
  'use strict';

  const loader = document.getElementById('loader');
  const cursorGlow = document.getElementById('cursorGlow');
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  document.body.classList.add('loading');

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader?.classList.add('hidden');
      document.body.classList.remove('loading');
      document.body.classList.add('page-loaded');
    }, 1800);
  });

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && cursorGlow) {
    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateGlow() {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      cursorGlow.style.left = `${glowX}px`;
      cursorGlow.style.top = `${glowY}px`;
      requestAnimationFrame(animateGlow);
    }

    animateGlow();
  }

  const parallaxElements = document.querySelectorAll('[data-parallax]');

  if (parallaxElements.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('mousemove', (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (e.clientX - centerX) / centerX;
      const moveY = (e.clientY - centerY) / centerY;

      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax')) || 0.05;
        el.style.transform = `translate(${moveX * speed * 100}px, ${moveY * speed * 100}px)`;
      });
    });
  }

  const tiltElements = document.querySelectorAll('[data-tilt]');

  if (tiltElements.length && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    tiltElements.forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    });
  }

  const magneticButtons = document.querySelectorAll('.btn--magnetic');

  if (magneticButtons.length && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    magneticButtons.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
      });
    });
  }

  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = contactForm.querySelector('#name');
      const email = contactForm.querySelector('#email');
      const subject = contactForm.querySelector('#subject');
      const message = contactForm.querySelector('#message');
      let valid = true;

      [name, email, subject, message].forEach((field) => {
        field.classList.remove('error');
        field.parentElement?.classList.remove('shake');

        if (!field.value.trim()) {
          field.classList.add('error');
          field.parentElement?.classList.add('shake');
          valid = false;
        }
      });

      if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add('error');
        email.parentElement?.classList.add('shake');
        valid = false;
      }

      if (!valid) {
        formStatus.textContent = 'Please fill in all fields correctly.';
        formStatus.className = 'form__status error';
        return;
      }

      const mailtoLink = `mailto:manar.yassin.software@gmail.com?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(`Name: ${name.value}\nEmail: ${email.value}\n\n${message.value}`)}`;
      window.location.href = mailtoLink;

      formStatus.textContent = 'Opening your email client... Thank you for reaching out!';
      formStatus.className = 'form__status success';
      contactForm.reset();

      setTimeout(() => {
        formStatus.textContent = '';
        formStatus.className = 'form__status';
      }, 5000);
    });
  }

  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('lazy-loaded');
            imageObserver.unobserve(img);
          }
        });
      },
      { rootMargin: '100px' }
    );

    lazyImages.forEach((img) => imageObserver.observe(img));
  }

  const testimonialsSlider = document.getElementById('testimonialsSlider');
  if (testimonialsSlider) {
    testimonialsSlider.addEventListener('mouseenter', () => {
      testimonialsSlider.style.animationPlayState = 'paused';
    });
    testimonialsSlider.addEventListener('mouseleave', () => {
      testimonialsSlider.style.animationPlayState = 'running';
    });
  }
})();

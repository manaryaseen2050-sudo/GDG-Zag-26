/**
 * Typing Animation
 */
(function () {
  'use strict';

  const typingElement = document.getElementById('typingText');
  if (!typingElement) return;

  const roles = [
    'UI Designer',
    'UX Designer',
    'Frontend Developer',
    'Figma Expert'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setTimeout(type, 1000);
  } else {
    typingElement.textContent = roles[0];
  }
})();

# Manar Yassin — Premium Portfolio

A modern, luxurious personal portfolio website for **Manar Yassin**, UI/UX Designer & Frontend Developer. Built with pure HTML5, CSS3, and Vanilla JavaScript (ES6).

## Features

- Fully responsive, mobile-first design
- Dark / Light mode toggle with CSS variables
- Sticky glassmorphism navbar with hamburger menu
- Smooth scroll & scroll progress bar
- Loading animation & scroll reveal animations
- Typing animation, cursor glow & mouse parallax
- Animated skill progress bars & counter statistics
- Auto-scrolling testimonials slider (pauses on hover)
- Card tilt, magnetic buttons & ripple effects
- Contact form with validation
- SEO optimized & accessible semantic HTML

## Tech Stack

- HTML5
- CSS3 (Custom properties, Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6)

No frameworks or libraries used.

## Project Structure

```
Portfolio/
├── index.html
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── navbar.js
│   ├── typing.js
│   ├── theme.js
│   └── scroll.js
├── assets/
│   ├── images/
│   ├── icons/
│   ├── certificates/
│   ├── projects/
│   └── Manar-Yassin-CV.html
└── README.md
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your browser

No build step or dependencies required.

### Local Server (Optional)

For the best experience, serve via a local server:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .
```

Then visit `http://localhost:8000`

## Customization

### Replace Images

Swap SVG placeholders in `assets/images/`, `assets/projects/`, and `assets/certificates/` with your own photos and project screenshots.

### CV Download

The CV link opens `assets/Manar-Yassin-CV.html`. To use a PDF instead:

1. Print the HTML page to PDF (Ctrl+P → Save as PDF), or
2. Replace with your own `Manar-Yassin-CV.pdf` and update the links in `index.html`

### Colors & Theme

Edit CSS variables in `css/style.css` under `:root` and `[data-theme="dark"]`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Manar Yassin. All Rights Reserved.

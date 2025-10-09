/* temples.js */
(function () {
  // Populate dynamic year & last modified
 // Get current year dynamically
const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

  const lastEl = document.getElementById('lastModified');
  if (lastEl) lastEl.textContent = `Last Modification: ${document.lastModified}`;

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('site-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', function (e) {
      const isOpen = nav.classList.toggle('show');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      hamburger.textContent = isOpen ? '✕' : '☰';
      hamburger.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    // Close on outside click for small screens
    document.addEventListener('click', function (e) {
      if (!nav.classList.contains('show')) return;
      if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('show');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.textContent = '☰';
        hamburger.setAttribute('aria-label', 'Open navigation');
      }
    });

    // Close menu when resizing to large screens
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 800 && nav.classList.contains('show')) {
        nav.classList.remove('show');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.textContent = '☰';
      }
    });
  }
})();
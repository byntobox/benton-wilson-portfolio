// Essential content and links work without this enhancement.
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');
const mobileLayout = window.matchMedia('(max-width: 860px)');

if (menuToggle && navigation) {
  function closeMenu({ restoreFocus = false } = {}) {
    navigation.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    if (restoreFocus) menuToggle.focus();
  }
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) closeMenu();
    else {
      navigation.classList.add('open');
      menuToggle.setAttribute('aria-expanded', 'true');
      menuToggle.setAttribute('aria-label', 'Close navigation');
      navigation.querySelector('a')?.focus();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigation.classList.contains('open')) closeMenu({ restoreFocus: true });
  });
  // Disclosure, not a modal: Tab can leave the menu and closes it naturally.
  document.addEventListener('focusin', (event) => {
    if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
  document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      const wasOpen = navigation.classList.contains('open');
      closeMenu();
      const href = link.getAttribute('href');
      if (wasOpen && href.startsWith('#')) document.getElementById(href.slice(1))?.focus({ preventScroll: true });
    });
  });
  mobileLayout.addEventListener('change', () => closeMenu({ restoreFocus: mobileLayout.matches && navigation.contains(document.activeElement) }));
  // Collapse the fallback navigation only after all handlers are ready.
  menuToggle.hidden = false;
  menuToggle.setAttribute('aria-label', 'Open navigation');
  document.documentElement.classList.add('nav-ready');
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

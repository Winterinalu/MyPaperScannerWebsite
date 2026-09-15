const developmentModal = document.querySelector('[data-development-modal]');
window.addEventListener('load', () => window.lucide?.createIcons());
const developmentCloseButtons = document.querySelectorAll('[data-development-close]');
const developmentCloseButton = developmentModal?.querySelector('.development-modal-close');

function closeDevelopmentModal() {
  if (!developmentModal) return;
  developmentModal.classList.add('is-hidden');
  document.body.classList.remove('development-modal-open');
}

if (developmentModal) {
  document.body.classList.add('development-modal-open');
  developmentCloseButtons.forEach((element) => element.addEventListener('click', closeDevelopmentModal));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeDevelopmentModal();
  });
  developmentCloseButton?.focus();
}

const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');

document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;

  const target = document.querySelector(link.getAttribute('href'));
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
  window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
});

function closeMenu() {
  if (!menuButton || !menu) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menu.classList.remove('is-open');
}

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menu.classList.toggle('is-open', !isOpen);
});

menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('click', (event) => {
  if (menu?.classList.contains('is-open') && !menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});

const workflow = document.querySelector('.workflow-steps');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && workflow && !reducedMotion) {
  const workflowObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  workflowObserver.observe(workflow);
} else if (workflow) {
  workflow.classList.add('is-visible');
}

const heroDevice = document.querySelector('.hero-device-wrap');

if (heroDevice) {
  const heroSceneImage = document.createElement('img');
  heroSceneImage.className = 'hero-scene-image';
  heroSceneImage.src = 'assets/hero-phone-scene.svg';
  heroSceneImage.alt = 'MyPaperScanner phone preview with local privacy and PDF status notes';
  heroDevice.append(heroSceneImage);
}

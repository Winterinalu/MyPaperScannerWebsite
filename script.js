const developmentModal = document.querySelector('[data-development-modal]');
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

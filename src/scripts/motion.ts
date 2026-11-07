// Progressive enhancement: all content remains visible without JavaScript.
const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
let observer: IntersectionObserver | undefined;
const elements = Array.from(
  document.querySelectorAll<HTMLElement>(
    '.section-heading, .project-card, .expertise-card, .timeline-item, .education-card, .certification-card, .implementation-note',
  ),
);
function initializeMotion() {
  observer?.disconnect();
  elements.forEach((element) => element.classList.remove('reveal-pending'));
  if (preference.matches || !('IntersectionObserver' in window)) return;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries)
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          observer?.unobserve(entry.target);
        }
    },
    { rootMargin: '0px 0px 35px 0px', threshold: 0.05 },
  );
  elements.forEach((element) => {
    if (element.getBoundingClientRect().top > window.innerHeight) {
      element.classList.add('reveal-pending');
      observer?.observe(element);
    }
  });
}
initializeMotion();
preference.addEventListener('change', initializeMotion);
window.addEventListener('beforeprint', () => {
  observer?.disconnect();
  elements.forEach((element) => element.classList.remove('reveal-pending'));
});

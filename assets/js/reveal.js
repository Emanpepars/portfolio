/**
 * Reveal-on-scroll: fade & translate elements when they enter the viewport.
 * Driven by IntersectionObserver — adds .is-visible (CSS handles the transition).
 */
(() => {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );

  targets.forEach((element) => observer.observe(element));
})();

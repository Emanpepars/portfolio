/**
 * Custom cursor — a precise dot and a smoothed trailing ring.
 * Uses `transform: translate3d()` to stay on the GPU compositor layer,
 * avoiding layout reflow on every mousemove (vs. left/top).
 * Disabled on touch devices and when reduced-motion is requested.
 */
(() => {
  const canRunCursor =
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!canRunCursor) return;

  const cursor = document.getElementById("cursor");
  const ring = document.getElementById("cursor-ring");
  if (!cursor || !ring) return;

  // Belt-and-suspenders: inject a stylesheet that hides the OS cursor
  // everywhere using a transparent SVG fallback for browsers/OSes that
  // silently drop `cursor: none` (some macOS + Safari combos).
  const transparentCursor =
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'/>\") 0 0, none";
  const style = document.createElement("style");
  style.textContent = `
    *, *::before, *::after { cursor: ${transparentCursor} !important; }
  `;
  document.head.appendChild(style);

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  });

  const animateRing = () => {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(animateRing);
  };
  animateRing();

  const interactiveSelector = "a, button, .project-card, .approach-cell";
  const enlarge = () => {
    cursor.style.width = "18px";
    cursor.style.height = "18px";
    ring.style.width = "50px";
    ring.style.height = "50px";
    ring.style.borderColor = "rgba(34, 211, 238, 0.7)";
  };
  const reset = () => {
    cursor.style.width = "10px";
    cursor.style.height = "10px";
    ring.style.width = "36px";
    ring.style.height = "36px";
    ring.style.borderColor = "rgba(148, 163, 184, 0.5)";
  };

  document.querySelectorAll(interactiveSelector).forEach((element) => {
    element.addEventListener("mouseenter", enlarge);
    element.addEventListener("mouseleave", reset);
  });
})();

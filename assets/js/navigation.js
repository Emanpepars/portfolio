/**
 * Navigation behavior:
 *  - Toggle the mobile menu via the hamburger button.
 *  - Close the menu on link click, Escape key, or outside-tap.
 *  - Scroll-spy: highlight the link whose section is in view.
 *    Throttled with requestAnimationFrame to avoid layout thrash.
 */
(() => {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  const menuLinks = document.querySelectorAll(".nav-menu .nav-link");
  const allLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");
  if (!nav) return;

  const setOpen = (open) => {
    nav.setAttribute("data-open", String(open));
    if (toggle) toggle.setAttribute("aria-expanded", String(open));
  };

  /* ---- Mobile menu ---- */
  if (toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.getAttribute("data-open") === "true";
      setOpen(!isOpen);
    });

    menuLinks.forEach((link) => link.addEventListener("click", () => setOpen(false)));

    document.addEventListener("click", (event) => {
      if (nav.getAttribute("data-open") === "true" && !nav.contains(event.target)) {
        setOpen(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.getAttribute("data-open") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* ---- Scroll-spy (rAF-throttled) ---- */
  const SCROLL_OFFSET = 120;
  let scrollTicking = false;

  const updateActiveLink = () => {
    let activeId = "";
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - SCROLL_OFFSET) {
        activeId = section.id;
      }
    });
    allLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${activeId}`);
    });
    scrollTicking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!scrollTicking) {
        requestAnimationFrame(updateActiveLink);
        scrollTicking = true;
      }
    },
    { passive: true },
  );
})();

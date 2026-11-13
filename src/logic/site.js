const root = document.documentElement;
const header = document.querySelector("header");
const toggle = header.querySelector(".menu-toggle");
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Mobilmeny ---------- */
const setOpen = (open) => {
  header.classList.toggle("nav-open", open);
  toggle.setAttribute("aria-expanded", String(open));
};

toggle.addEventListener("click", () => setOpen(!header.classList.contains("nav-open")));
header.querySelector("nav").addEventListener("click", (e) => {
  if (e.target.closest("a")) setOpen(false);
});

/* ---------- Scroll: bakgrund och aktiv gren i trädet ---------- */
const links = new Map(
  [...document.querySelectorAll('.tree a[href^="#"]')].map((a) => [a.hash.slice(1), a])
);
const targets = [...links.keys()].map((id) => document.getElementById(id)).filter(Boolean);
let ticking = false;

function update() {
  ticking = false;
  const max = root.scrollHeight - innerHeight;

  // 0 överst, 1 längst ner. Styr bakgrundens position och mörker i CSS.
  if (!reduceMotion) {
    root.style.setProperty("--progress", max > 0 ? Math.min(scrollY / max, 1) : 0);
  }

  // Aktiv sektion = den sista som passerat ca 35 % ner i fönstret.
  let current = null;
  for (const el of targets) {
    if (el.getBoundingClientRect().top <= innerHeight * 0.35) current = el.id;
  }
  if (targets.length && max > 0 && scrollY >= max - 2) current = targets.at(-1).id;

  links.forEach((a, id) => {
    if (id === current) a.setAttribute("aria-current", "location");
    else a.removeAttribute("aria-current");
  });
}

function onScroll() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(update);
  }
}

addEventListener("scroll", onScroll, { passive: true });
addEventListener("resize", onScroll);
update();

/* ---------- Sektioner tonas in första gången de syns ---------- */
const reveals = document.querySelectorAll(".reveal");
if (!reduceMotion && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("in"));
}

/* ---------- Djup: bakgrund och dimma följer musen lite grann ---------- */
if (!reduceMotion && matchMedia("(pointer: fine)").matches) {
  let tx = 0, ty = 0, cx = 0, cy = 0, frame = 0;

  const ease = () => {
    cx += (tx - cx) * 0.08;
    cy += (ty - cy) * 0.08;
    root.style.setProperty("--mx", cx.toFixed(3));
    root.style.setProperty("--my", cy.toFixed(3));
    const moving = Math.abs(tx - cx) > 0.002 || Math.abs(ty - cy) > 0.002;
    frame = moving ? requestAnimationFrame(ease) : 0;
  };

  addEventListener("pointermove", (e) => {
    tx = (e.clientX / innerWidth) * 2 - 1;
    ty = (e.clientY / innerHeight) * 2 - 1;
    if (!frame) frame = requestAnimationFrame(ease);
  });
}
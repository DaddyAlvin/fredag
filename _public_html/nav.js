// Mobilmeny: fäller ut och ihop trädet i headern.
const header = document.querySelector("header");
const toggle = header.querySelector(".menu-toggle");

const setOpen = (open) => {
  header.classList.toggle("nav-open", open);
  toggle.setAttribute("aria-expanded", String(open));
};

toggle.addEventListener("click", () => setOpen(!header.classList.contains("nav-open")));
header.querySelector("nav").addEventListener("click", (e) => {
  if (e.target.closest("a")) setOpen(false);
});

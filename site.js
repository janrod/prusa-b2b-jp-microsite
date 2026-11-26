/* Prusa Japan B2B microsite. Plain JS, no build step. The page works without it (no animation). */

const SITE = {
  // Where the contact buttons go. Leave empty until the address is confirmed: the page then shows a draft note.
  contactEmail: "japan@prusa3d.com",
  contactSubject: "法人向けソリューションについて",
};

document.documentElement.classList.add("js");

function setContact() {
  const email = SITE.contactEmail.trim();
  document.querySelectorAll("[data-contact]").forEach((a) => {
    a.href = email ? `mailto:${email}?subject=${encodeURIComponent(SITE.contactSubject)}` : "#contact";
  });
  const note = document.querySelector("[data-contact-unset]");
  if (note) note.hidden = Boolean(email);
}

document.addEventListener("DOMContentLoaded", () => {
  setContact();

  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { items.forEach((el) => el.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -10% 0px" });
  items.forEach((el) => io.observe(el));
});

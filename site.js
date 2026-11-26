/* Prusa Japan B2B microsite. Plain JS, no build step. The page works without it (Japanese, no animation). */

const SITE = {
  // Where the contact buttons go. Leave empty until the address is confirmed: the page then shows a draft note.
  contactEmail: "japan@prusa3d.com",
  contactSubject: { ja: "法人向けソリューションについて", en: "Prusa B2B solutions in Japan" },
  title: {
    ja: "法人向けソリューション | Prusa Research",
    en: "Solutions for business in Japan | Prusa Research",
  },
};

document.documentElement.classList.add("js");

const params = new URLSearchParams(location.search);
function readLang() {
  if (["ja", "en"].includes(params.get("lang"))) return params.get("lang");
  try { return localStorage.getItem("prusa-b2b-lang") === "en" ? "en" : "ja"; } catch { return "ja"; }
}

function setLang(lang) {
  document.documentElement.lang = lang;
  document.title = SITE.title[lang];
  document.querySelectorAll("[data-set-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.setLang === lang)));
  try { localStorage.setItem("prusa-b2b-lang", lang); } catch { /* private mode: not remembered */ }
  setContact(lang);
}

function setContact(lang) {
  const email = SITE.contactEmail.trim();
  document.querySelectorAll("[data-contact]").forEach((a) => {
    a.href = email ? `mailto:${email}?subject=${encodeURIComponent(SITE.contactSubject[lang])}` : "#contact";
  });
  const note = document.querySelector("[data-contact-unset]");
  if (note) note.hidden = Boolean(email);
}

document.addEventListener("DOMContentLoaded", () => {
  setLang(readLang());
  document.querySelectorAll("[data-set-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.setLang)));

  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { items.forEach((el) => el.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -10% 0px" });
  items.forEach((el) => io.observe(el));
});

/* ============================================================
   SETTINGS — the only part of this file you need to edit.
   Paste the "Send → < > (embed)" link of each Google Form
   between the quotes. Leave empty to keep the placeholder box.
   Example: "https://docs.google.com/forms/d/e/XXXX/viewform?embedded=true"
   ============================================================ */
const FORMS = {
  share: "",     // Your Turn → "Share your creation" form
  pledge: "",    // Your Turn → one-minute pledge form
  feedback: ""   // Your Turn → feedback form (also linked in the footer)
};

/* ---------------- Mobile menu ---------------- */
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

/* ---------------- Photos ----------------
   Every placeholder is a <figure class="shot" data-src="images/x-y.jpg">.
   If that file exists in the images folder, it replaces the dashed box
   automatically. So: save the photo with the name shown in the box,
   upload it to /images, and it appears. No HTML editing needed. */
document.querySelectorAll("figure.shot[data-src]").forEach((fig) => {
  const src = fig.dataset.src;
  const ph = fig.querySelector(".ph");
  const alt = (fig.querySelector("figcaption") || {}).textContent || "";
  if (/\.(mp4|webm|mov)$/i.test(src)) {
    const v = document.createElement("video");
    v.src = src;
    v.controls = true;
    v.playsInline = true;
    v.preload = "metadata";
    v.addEventListener("loadedmetadata", () => ph && ph.replaceWith(v));
    return;
  }
  const img = new Image();
  img.alt = alt.trim();
  img.loading = "lazy";
  img.onload = () => ph && ph.replaceWith(img);
  img.src = src;
});

/* ---------------- Google Forms ---------------- */
document.querySelectorAll(".form-slot[data-form]").forEach((slot) => {
  const url = FORMS[slot.dataset.form];
  if (!url) return;
  const frame = document.createElement("iframe");
  frame.src = url;
  frame.loading = "lazy";
  frame.title = slot.dataset.title || "Google Form";
  slot.innerHTML = "";
  slot.appendChild(frame);
});
document.querySelectorAll("a[data-form-link]").forEach((a) => {
  const url = FORMS[a.dataset.formLink];
  if (url) a.href = url.replace("?embedded=true", "");
});

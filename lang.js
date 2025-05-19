document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("lang-select");
  const userLang = localStorage.getItem("lang") || "es";
  langSelect.value = userLang;

  const applyTranslations = (lang) => {
    fetch("lang/lang.json")
      .then(res => res.json())
      .then(data => {
        document.querySelectorAll("[data-i18n]").forEach(el => {
          const key = el.getAttribute("data-i18n");
          el.textContent = data[lang][key] || key;
        });
      });
  };

  langSelect.addEventListener("change", () => {
    const selectedLang = langSelect.value;
    localStorage.setItem("lang", selectedLang);
    applyTranslations(selectedLang);
  });

  applyTranslations(userLang);
});
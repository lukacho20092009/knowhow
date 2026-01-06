const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const langBtn = document.getElementById("langToggle");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About Us",
        "nav.service": "Service",
        "nav.contact": "Contact Us"
    },
    ka: {
        "nav.home": "მთავარი",
        "nav.about": "ჩვენ შესახებ",
        "nav.service": "სერვისები",
        "nav.contact": "კონტაქტი"
    }
};

let currentLang = "en";
langBtn.textContent = "En";

langBtn.addEventListener("click", () => {
    if (currentLang === "en") {
        currentLang = "ka";
        langBtn.textContent = "Ka";
    } else {
        currentLang = "en";
        langBtn.textContent = "En";
    }
    translate();
});

function translate() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
}

translate();
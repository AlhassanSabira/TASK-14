/* =========================================
   HOME.JS
   Simple page interactions
========================================= */

const themeBtn = document.getElementById("themeBtn");
const languageBtn = document.getElementById("languageBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeBtn.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
});

languageBtn.addEventListener("click", () => {
    const english = document.documentElement.lang === "en";
    document.documentElement.lang = english ? "ar" : "en";
    document.documentElement.dir = english ? "rtl" : "ltr";
    languageBtn.textContent = english ? "EN" : "AR";
});

document.getElementById("quickSubmit").addEventListener("click", () => {
    alert("تم إرسال طلبك بنجاح");
});

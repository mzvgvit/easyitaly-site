/* ============================================================
   EasyItaly — общий скрипт сайта
   Статические версии: шапка/подвал рендерятся в HTML каждой
   страницы (build script), скрипт отвечает за интерактив.
   Языковые версии: ./ (RU), /en/ (EN), /it/ (IT).
   ============================================================ */
(function () {
  "use strict";

  /* ==== Аналитика ====
     Вставьте свои ID — и подключение включится само.
     ga:      GA4 Measurement ID, вида "G-XXXXXXXXXX"
     metrika: ID счётчика Яндекс.Метрики (число, вида 12345678) */
  var ANALYTICS = { ga: "", metrika: "" };

  function injectAnalytics() {
    if (ANALYTICS.ga && !/X{4,}/.test(ANALYTICS.ga)) {
      var s = document.createElement("script");
      s.async = true;
      s.src = "https://www.googletagmanager.com/gtag/js?id=" + ANALYTICS.ga;
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", ANALYTICS.ga);
    }
    if (ANALYTICS.metrika && /^\d+$/.test(String(ANALYTICS.metrika))) {
      window.ym = window.ym || function () { (window.ym.a = window.ym.a || []).push(arguments); };
      window.ym.l = window.ym.l || 1 * new Date();
      var m = document.createElement("script");
      m.async = true;
      m.src = "https://mc.yandex.ru/metrika/tag.js";
      document.head.appendChild(m);
      window.ym(ANALYTICS.metrika, "init", {
        clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true
      });
    }
  }

  /* ------------------- Форма контактов ------------------- */
  function wireForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = form;
      var subject = "EasyItaly request — " + (d.role.value || "general") + " / " + (d.country.value || "-");
      var body =
        "Name: " + d.name.value + "\n" +
        "Company: " + d.company.value + "\n" +
        "Country/market: " + d.country.value + "\n" +
        "Type: " + d.role.value + "\n" +
        "Preferred language: " + d.lang.value + "\n\n" +
        d.message.value + "\n";
      window.location.href = "mailto:manager@easyitaly.info?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      var ok = document.getElementById("form-success");
      if (ok) ok.style.display = "block";
    });
  }

  /* ------------------- Фильтры портфеля ------------------- */
  function wireFilters() {
    var wrap = document.getElementById("brand-filters");
    if (!wrap) return;
    var cards = document.querySelectorAll("[data-cat]");
    wrap.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) return;
      wrap.querySelectorAll("button").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var f = btn.getAttribute("data-filter");
      cards.forEach(function (c) {
        var cats = (c.getAttribute("data-cat") || "").split(" ");
        c.style.display = (f === "all" || cats.indexOf(f) !== -1) ? "" : "none";
      });
    });
  }

  /* ------------------- Появление при скролле ------------------- */
  function wireReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (e) { e.classList.add("visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ------------------- Бургер-меню ------------------- */
  function wireBurger() {
    var burger = document.getElementById("burger");
    var nav = document.getElementById("main-nav");
    if (burger && nav) {
      burger.addEventListener("click", function () { nav.classList.toggle("open"); });
    }
  }

  /* ------------------- Предвыбор типа заявки из ?role= ------------------- */
  function preselectRole() {
    try {
      var rp = new URLSearchParams(window.location.search).get("role");
      if (!rp) return;
      var sel = document.querySelector("#contact-form select[name='role']");
      if (sel) {
        if (rp === "producer") sel.selectedIndex = 0;
        else if (rp === "partner") sel.selectedIndex = 1;
      }
    } catch (e) {}
  }

  function init() {
    injectAnalytics();
    wireBurger();
    wireForm();
    wireFilters();
    wireReveal();
    preselectRole();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

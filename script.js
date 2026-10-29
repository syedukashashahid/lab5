/* ==========================================================
   Ukasha Shahid portfolio: vanilla JavaScript, no libraries.
   ========================================================== */
(function () {
  "use strict";

  var CONTACT_EMAIL = "u128413@gmail.com";

  var header = document.getElementById("site-header");
  var menuToggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("site-menu");
  var navLinks = document.querySelectorAll(".nav-link");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile menu ---------- */
  function setMenu(open) {
    menu.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  menuToggle.addEventListener("click", function () {
    setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      setMenu(false);
      menuToggle.focus();
    }
  });

  // Close the menu if the window grows to desktop size
  window.matchMedia("(min-width: 900px)").addEventListener("change", function (e) {
    if (e.matches) setMenu(false);
  });

  /* ---------- Same-page smooth scrolling ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      setMenu(false);
      target.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", id);

      // Move keyboard focus to the section so screen readers follow along
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });
  });

  /* ---------- Back to top ---------- */
  var toTop = document.getElementById("to-top");
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });
    history.replaceState(null, "", "#home");
    var home = document.getElementById("home");
    home.setAttribute("tabindex", "-1");
    home.focus({ preventScroll: true });
  });

  /* ---------- Header style on scroll ---------- */
  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Active nav link ---------- */
  var sections = [];
  navLinks.forEach(function (link) {
    var section = document.querySelector(link.getAttribute("href"));
    if (section) sections.push(section);
  });

  function setActive(id) {
    navLinks.forEach(function (link) {
      var active = link.getAttribute("href") === "#" + id;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ---------- Contact form validation ---------- */
  var form = document.getElementById("contact-form");
  var statusBox = document.getElementById("form-status");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  var rules = {
    name: function (v) { return v.length < 2 ? "Enter your name (at least 2 characters)." : ""; },
    email: function (v) {
      if (!v) return "Enter your email address.";
      return emailPattern.test(v) ? "" : "Enter a valid email address, like name@example.com.";
    },
    subject: function (v) { return v.length < 3 ? "Enter a subject (at least 3 characters)." : ""; },
    message: function (v) { return v.length < 10 ? "Write a message of at least 10 characters." : ""; }
  };

  function validateField(field) {
    var error = rules[field.name](field.value.trim());
    document.getElementById(field.id + "-error").textContent = error;
    if (error) field.setAttribute("aria-invalid", "true");
    else field.removeAttribute("aria-invalid");
    return !error;
  }

  Object.keys(rules).forEach(function (name) {
    var field = form.elements[name];
    field.addEventListener("blur", function () { if (field.value !== "") validateField(field); });
    field.addEventListener("input", function () {
      if (field.getAttribute("aria-invalid") === "true") validateField(field);
    });
  });

  function showStatus(isError) {
    statusBox.classList.toggle("is-error", isError);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    statusBox.textContent = "";

    var firstInvalid = null;
    Object.keys(rules).forEach(function (name) {
      var field = form.elements[name];
      if (!validateField(field) && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      showStatus(true);
      statusBox.textContent = "Some fields need attention. Fix the errors above and try again.";
      firstInvalid.focus();
      return;
    }

    // All fields are valid. This site has no backend, so nothing can be sent from here.
    var name = form.elements.name.value.trim();
    var email = form.elements.email.value.trim();
    var subject = form.elements.subject.value.trim();
    var message = form.elements.message.value.trim();

    var body = message + "\n\nFrom: " + name + " (" + email + ")";
    var mailto = "mailto:" + CONTACT_EMAIL +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    showStatus(false);
    statusBox.textContent = "";

    var p1 = document.createElement("p");
    p1.textContent = "Your message looks good, but it has not been sent. This page has no email service or server to deliver it.";
    var p2 = document.createElement("p");
    p2.textContent = "To send it now, open it in your email app. (Sending directly from this form would need a backend or a form service.)";
    var link = document.createElement("a");
    link.className = "btn btn-primary btn-small";
    link.href = mailto;
    link.textContent = "Open in my email app";

    statusBox.appendChild(p1);
    statusBox.appendChild(p2);
    statusBox.appendChild(link);
    statusBox.focus();
  });
})();

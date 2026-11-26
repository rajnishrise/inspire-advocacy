/* Inspire Advocacy — site behaviour */
(function () {
  "use strict";

  // Mobile navigation
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Bar Council of India disclaimer: shown once per browser before the site is used.
  var KEY = "ia-disclaimer-accepted-v1";
  var gate = document.getElementById("gate");
  if (!gate || document.body.hasAttribute("data-no-gate")) return;

  var accepted = false;
  try { accepted = window.localStorage.getItem(KEY) === "yes"; } catch (e) { accepted = false; }
  try { if (!accepted) accepted = window.sessionStorage.getItem(KEY) === "yes"; } catch (e) {}
  if (accepted) return;

  gate.classList.add("open");
  document.body.classList.add("gated");
  var agree = document.getElementById("gate-agree");
  if (agree) agree.focus();

  agree && agree.addEventListener("click", function () {
    try { window.localStorage.setItem(KEY, "yes"); } catch (e) {}
    try { window.sessionStorage.setItem(KEY, "yes"); } catch (e) {}
    gate.classList.remove("open");
    document.body.classList.remove("gated");
  });

  var leave = document.getElementById("gate-leave");
  leave && leave.addEventListener("click", function () {
    window.location.href = "https://www.google.com/";
  });
})();

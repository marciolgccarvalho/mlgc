document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const overlay = document.querySelector(".menu-overlay");
  const links = document.querySelectorAll(".menu a");
  const backToTop = document.getElementById("backToTop");

  if (toggle && menu && overlay) {
    function openMenu() {
      menu.classList.add("active");
      overlay.classList.add("active");
      document.body.classList.add("menu-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.innerHTML = "✕";
    }

    function closeMenu() {
      menu.classList.remove("active");
      overlay.classList.remove("active");
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML = "☰";
    }

    toggle.addEventListener("click", function () {
      if (menu.classList.contains("active")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    overlay.addEventListener("click", closeMenu);

    links.forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });
  }

  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 320) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });

    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});

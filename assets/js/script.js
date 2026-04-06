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





// ================= FORMULÁRIO CONTATO =================

const form = document.getElementById("form-contato");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);

    status.innerHTML = "Enviando...";
    status.style.color = "#ccc";

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        status.innerHTML = "✅ Mensagem enviada com sucesso!";
        status.style.color = "#22c55e";
        form.reset();
      } else {
        status.innerHTML = "❌ Erro ao enviar. Tente novamente.";
        status.style.color = "#ef4444";
      }
    } catch (error) {
      status.innerHTML = "❌ Erro de conexão.";
      status.style.color = "#ef4444";
    }
  });
}

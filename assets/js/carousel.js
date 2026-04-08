document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll("[data-carousel]");

  carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll(".carousel-image");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");

    let currentIndex = 0;

    function showSlide(index) {
      images.forEach((img) => img.classList.remove("active"));
      images[index].classList.add("active");
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showSlide(currentIndex);
    }

    // Apenas clique do usuário
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    // Inicializa
    showSlide(currentIndex);
  });
});

document.addEventListener("DOMContentLoaded", () => {

  const sliders = document.querySelectorAll(".slider-container");

  sliders.forEach((container) => {

    const slides = container.querySelectorAll(".slide");
    const nextBtn = container.querySelector(".next");
    const prevBtn = container.querySelector(".prev");
    const thumbs = container.querySelectorAll(".thumb");

    let index = 0;
    let isInitialLoad = true;

    function showSlide(i) {
      if (slides.length === 0) return;

      // sécuriser l'index
      if (i >= slides.length) i = 0;
      if (i < 0) i = slides.length - 1;

      slides.forEach(s => s.classList.remove("active"));
      slides[i].classList.add("active");

      if (thumbs.length > 0) {
        thumbs.forEach(t => t.classList.remove("active"));
        if (thumbs[i]) {
          thumbs[i].classList.add("active");
          
          if (!isInitialLoad) {
            thumbs[i].scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        }
      }

      index = i;
    }

    // bouton suivant
    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showSlide(index + 1);
      });
    }

    // bouton précédent
    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showSlide(index - 1);
      });
    }

    // miniatures
    thumbs.forEach((thumb, i) => {
      thumb.addEventListener("click", () => {
        showSlide(i);
      });
    });

    // initialisation
    showSlide(0);
    isInitialLoad = false;

  });

});
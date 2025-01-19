// script.js
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".details h3");

  // Ajoute une animation lors du scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-bounce"); // Ajoute une classe d'animation
        }
      });
    },
    { threshold: 0.5 } // Lorsque 50% de l'élément est visible
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.querySelector(".close-btn");
  const introCard = document.querySelector(".intro-card");

  if (closeBtn && introCard) {
    closeBtn.addEventListener("click", () => {
      introCard.style.display = "none";  // directly hide the overlay
    });
  }
});

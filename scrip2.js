const hamburger = document.getElementById("hamburger");
const menuOverlay = document.getElementById("menuOverlay");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", () => {
  menuOverlay.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  menuOverlay.classList.remove("open");
});

menuOverlay.addEventListener("click", (e) => {
  if (e.target === menuOverlay) {
    menuOverlay.classList.remove("open");
  }
});

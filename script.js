// Select elements
const hamburger = document.getElementById("hamburger");
const menuOverlay = document.getElementById("menuOverlay");
const closeBtn = document.getElementById("closeBtn");

// Open menu
hamburger.addEventListener("click", () => {
  menuOverlay.classList.add("open");
});

// Close menu
closeBtn.addEventListener("click", () => {
  menuOverlay.classList.remove("open");
});

// Optional: close overlay if clicked outside menu links
menuOverlay.addEventListener("click", (e) => {
  if (e.target === menuOverlay) {
    menuOverlay.classList.remove("open");
  }
});

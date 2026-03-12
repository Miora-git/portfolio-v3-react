const menuBtn = document.querySelector(".menu");
const menuBar = document.querySelector(".menu-bar");

menuBtn.addEventListener("click", () => {
  menuBar.classList.toggle("active");
});

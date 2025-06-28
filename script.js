let lastScroll = 0;
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const currentScroll = window.scrollY;

  if (currentScroll > 50 && lastScroll <= 50) {
    navbar.classList.add("fixed");
  } else if (currentScroll <= 50 && lastScroll > 50) {
    navbar.classList.remove("fixed");
  }
  lastScroll = currentScroll;
});

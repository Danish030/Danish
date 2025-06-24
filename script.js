const navbar = document.getElementById("navbar");
const navbarOffsetTop = navbar.offsetTop;

// Listen to scroll events
window.addEventListener("scroll", () => {
  // If we scrolled past the navbar's original position
  if (window.scrollY >= navbarOffsetTop) {
    navbar.classList.add("fixed"); // Add the 'fixed' class for rounded border
  } else {
    navbar.classList.remove("fixed"); // Remove the 'fixed' class to return to normal
  }
});
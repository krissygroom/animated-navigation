const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation
function navAnimation(directionRemove, directionAdd) {
  navItems.map((nav, index) => {
    nav.classList.replace(
      `slide-${directionRemove}-${index + 1}`,
      `slide-${directionAdd}-${index + 1}`
    );
  });
}

const toggleNav = () => {
  // Toggle menu bars open/close
  menuBars.classList.toggle("change");
  // Toggle menu to be active/not active
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // Animate in our overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    // Animate in nav items
    navAnimation("out", "in");
  } else {
    // Animate out our overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    // Animate out nav items
    navAnimation("in", "out");
  }
};
// Event Listeners
menuBars.addEventListener("click", toggleNav);
navItems.map((nav, index) => {
  nav.addEventListener("click", toggleNav);
});

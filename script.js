const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");
const nav4 = document.getElementById("nav4");
const nav5 = document.getElementById("nav5");

const toggleNav = () => {
  // Toggle menu bars open/close
  menuBars.classList.toggle("change");
  // Toggle menu to be active/not active
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // Animate in our overlay
    overlay.classList.add("overlay-slide-right");
    overlay.classList.remove("overlay-slide-left");
  } else {
    overlay.classList.add("overlay-slide-left");
    overlay.classList.remove("overlay-slide-right");
  }
};
// Event Listeners
menuBars.addEventListener("click", toggleNav);
nav1.addEventListener("click", togggleNav);
nav2.addEventListener("click", togggleNav);
nav3.addEventListener("click", togggleNav);
nav4.addEventListener("click", togggleNav);
nav5.addEventListener("click", togggleNav);

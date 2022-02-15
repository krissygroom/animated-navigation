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
    // Animate in nav items
    nav1.classList.remove("slide-out-1");
    nav1.classList.add("slide-in-1");
    nav2.classList.remove("slide-out-2");
    nav2.classList.add("slide-in-2");
    nav3.classList.remove("slide-out-3");
    nav3.classList.add("slide-in-3");
    nav4.classList.remove("slide-out-4");
    nav4.classList.add("slide-in-4");
    nav5.classList.remove("slide-out-5");
    nav5.classList.add("slide-in-5");
  } else {
    // Animate out our overlay
    overlay.classList.add("overlay-slide-left");
    overlay.classList.remove("overlay-slide-right");
    // Animate out nav items
    nav1.classList.remove("slide-in-1");
    nav1.classList.add("slide-out-1");
    nav2.classList.remove("slide-in-2");
    nav2.classList.add("slide-out-2");
    nav3.classList.remove("slide-in-3");
    nav3.classList.add("slide-out-3");
    nav4.classList.remove("slide-in-4");
    nav4.classList.add("slide-out-4");
    nav5.classList.remove("slide-in-5");
    nav5.classList.add("slide-out-5");
  }
};
// Event Listeners
menuBars.addEventListener("click", toggleNav);
nav1.addEventListener("click", togggleNav);
nav2.addEventListener("click", togggleNav);
nav3.addEventListener("click", togggleNav);
nav4.addEventListener("click", togggleNav);
nav5.addEventListener("click", togggleNav);

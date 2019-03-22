// Select DOM Items
/* 
Below, we create variables for selecting all the menu tags
we will need to implement our menu section
*/
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
// Since there is more than 1 nav item, we use querySelectorAll
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State of Menu (When the menu is open, it is true.)
// We use 'let' for re-assigning values for variabels (can't do this for const)
let showMenu = false;

// The below is an event listener for when the menu button is clicked
// Once the button is clicked, we call the toggleMenu function
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  // If the menu overlay is NOT shown
  if (!showMenu) {
    // The menu classes are shown
    // Only the menuBtn will have the 'close' class added (to include an 'x' to close the menu)
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    /* 
        Since there are multiple nav items (the actual words),
        we loop through each one below and add the show class 
        */
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State (menu is shown so we set it to true)
    showMenu = true;
    // If the menu IS shown
  } else {
    // The menu classes are removed
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    /* 
        Since there are multiple nav items (the actual words),
        we loop through each one below and remove the show class 
        */
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State (menu is shown so we set it to true)
    showMenu = false;
  }
}

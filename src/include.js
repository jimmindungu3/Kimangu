// This is my updated includes.js

function loadHTML(id, file) {
  fetch(file)
    .then((res) => res.text())
    .then((data) => {
      const element = document.getElementById(id);
      element.innerHTML = data;
      
      // If this is the navigation being loaded, initialize its functionality
      if (id === "nav-placeholder") {
        // Make sure the nav-placeholder doesn't have styles that interfere with sticky nav
        element.style.display = "contents";
        initNavigation();
      }
    });
}

function initNavigation() {
  // Get DOM elements for mobile menu
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const moreToggle = document.getElementById('more-toggle');
  const moreDropdown = document.getElementById('more-dropdown');
  const moreIcon = document.getElementById('more-icon');
  
  // Toggle mobile menu when hamburger is clicked
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Toggle "More" dropdown in mobile view
  if (moreToggle && moreDropdown && moreIcon) {
    moreToggle.addEventListener('click', function() {
      moreDropdown.classList.toggle('hidden');
      // Rotate chevron icon when dropdown toggles
      moreIcon.classList.toggle('fa-chevron-down');
      moreIcon.classList.toggle('fa-chevron-up');
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  loadHTML("nav-placeholder", "/components/nav.html");
  loadHTML("footer-placeholder", "/components/footer.html");
});
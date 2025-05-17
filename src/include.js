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
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const moreToggle = document.getElementById("more-toggle");
  const moreDropdown = document.getElementById("more-dropdown");
  const moreIcon = document.getElementById("more-icon");
  const portalsToggle = document.getElementById("portals-toggle");
  const portalsDropdown = document.getElementById("portals-dropdown");
  const portalsIcon = document.getElementById("portals-icon");
  const body = document.body;

  // Create overlay element
  const overlay = document.createElement("div");
  overlay.className = "menu-overlay";
  document.body.appendChild(overlay);

  // Toggle mobile menu when hamburger is clicked
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      // Toggle the mobile menu slide
      mobileMenu.classList.toggle("menu-active");
      overlay.classList.toggle("active");

      // Toggle body scrolling
      body.classList.toggle("menu-open");
    });
  }

  // Close mobile menu when clicking on the overlay
  overlay.addEventListener("click", function () {
    if (mobileMenu && mobileMenu.classList.contains("menu-active")) {
      mobileMenu.classList.remove("menu-active");
      overlay.classList.remove("active");
      body.classList.remove("menu-open");
    }
  });

  // Toggle "More" dropdown in mobile view
  if (moreToggle && moreDropdown && moreIcon) {
    moreToggle.addEventListener("click", function (e) {
      // Prevent the click from closing the mobile menu
      e.stopPropagation();

      moreDropdown.classList.toggle("hidden");
      // Rotate chevron icon when dropdown toggles
      moreIcon.classList.toggle("fa-chevron-down");
      moreIcon.classList.toggle("fa-chevron-up");
    });
  }

  // Toggle "Portals" dropdown in mobile view
  if (portalsToggle && portalsDropdown && portalsIcon) {
    portalsToggle.addEventListener("click", function (e) {
      // Prevent the click from closing the mobile menu
      e.stopPropagation();

      portalsDropdown.classList.toggle("hidden");
      // Rotate chevron icon when dropdown toggles
      portalsIcon.classList.toggle("fa-chevron-down");
      portalsIcon.classList.toggle("fa-chevron-up");
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  loadHTML("nav-placeholder", "/components/nav.html");
  loadHTML("footer-placeholder", "/components/footer.html");

  // Add the required CSS for mobile menu animations
  const styleElement = document.createElement("style");
  styleElement.textContent = `
    /* Mobile menu slide effect */
    #mobile-menu {
      position: fixed;
      top: 0;
      right: -100%;
      width: 80%;
      max-width: 300px;
      height: 100vh;
      background-color: white;
      box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      overflow-y: auto;
      padding: 80px 20px 20px 20px;
      z-index: 999;
      display: block !important;
      visibility: visible !important;
    }
    
    #mobile-menu.menu-active {
      right: 0;
    }
    
    /* Prevent body scrolling when menu is open */
    body.menu-open {
      overflow: hidden;
    }
    
    /* Overlay when menu is open */
    .menu-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 998;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }
    
    .menu-overlay.active {
      opacity: 1;
      visibility: visible;
    }
  `;
  document.head.appendChild(styleElement);
});

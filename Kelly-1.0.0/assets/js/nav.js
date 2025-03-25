document.addEventListener("DOMContentLoaded", () => {
    fetch("../../nav.html")
      .then(response => response.text())
      .then(html => {
        document.getElementById("nav-placeholder").innerHTML = html;
  
        // Load main.js AFTER nav is inserted
        let script = document.createElement("script");
        script.src = "../../js/main.js";
        script.onload = () => {
          setupNav(); // Run setupNav() ONLY after main.js is fully loaded
        };
        document.body.appendChild(script);
      })
      .catch(error => console.error("Error loading navigation:", error));
  });
  
  function setupNav() {
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
  
    if (mobileNavToggleBtn) {
      function mobileNavToogle() {
        document.body.classList.toggle("mobile-nav-active");
        mobileNavToggleBtn.classList.toggle("bi-list");
        mobileNavToggleBtn.classList.toggle("bi-x");
      }
  
      mobileNavToggleBtn.addEventListener("click", mobileNavToogle);
  
      // Hide mobile nav on same-page/hash links
      document.querySelectorAll("#navmenu a").forEach(navmenu => {
        navmenu.addEventListener("click", () => {
          if (document.body.classList.contains("mobile-nav-active")) {
            mobileNavToogle();
          }
        });
      });
    } else {
      console.error("mobileNavToggleBtn not found");
    }
  
    // Dropdown toggle functionality
    document.querySelectorAll(".navmenu .toggle-dropdown").forEach(navmenu => {
      navmenu.addEventListener("click", function (e) {
        e.preventDefault();
        this.parentNode.classList.toggle("active");
        this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
        e.stopImmediatePropagation();
      });
    });
  }
  
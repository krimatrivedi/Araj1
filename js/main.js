fetch("../../data/main.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("sitename").textContent = data.sitename;
    const navLinks = document.getElementById("nav-links");
    const logoLink = document.querySelector(".logo");
    if (logoLink) {
      logoLink.setAttribute("href", data.home_link);
    }
    const currentPage = window.location.pathname
    function createNavItem(item) {
      let listItem = document.createElement("li");
      let link = document.createElement("a");
      link.href = item.link || "#";
      link.textContent = item.name;

      // Mark the current page as active
      if (item.link === currentPage || (currentPage === "" && item.link === "index.html")) {
        link.classList.add("active");
        document.title = `${item.name} - ${data.sitename}`; // Change title dynamically
      }

      listItem.appendChild(link);

      // Check if submenu exists
      if (item.submenu) {
        let dropdown = document.createElement("ul");
        item.submenu.forEach(sub => {
          let subItem = document.createElement("li");
          let subLink = document.createElement("a");
          subLink.href = sub.link || "#";
          subLink.textContent = sub.name;
          
          if (sub.submenu) {
            let deepDropdown = document.createElement("ul");
            sub.submenu.forEach(deepSub => {
              let deepItem = document.createElement("li");
              let deepLink = document.createElement("a");
              deepLink.href = deepSub.link || "#";
              deepLink.textContent = deepSub.name;
              deepItem.appendChild(deepLink);
              deepDropdown.appendChild(deepItem);
            });
            subItem.appendChild(deepDropdown);
          }

          subItem.appendChild(subLink);
          dropdown.appendChild(subItem);
        });

        listItem.appendChild(dropdown);
      }

      return listItem;
    }

    data.navmenu.forEach(item => {
      navLinks.appendChild(createNavItem(item));
    });

    // Default title if no match
    if (!document.title.includes("-")) {
      document.title = `Resume - ${data.sitename}`;
    }
  })
  .catch(error => console.error("Error loading navigation:", error));

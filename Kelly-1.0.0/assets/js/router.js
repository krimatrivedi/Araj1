document.addEventListener("DOMContentLoaded", function () {
    let path = window.location.pathname.replace(/^\/+|\/+$/g, ''); // Remove leading/trailing slashes
    if (path === "" || path === "index") {
        path = "../../index.html"; // Load homepage
    } else {
        path = `pages/${path}/index.html`; // Load respective page
    }

    fetch(path)
        .then(response => {
            if (!response.ok) throw new Error("Page not found");
            return response.text();
        })
        .then(html => {
            // document.getElementById("content").innerHTML = html;
        })
        .catch(error => {
            console.error("Page not found:", error);
            fetch("pages/404.html") // Load 404 page if not found
                .then(response => response.text())
                .then(html => document.getElementById("content").innerHTML = html);
        });
});

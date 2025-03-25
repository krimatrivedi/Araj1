document.addEventListener("DOMContentLoaded", function () {
    fetch("../../data/main.json") // Load JSON file
        .then(response => response.json())
        .then(data => {
            const socialsContainer = document.getElementById("socials-placeholder");

            let socialsHTML = `<div class="header-social-links">`;
            data.socials.forEach(social => {
                socialsHTML += `<a href="${social.url}" class="${social.name.toLowerCase()}">
                                    <i class="${social.icon}"></i>
                                </a>`;
            });
            socialsHTML += `</div>`;

            socialsContainer.innerHTML = socialsHTML;
        })
        .catch(error => console.error("Error loading social links:", error));
});

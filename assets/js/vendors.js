const vendorScripts = [
  "../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
  "../../assets/vendor/php-email-form/validate.js",
  "../../assets/vendor/aos/aos.js",
  "../../assets/vendor/waypoints/noframework.waypoints.js",
  "../../assets/vendor/purecounter/purecounter_vanilla.js",
  "../../assets/vendor/swiper/swiper-bundle.min.js",
  "../../assets/vendor/glightbox/js/glightbox.min.js",  // Move this up to load before main.js
  "../../assets/vendor/imagesloaded/imagesloaded.pkgd.min.js",
  "../../assets/vendor/isotope-layout/isotope.pkgd.min.js"
];

// Load each script and execute them in order
function loadScript(index) {
  if (index >= vendorScripts.length) {
    console.log("All vendor scripts loaded.");
    return;
  }

  const script = document.createElement("script");
  script.src = vendorScripts[index];
  script.defer = true;

  script.onload = () => loadScript(index + 1); // Load next script after current one is loaded
  document.body.appendChild(script);
}

// Start loading scripts
loadScript(0);

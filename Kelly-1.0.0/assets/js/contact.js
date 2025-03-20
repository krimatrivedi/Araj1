document.addEventListener("DOMContentLoaded", function (event) {
    console.log("event", event);
    event.preventDefault(); // Prevent the default form submission
    emailjs.init("bb5iFRYFwrTm0uAoh"); // Replace with your EmailJS Public Key

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Stop form from reloading page

        let formData = {
            name: document.getElementById("name-field").value,
            email: document.getElementById("email-field").value,
            subject: document.getElementById("subject-field").value,
            message: document.getElementById("message-field").value,
        };

        emailjs.send("service_4hn5z9j", "template_p0ji2hn", formData)
            .then(function (response) {
                alert("✅ Your message has been sent!");
                document.getElementById("contact-form").reset(); // Clear form after submission
            }, function (error) {
                alert("❌ Failed to send message. Please try again.");
            });
    });
});

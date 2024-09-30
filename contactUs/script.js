document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let valid = true;

    // Name validation
    if (name === "") {
        document.getElementById('nameError').textContent = "Name is required";
        valid = false;
    } else {
        document.getElementById('nameError').textContent = "";
    }

    // Phone number validation (basic pattern for digits)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = "Phone number must be 10 digits";
        valid = false;
    } else {
        document.getElementById('phoneError').textContent = "";
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email";
        valid = false;
    } else {
        document.getElementById('emailError').textContent = "";
    }

    // Message validation
    if (message === "") {
        document.getElementById('messageError').textContent = "Message is required";
        valid = false;
    } else {
        document.getElementById('messageError').textContent = "";
    }

    if (valid) {
        alert("Form submitted successfully!");
        // Reset form
        document.getElementById('contactForm').reset();
    }
});
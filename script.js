const form = document.getElementById("registration-form");
const errorContainer = document.getElementById("error-message");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    errorContainer.innerHTML = ""; // Clear previous error messages
    
    const fullName = form["full-name"].value;
    const email = form["email"].value;
    const phone = form["phone"].value;
    const password = form["password"].value;
    const confirmPassword = form["confirm-password"].value;

    if (fullName.length < 5) {
        showError("Name must be at least 5 characters.");
    }
    if (!email.includes("@")) {
        showError("Enter a valid email.");
    }
    if (phone.length !== 10 || phone === "123456789") {
        showError("Enter a valid phone number.");
    }
    if (password === "password" || password === fullName || password.length < 8) {
        showError("Password is not strong.");
    }
    if (password !== confirmPassword) {
        showError("Passwords do not match.");
    }

    if (errorContainer.innerHTML === "") {
        form.submit(); // Proceed with form submission if no errors
    }
});

function showError(message) {
    const errorMessage = document.createElement("div");
    errorMessage.className = "error-message";
    errorMessage.innerText = message;
    errorContainer.appendChild(errorMessage);
}
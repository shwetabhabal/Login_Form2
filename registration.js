document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value;

    // Create an object to store registration data
    let userData = {
        email: email,
        username: username,
        password: password,
        address: address
    };

    // Convert the object to JSON string
    let jsonData = JSON.stringify(userData);

    // Store the JSON data in local storage
    localStorage.setItem("userData", jsonData);

    alert("Registration successful!");
    window.location.href = "dashboard.html"; // Redirect to dashboard
});
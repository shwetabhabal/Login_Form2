document.addEventListener("DOMContentLoaded", function() {
    let userData = localStorage.getItem("userData");
    if (userData) {
        userData = JSON.parse(userData);
        document.getElementById("userData").innerHTML = `
            <p>Email: ${userData.email}</p>
            <p>Username: ${userData.username}</p>
            <p>Address: ${userData.address}</p>
           
        `;
    } else {
        document.getElementById("userData").innerHTML = "<p>No data found</p>";
    }
});
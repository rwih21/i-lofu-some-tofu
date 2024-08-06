
// User Name
document.addEventListener("DOMContentLoaded", function() {
    // Get the welcome message element
    const welcomeMessage = document.getElementById('welcome-message');

    // Get the username
    const userName = prompt("Please enter your name:");

    // Update the welcome message with username
    if (userName) {
        welcomeMessage.textContent = `Hi ${userName}, Welcome To Our Website`;
    }
});


// Form Logic Function
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.message-form form');
    const messageInfo = document.getElementById('messageInfo');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get current date and time
        const currentDate = new Date();
        const currentTime = currentDate.toLocaleString();

        // Construct message information
        let message = `<strong>Current Time:</strong> ${currentTime}<br><br>`;

        // Get form data
        const formData = new FormData(form);
        
        // Add form data to message
        for (const [key, value] of formData.entries()) {
            // Capitalize first letter of key
            const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
            // Add key-value pair to message
            message += `<strong>${capitalizedKey}:</strong> ${value}<br>`;
        }

        // Display message information inside messageInfo div
        messageInfo.innerHTML = message;
    });
});

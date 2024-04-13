// Get the email input and login link elements
const emailInput = document.getElementById('Em');
const loginLink = document.getElementById('login-link');

// Function to handle the login process
function handleLogin() {
    // Get the email value from the input
    const emailValue = emailInput.value;

    // Check if the email input is not empty
    if (emailValue) {
        // Store the email value in localStorage
        localStorage.setItem('Email', emailValue);

        // Update the login link text to "Logout"
        loginLink.textContent = 'Logout';
        
     
       
        
        // Redirect to the index page (or wherever you want)
        window.location.href = 'index.html';
    }
}

// Add an event listener to the form submit button
// Replace 'formSubmitButton' with the actual ID or selector of the form's submit button
const formSubmitButton = document.querySelector('input[type="submit"]');
formSubmitButton.addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Call the handleLogin function
    handleLogin();
});

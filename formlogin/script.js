document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('fdangnhap');
    const passwordInput = document.getElementById('pmatkhau');
    const loginButton = document.getElementById('loginButton');

    // Function to check if inputs are filled and enable/disable button
    const checkInputs = () => {
        if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
            loginButton.disabled = false;
            loginButton.classList.remove('shake-animation'); // Remove shake if filled
        } else {
            loginButton.disabled = true;
        }
    };

    // Add event listeners for input changes
    usernameInput.addEventListener('input', checkInputs);
    passwordInput.addEventListener('input', checkInputs);

    // Shake effect for login button
    loginButton.addEventListener('mouseover', () => {
        if (loginButton.disabled) {
            // Only shake if button is disabled (i.e., fields are empty)
            loginButton.classList.add('shake-animation');
        }
    });

    loginButton.addEventListener('mouseout', () => {
        // Stop shaking when mouse leaves the button
        loginButton.classList.remove('shake-animation');
    });

    // Initial check on page load
    checkInputs();
});
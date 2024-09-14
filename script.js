document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your login logic here
    alert('Login form submitted');
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    // Add your registration logic here
    alert('Registration form submitted');
});

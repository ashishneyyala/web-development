document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Reset error messages
    document.getElementById('usernameError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    
    // Validate inputs
    let isValid = true;
    
    if (username === '') {
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    }
    
    if (password === '') {
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }
    
    // If form is valid, proceed with login
    if (isValid) {
        
        console.log('Login submitted:', { username, password });
        
        
        alert('Login successful! (This is a demo, no real sir)');
        
    
        this.reset();
    }
});
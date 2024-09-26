document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulate form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('success-message').classList.remove('hidden');
        document.getElementById('contact-form').reset();
    } else {
        alert("Please fill in all the fields");
    }
});



document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting to a server
    
    // Show the success message
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
    successMessage.classList.add('visible');
    
    // Optionally, reset the form
    this.reset();
});

// JavaScript to trigger animations on scroll
window.addEventListener('scroll', function() {
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        const rect = project.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            project.classList.add('fade-in');
        }
    });
});

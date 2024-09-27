
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Simulate form submission success
    const successMessage = document.getElementById('success-message');
    successMessage.classList.add('visible');

    // Optionally, reset the form after displaying the message
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


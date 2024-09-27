document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(this); // Get the form data
    const xhr = new XMLHttpRequest(); // Create a new AJAX request
    xhr.open('POST', this.action, true); // Set the form's action as the POST target

    xhr.onload = function() {
        if (xhr.status === 200) {
            // Show success message on successful submission
            document.getElementById('success-message').style.display = 'block';
        } else {
            alert('Something went wrong. Please try again.');
        }
    };

    xhr.send(formData); // Send the form data
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


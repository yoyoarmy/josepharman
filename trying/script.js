

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


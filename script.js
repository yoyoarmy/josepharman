

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

function updateTime() {
    const currentTimeElement = document.getElementById('current-time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    currentTimeElement.textContent = `${hours}:${minutes}`;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initialize time display
updateTime();

document.addEventListener("DOMContentLoaded", function() {
    const textArray = ["AI Engineer with a CIS Degree from Bentley University"]; // The text to be typed
    const typedTextElement = document.querySelector(".typed-text");
    const typingSpeed = 120; // Typing speed in milliseconds
    const pauseBetweenTyping = 150000; // Pause time before restarting
    const typingDelay = 1000; // Delay before typing starts (in milliseconds)

    let textIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textIndex].length) {
            typedTextElement.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            // When the text finishes, pause and then reset typing effect
            setTimeout(() => {
                typedTextElement.textContent = "";
                charIndex = 0;
                type();
            }, pauseBetweenTyping);
        }
    }

    setTimeout(type, typingDelay); // Start the typing effect after a delay
});


//Line

document.addEventListener("scroll", function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    
    const scrollLine = document.querySelector('.scroll-line');
    scrollLine.style.height = scrollPercentage + "%"; /* Fill line height based on scroll */
});

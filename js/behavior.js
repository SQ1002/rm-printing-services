// Add this to your behavior.js file
const navbar = document.querySelector('nav'); // or your navbar selector

// Optional: Add animation on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#333'; // Change to your desired color
        navbar.style.transition = 'background-color 0.3s ease';
    } else {
        navbar.style.backgroundColor = 'transparent'; // Original color
    }
});

// Optional: Add animation on hover
if (navbar) {
    navbar.addEventListener('mouseenter', () => {
        navbar.style.backgroundColor = '#444';
        navbar.style.transition = 'background-color 0.3s ease';
    });

    navbar.addEventListener('mouseleave', () => {
        navbar.style.backgroundColor = 'transparent';
    });
}
// Random background color loop for navbar
function randomizeNavbarColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    navbar.style.backgroundColor = randomColor;
}

setInterval(randomizeNavbarColor, 2000); // Change color every 2 seconds
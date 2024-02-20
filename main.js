document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    // Get the current scroll position
    var scrollPosition = window.scrollY;

    var aboutSection = document.getElementById('aboutme').offsetTop;
    var projectSection = document.getElementById('Project').offsetTop;
    var contactSection = document.getElementById('Contact').offsetTop;
    var navLinks = document.querySelectorAll('#Navbar ul li a');

    // Reset the color for all links
    navLinks.forEach(function(link) {
        link.style.color = '';
    });

    // Change the color based on the current section
    if (scrollPosition < aboutSection) {
        navLinks[0].style.color = 'rgb(218, 49, 49)';  // Home
    } else if (scrollPosition < projectSection) {
        navLinks[1].style.color = 'rgb(218, 49, 49)';  // About
    } else if (scrollPosition < contactSection) {
        navLinks[2].style.color = 'rgb(218, 49, 49)';  // Projects
    } else {
        navLinks[3].style.color = 'rgb(218, 49, 49)';  // Contact
    }
});

  
// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Sidebar toggling
    var menuIcon = document.getElementById('menu-icon');
    var closeBtn = document.getElementById('close-btn');
    var sidenav = document.getElementById('mySidenav');

    menuIcon.addEventListener('click', function() {
        // Expand the sidebar
        sidenav.style.width = '250px';
    });

    closeBtn.addEventListener('click', function() {
        // Collapse the sidebar
        sidenav.style.width = '0';
    });

    // Fade-out effect for links
    var links = document.querySelectorAll(".sidenav a");

    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var targetPage = link.getAttribute("href");

            document.body.classList.add("fade-out");

            setTimeout(function() {
                window.location.href = targetPage;
            }, 500); // Duration of the fade-out effect
        });
    });
});

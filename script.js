// Add event listener for DOMContentLoaded to ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".sidenav a");

    // Add a click event listener to each link in the sidebar
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var targetPage = link.getAttribute("href");

            // Add fade-out class to body and redirect after the fade-out effect duration
            document.body.classList.add("fade-out");

            setTimeout(function() {
                window.location.href = targetPage;
            }, 500); // Duration of the fade-out effect
        });
    });
});

// Function to toggle the sidebar width between 0 and 200px
function toggleNav() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav.style.width === "200px") {
        sidenav.style.width = "0";
    } else {
        sidenav.style.width = "200px";
    }
}

document.addEventListener("DOMContentLoaded", function () {
  // Get all nav links
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Get the current URL's path without query strings or hashes
  const currentPath = window.location.pathname.split("/").pop();

  // Loop through nav links and set the active class
  navLinks.forEach((link) => {
    // Extract the href's path for comparison
    const linkPath = link.getAttribute("href").split("/").pop();

    // Add 'active' class to the matching link
    if (currentPath === linkPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

document.addEventListener('DOMContentLoaded', function(event) {
    let hamburger = document.querySelector(".nav-toggle");
    hamburger.addEventListener("click", function(e) {
        let links = document.querySelector(".main-nav");
        links.classList.toggle("main-nav-mobilehide");
    });

});
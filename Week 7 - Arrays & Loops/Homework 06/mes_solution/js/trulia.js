

let truliaCards = document.getElementsByClassName("trulia-grid-item");



document.addEventListener('DOMContentLoaded', function(event) {

  // Toggle the navigation
  hamburger = document.querySelector(".trulia-nav-toggle");

  hamburger.addEventListener('click', function(event) {
    navs = document.querySelectorAll(".trulia-nav ul");
    for (let i = 0; i < navs.length; i++) {
      navs[i].classList.toggle("trulia-nav-mobilehide");
    }
  });


  // Loop through all the cards
  for (let i=0; i < truliaCards.length; i++ ) {

    // Add a click listener on each card
    truliaCards[i].addEventListener('click', function(event) {
      // Remove the featured class from everyone 
      for (let j=0; j < truliaCards.length; j++ ) {
        truliaCards[j].classList.remove('trulia-featured-grid-item');
      }

      // Add the featured class on the one clicked on
      this.classList.add("trulia-featured-grid-item");

    });
  }

});




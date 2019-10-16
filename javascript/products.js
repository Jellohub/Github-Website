/*
  Author: Angelo Turri
  Date of last modification: 10/15/2019
*/

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var flipcontainers = document.getElementsByClassName("flip-card-container");

/* This funciton ensures that the statements inside of it don't execute until other resources load. */
window.onload=function(){

  $("#master").fadeIn(600);

  for (let i=0; i<flipcontainers.length; i++) {
      
      this.flipcontainers[i].addEventListener("click", function() {

          /* Toggles the "flip" class on all relevent elements, which prompts the card to flip. */
          flipcontainers[i].classList.toggle("flip");
      });
  }

  $("#backtotop").click(function() {
    topFunction();
  });
}
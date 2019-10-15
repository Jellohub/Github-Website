/*
  Author: Angelo Turri
  Date of last modification: 10/14/2019
*/


var photos = document.getElementsByClassName("photo_container");
var closers = document.getElementsByClassName("closer");

window.onload = function(){

  var start=0;
  var gray = document.getElementById("gray"); /* Page-wide translucent div */

  function zoomIn(photo, closer) {
      if(start==0) {
        photo.classList.toggle("zoomed"); /* Zooms in on element */
        gray.classList.toggle("invisible");
        closer.innerHTML="CLICK TO CLOSE";

        /* The next time this variable is evaluated, a different set of statements
        will be executed – the page will go back to how it was before. */
        start=1;
      }
      else {
        photo.classList.toggle("zoomed");
        closer.innerHTML="CLICK TO OPEN";
        gray.classList.toggle("invisible");
        start=0;
      }
  }
  
  /* Adds some dynamic features to all the elements in the arrays declared at the beginning
  of this file. */
  for(let i=0; i<photos.length; i++) {
    photos[i].addEventListener("click", function() { zoomIn(photos[i],closers[i]); });
    photos[i].addEventListener("mouseover", function() { closers[i].classList.remove("invisible"); });
    photos[i].addEventListener("mouseout", function() { closers[i].classList.add("invisible"); });
  }
};
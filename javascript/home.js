/*
  Author: Angelo Turri
  Date of last modification: 10/15/2019
*/

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var tops = document.getElementsByClassName("top");
var bottoms = document.getElementsByClassName("bottom");

$(document).ready(function(){
  $("#master").fadeIn(600);

  for (let i=0; i<tops.length; i++) {
    $(tops[i]).click(function() {
      $(bottoms[i]).slideToggle('medium');
    });
  };

  $("#backtotop").click(function() {
    topFunction();
  });
});
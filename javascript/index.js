/*
  Author: Angelo Turri
  Date of last modification: 10/23/2019
*/

/* Credit to https://www.w3schools.com/howto/howto_js_scroll_to_top.asp, 
this is where I got the script from. */
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
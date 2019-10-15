/*
  Author: Angelo Turri
  Date of last modification: 10/14/2019
*/

var tops = document.getElementsByClassName("top");
var bottoms = document.getElementsByClassName("bottom");

$(document).ready(function(){
  for (let i=0; i<tops.length; i++) {
    $(tops[i]).click(function() {
      $(bottoms[i]).slideToggle('medium');
    });
  };
  
});
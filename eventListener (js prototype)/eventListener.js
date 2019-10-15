window.onload = function(){
  var photos=[
    document.getElementById("photo1"),
    document.getElementById("photo2"),
    document.getElementById("photo3"),
    document.getElementById("photo4")
  ]

  var closers=[
    document.getElementById("closer1"),
    document.getElementById("closer2"),
    document.getElementById("closer3"),
    document.getElementById("closer4")
  ]

  var start=0;
  var gray = document.getElementById("gray");

  function zoomIn(photo, closer) {
      if(start==0) {
        photo.classList.toggle("red");
        photo.classList.toggle("zoomed");

        closer.classList.toggle("invisible");
        gray.classList.toggle("invisible");
        closer.innerHTML="click to close";
        start=1;
      }
      else {
        photo.classList.toggle("red");
        photo.classList.toggle("zoomed");
        closer.innerHTML="click to open";
        closer.classList.toggle("invisible");
        gray.classList.toggle("invisible");
        start=0;
      }
  }
  
  for(let i=0; i<photos.length; i++) {
    photos[i].addEventListener("click", function() { zoomIn(photos[i],closers[i]); });
    photos[i].addEventListener("mouseover", function() { closers[i].classList.remove("invisible"); });
    photos[i].addEventListener("mouseout", function() { closers[i].classList.add("invisible"); });
  }
};
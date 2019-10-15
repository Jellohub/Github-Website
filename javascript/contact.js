/*
  Author: Angelo Turri
  Date of last modification: 10/14/2019
*/


function validateForms() {
  
  var a = document.forms["contactForm"]["firstname"].value;
  var b = document.forms["contactForm"]["lastname"].value;
  var c = document.forms["contactForm"]["mail"].value;
  var d = document.forms["contactForm"]["phone"].value;
  var e = document.forms["contactForm"]["website"].value;
  var f = document.forms["contactForm"]["company"].value;
  var g = document.forms["contactForm"]["comment"].value;

  /* Looks to see if any of the form fields are empty. If so, "false" is returned, preventing
    any of the forms from being sent.
    Credit to https://www.w3schools.com/js/js_validation.asp */
  if (a=="" || b=="" || c=="" || d=="" || e=="" || f=="" || g=="") {
    alert("All forms must be filled out");
    return false;
  }


  /* Looks to see if the symbols "@" or "." are in the email field. If not,
  a valid email address has not been entered and needs to be fixed.
  Credit to https://www.geeksforgeeks.org/form-validation-using-html-javascript/ */
  if (document.forms["contactForm"]["mail"].value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        document.forms["contactForm"]["mail"].focus(); 
        return false; 
    } 
   
    if (document.forms["contactForm"]["mail"].value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        document.forms["contactForm"]["mail"].focus(); 
        return false; 
    } 
}
$(document).ready(function(){
  $('.header').height($(window).height());
})

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function toAbout() {
    location.href = "interests.html";
}




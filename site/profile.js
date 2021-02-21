// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 5000); // Change image every 2 seconds
// }
// // for automatically hide menu button
 document.querySelector("#top").addEventListener("blur",function() {}); or
$(function () {
  $("#top").blur(function (event) {
    var screenWidth=window.innerWidth;
    if (screenWidth<1200 {
      $("#top").collapse('hide');
    }
  });
});

function myFunction() {
    var x = document.getElementById("collapsable-nav");
    if (x.className === "collapse navbar-collapse") {
      x.className += " responsive";
    } else {
      x.className = "collapse navbar-collapse";
    }
}
//for automatically hide menu button
//  document.querySelector("#navbarToggle").addEventListener("blur",function() {}); or
// $(function () {
//   $("#navbarToogle").blur(function (event) {
//     var screenWidth=window.innerWidth;
//     if (screenWidth<768) {
//       $("#collapsable-nav").collapse('hide');
//     }
//   });
// });

//TO DYNAMICALLY LOAD PAGE
// (function(global){
//   var dc={};
//   var homeHtml="home-snipet.html";
//   var insertHtml=function(selector,html) {
//     var targetElem=document.querySelector(selector);
//     targetElem.innerHTML=html;
//   };
//   var showLoading = function(selector) {
//     var html="<div class='text-center'>";
//     html+="<img src= 'bmcURH3.jpg'></div>";
//     insertHtml(selector,html);
//   };
//   document.addEventListener("DOMContentLoaded",function(event)  {
//       showLoading("#main-content");
//       $ajaxUtils.sendGetRequest(homeHtml, function (responseText) {
//         document.querySelector("#main-content").innerHTML = responseText;
//       }, false);
//     });
//   global.$dc=dc;
// })(window);

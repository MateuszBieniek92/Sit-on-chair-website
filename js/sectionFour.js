document.addEventListener("DOMContentLoaded", function () {
 
    var triangle = document.querySelector(".list_arrow");
 var listOne = document.querySelector(".list_panel"); 
    
function myFunction() {
    listOne.classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.list_arrow')) {

    for (var i = 0; i < listOne.length; i++) {
      var openDropdown = listOne[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}    
    
    
    
    
    
    
    
    
//var triangle = document.querySelector(".list_arrow");
// var listOne = document.querySelector(".list_panel"); 
//    
//    console.log(triangle);
//    console.log(listOne);
//    
//triangle.addEventListener('click', function() {
//        listOne.classList.toggle("show");
//});  
//    

    
   
});
document.addEventListener("DOMContentLoaded", function () {

    var imgOne = document.querySelector('.imgOne');
    var imgTwo = document.querySelector('.imgTwo');

    /* img one */
    imgOne.addEventListener("mouseenter", function () {
        var child = imgOne.children;
        for (var i = 0; i < child.length; i++) {
            child[i].style.display = "none";
        }
    });

    imgOne.addEventListener("mouseout", function () {
        var child = imgOne.children;
        for (var i = 0; i < child.length; i++) {
            child[i].style.display = "inline-block";
        }
    });

    /* img two */
    imgTwo.addEventListener("mouseenter", function () {
        var child = imgTwo.children;
        for (var i = 0; i < child.length; i++) {
            child[i].style.display = "none";
        }
    });

    imgTwo.addEventListener("mouseout", function () {
        var child = imgTwo.children;
        for (var i = 0; i < child.length; i++) {
            child[i].style.display = "inline-block";
        }
    });



});
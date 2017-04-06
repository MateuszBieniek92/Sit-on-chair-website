document.addEventListener("DOMContentLoaded", function () {


    var company = document.querySelector('.menu');

    /* menu one */
    var liOne = company.querySelector('#firstLi');
    var submenuOne = company.querySelector('.submenuFirst');
    
    /* menu two */
    var liTwo = company.querySelector('#secondLi');
    var submenuTwo = company.querySelector('.submenuSecond');
    
    /* menu three */
    var liThree = company.querySelector('#thirdLi');
    var submenuThree = company.querySelector('.submenuThird');

    
    
    /* menu one */
    liOne.addEventListener("mouseout", function () {
        submenuOne.style.display = "none";
    });


    liOne.addEventListener("mouseenter", function () {
        submenuOne.style.display = "inline-block";
    });

    /* menu two */
    liTwo.addEventListener("mouseout", function () {
        submenuTwo.style.display = "none";
    });

    liTwo.addEventListener("mouseenter", function () {
        submenuTwo.style.display = "inline-block";
    });

    /* menu three */
    liThree.addEventListener("mouseout", function () {
        submenuThree.style.display = "none";
    });

    liThree.addEventListener("mouseenter", function () {
        submenuThree.style.display = "inline-block";
    });



});
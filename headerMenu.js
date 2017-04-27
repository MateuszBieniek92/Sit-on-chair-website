var mobile = window.matchMedia("screen and (max-width: 450px) ")
var open = true;
var heightChecked = false;
var initHeight = 0;
var intval = null;

mobile.addListener(function (mobile) {
    if (mobile.matches) {
        console.log('ponizej 450px');
    } else {
        -
        console.log('powyzej 450px');
    }
});


document.addEventListener("DOMContentLoaded", function () {


    var company = document.querySelector('.menu');
    var showHideMenu = document.querySelector('.btnMobile');
    var ulOne = company.querySelector('.submenuFirst');
    var ulTwo = company.querySelector('.submenuSecond');
    var ulThree = company.querySelector('.submenuThird');
    var triangle = ulTwo.querySelector('.triangleOne');

    console.log(showHideMenu);

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

    function slideToggle() {
        window.clearInterval(intval);
        if (!heightChecked) {
            initHeight = company.offsetHeight;
            heightChecked = true;
        }
        if (open) {
            var h = -20;
            open = false;
            intval = setInterval(function () {
                h++;
                company.style.height = h + 'px';
                if (h >= initHeight)
                    window.clearInterval(intval);
            }, 1);
        } else {
            var h = initHeight;
            open = true;
            intval = setInterval(function () {
                h--;
                company.style.height = h + 'px';
                if (h <= 0)
                    window.clearInterval(intval);
            }, 1);




        }
    }
    var children = company.children;
    
    console.log(children);
    
    
    showHideMenu.addEventListener("click", function () {
        children.style.display = "inline-block";
        company.className = 'menu mobileMenu';
        slideToggle();
        ulOne.classList.remove('submenuFirst');
        ulTwo.classList.remove('submenuSecond');
        ulThree.classList.remove('submenuThird');
       
    });







});
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



    /// HEADER SECTION

    var company = document.querySelector('.menu');
    var showHideMenu = document.querySelector('.btnMobile');
    var ulOne = company.querySelector('.submenuFirst');
    var ulTwo = company.querySelector('.submenuSecond');
    var ulThree = company.querySelector('.submenuThird');
    var triangle = ulTwo.querySelector('.triangleOne');

    //console.log(showHideMenu);

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

    //    function slideToggle() {
    //        window.clearInterval(intval);
    //        if (!heightChecked) {
    //            initHeight = company.offsetHeight;
    //            heightChecked = true;
    //        }
    //        if (open) {
    //            var h = -20;
    //            open = false;
    //            intval = setInterval(function () {
    //                h++;
    //                company.style.height = h + 'px';
    //                if (h >= initHeight)
    //                    window.clearInterval(intval);
    //            }, 1);
    //        } else {
    //            var h = initHeight;
    //            open = true;
    //            intval = setInterval(function () {
    //                h--;
    //                company.style.height = h + 'px';
    //                if (h <= 0)
    //                    window.clearInterval(intval);
    //            }, 1);
    //
    //
    //
    //
    //        }
    //    }
    //    var children = company.children;
    //
    //    console.log(children);
    //
    //
    //    showHideMenu.addEventListener("click", function () {
    //        children.style.display = "inline-block";
    //        company.className = 'menu mobileMenu';
    //        slideToggle();
    //        ulOne.classList.remove('submenuFirst');
    //        ulTwo.classList.remove('submenuSecond');
    //        ulThree.classList.remove('submenuThird');
    //
    //    });


    /// SECTION ! SLIDER


    var next = document.querySelector('.rightButton');
    var prev = document.querySelector('.leftButton');
    var array = document.querySelector('.sliderUl').querySelectorAll('li');
    var index = 0;

    array[index].classList.add('visible');

    next.addEventListener("click", function () {
        array[index].classList.remove('visible');
        index += 1;

        if (index >= array.length) {
            index = 0;
        }
        array[index].classList.add('visible');
    });

    prev.addEventListener("click", function () {
        array[index].classList.remove('visible');
        index -= 1;

        if (index < 0) {
            index = array.length - 1;
        }
        array[index].classList.add('visible');
    });


    /// SECTION 2


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

    /// SECTION 4 FORM

    var form = document.querySelector('.form');


    /// input panel LEFT
    var btnChairType = form.querySelector('.selectTypeOfChair');
    var inputChairType = form.querySelector('.typeOfChair');
    var btnChairColor = form.querySelector('.selectColorOfChair');
    var inputChairColor = form.querySelector('.colorOfChair');
    var btnChairPattern = form.querySelector('.selectPatternOfChair');
    var inputChairPattern = form.querySelector('.patternOfChair');
    var checkboxTransport = form.querySelector('.checkbox');
    var checkboxInputTransport = form.querySelector('input[type=checkbox]');


    /// summary panel RIGHT
    var summaryPanel = document.querySelector('.summary_panel');

    var panelLeft = summaryPanel.querySelector('.panel_left');

    var chairName = panelLeft.querySelector('.title');
    var chairColor = panelLeft.querySelector('.color');
    var chairPattern = panelLeft.querySelector('.pattern');
    var transport = panelLeft.querySelector('.transport');

    var panelRight = summaryPanel.querySelector('.panel_right');

    var chairNamePrice = panelRight.querySelector('.title');
    var chairColorPrice = panelRight.querySelector('.color');
    var chairPatternPrice = panelRight.querySelector('.pattern');
    var transportPrice = panelRight.querySelector('.transport');
    var totalPrice = summaryPanel.querySelector('.sum');

    /// reset prices
    var summaryChairNamePrice = 0;
    var summaryColorPrice = 0;
    var summaryPatterntPrice = 0;
    var summaryTransportPrice = 0;

    /// images

    var imageOne = document.querySelector('.imOne');
    var imageTwo = document.querySelector('.imTwo');
    var imageThree = document.querySelector('.imThree');
    imageOne.classList.remove('showList');
    //console.log(imageOne);

    btnChairType.addEventListener('click', function () {
        var listElement = this.nextElementSibling;
        listElement.classList.toggle('showList');

        for (var i = 0; i < listElement.children.length; i++) {

            listElement.children[0].addEventListener('click', function () {
                imageOne.classList.add('showList');
                imageTwo.classList.add('showList');
                imageThree.classList.remove('showList');
            });

            listElement.children[1].addEventListener('click', function () {
                imageOne.classList.add('showList');
                imageTwo.classList.remove('showList');
                imageThree.classList.add('showList');
            });

            listElement.children[2].addEventListener('click', function () {
                imageOne.classList.remove('showList');
                imageTwo.classList.add('showList');
                imageThree.classList.add('showList');
            });

            listElement.children[i].addEventListener('click', function () {
                inputChairType.innerHTML = this.innerHTML;
                chairName.innerHTML = this.innerHTML;
                chairNamePrice.innerHTML = this.dataset.chairPrice;
                summaryChairNamePrice = 0;
                summaryChairNamePrice = summaryChairNamePrice + parseInt(this.dataset.chairPrice);
                totalPrice.innerHTML = summaryChairNamePrice + summaryColorPrice + summaryPatterntPrice + summaryTransportPrice;
                this.parentElement.classList.add('showList');
            });
        }
    });

    btnChairColor.addEventListener('click', function () {
        var listElement = this.nextElementSibling;
        listElement.classList.toggle('showList');
        for (var i = 0; i < listElement.children.length; i++) {
            listElement.children[i].addEventListener('click', function () {
                inputChairColor.innerHTML = this.innerHTML;
                chairColor.innerHTML = this.innerHTML;
                chairColorPrice.innerHTML = this.dataset.colorPrice;
                summaryColorPrice = 0;
                summaryColorPrice = summaryColorPrice + parseInt(this.dataset.colorPrice);
                totalPrice.innerHTML = summaryChairNamePrice + summaryColorPrice + summaryPatterntPrice + summaryTransportPrice;
                this.parentElement.classList.add('showList');
            });
        }
    });

    btnChairPattern.addEventListener('click', function () {
        var listElement = this.nextElementSibling;
        listElement.classList.toggle('showList');
        for (var i = 0; i < listElement.children.length; i++) {
            listElement.children[i].addEventListener('click', function () {
                inputChairPattern.innerHTML = this.innerHTML;
                chairPattern.innerHTML = this.innerHTML;
                chairPatternPrice.innerHTML = this.dataset.patternPrice;
                summaryPatterntPrice = 0;
                summaryPatterntPrice = summaryPatterntPrice + parseInt(this.dataset.patternPrice);
                totalPrice.innerHTML = summaryChairNamePrice + summaryColorPrice + summaryPatterntPrice + summaryTransportPrice;
                this.parentElement.classList.add('showList');
            });
        }
    });

    checkboxTransport.addEventListener('click', function () {
        if (checkboxInputTransport.checked) {
            transport.innerHTML = "Transport";
            transportPrice.innerHTML = checkboxInputTransport.dataset.transportPrice;
            summaryTransportPrice = 0;
            summaryTransportPrice = summaryTransportPrice + parseInt(checkboxInputTransport.dataset.transportPrice);
            totalPrice.innerHTML = summaryChairNamePrice + summaryColorPrice + summaryPatterntPrice + summaryTransportPrice;
        } else {
            transport.innerHTML = "";
            transportPrice.innerHTML = "";
            summaryTransportPrice = 0;
            totalPrice.innerHTML = summaryChairNamePrice + summaryColorPrice + summaryPatterntPrice;
        }
    });

});
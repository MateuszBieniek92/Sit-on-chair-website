document.addEventListener("DOMContentLoaded", function () {

    var next = document.querySelector('.rightButton');
    var prev = document.querySelector('.leftButton');
    var array = document.querySelector('.sliderUl').querySelectorAll('li');
    var index = 0;
    
     array[index].classList.add('visible');
    
    next.addEventListener("click", function () {
        array[index].classList.remove('visible');
        index += 1;

        if (index >= array.length ) {
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
});
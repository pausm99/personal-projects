document.addEventListener("DOMContentLoaded", function(event) {

    var navbarHeight = document.getElementsByClassName('navbar')[0].offsetHeight;
    var menuButton = document.getElementById('menu-button');
    var navbarMenu = document.getElementById('navbar-menu-mobile');
    navbarMenu.style.top = navbarHeight;
    menuButton.addEventListener('click', function() {
        menuButton.classList.toggle('activeButton');
        navbarMenu.classList.toggle('menu-open');
        document.body.classList.toggle('fixed');
        document.getElementsByTagName('main')[0].classList.toggle('transparent-black');
        document.getElementById('page-header').classList.toggle('transparent-black');
    });

    var stars = document.getElementsByClassName('star');
    var drinks = document.getElementsByClassName('drink');
    var selectedStar = document.getElementsByClassName('selected-star')[0];
    var selectedDrink = document.getElementsByClassName('active')[0];

    for(let i = 0; i < stars.length; i++) {
        stars[i].addEventListener('click', function() {
            if (selectedStar !== stars[i]) {
                selectedStar.classList.remove('selected-star');
                selectedStar = stars[i];
                stars[i].classList.add('selected-star');

                selectedDrink.classList.remove('active');
                selectedDrink.classList.add('inactive');
                selectedDrink = drinks[i];
                drinks[i].classList.remove('inactive');
                drinks[i].classList.add('active');
            }
        });
    }

    var arrowButtons = document.getElementsByClassName('link-title-arrow');
    var linkColumn = document.getElementsByClassName('expandable');

    for (let i = 0; i < arrowButtons.length; i++) {
        arrowButtons[i].addEventListener('click', function() {
            let arrow = (this).children[0];
            linkColumn[i].classList.toggle("expanded");
            arrow.classList.toggle("inverted");
        });
    }

});

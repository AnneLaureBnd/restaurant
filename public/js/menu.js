//function to display the left menu in the header
function displayMenu() {
    let menuBlock = document.getElementById('header_menu');
    menuBlock.classList.remove('header_menu_hide');
    menuBlock.classList.add('header_menu_visible');
}

//function to hide the left menu in the header
function hideMenu() {
    let menuBlock = document.getElementById('header_menu');
    menuBlock.classList.remove('header_menu_visible');
    menuBlock.classList.add('header_menu_hide');
}

//function to display the right menu "reserve" in the header
function displayReserve() {
    let reserveBlock = document.getElementById('header_reserve');
    reserveBlock.classList.remove('header_reserve_hide');
    reserveBlock.classList.add('header_reserve_visible');
}

//function to hide the right menu "reserve" in the header
function hideReserve() {
    let reserveBlock = document.getElementById('header_reserve');
    reserveBlock.classList.remove('header_reserve_visible');
    reserveBlock.classList.add('header_reserve_hide');
}


//wait the DOMContentLoaded
document.addEventListener('DOMContentLoaded', function(){
    //when the user click on the menu link, throw the displayMenu function
    let menu = document.getElementById('menu_button');
    menu.addEventListener('click', displayMenu);
    //when the user click on the cross in the menu display, throw the hideMenu function
    let headCross = document.getElementById('menu_cross');
    headCross.addEventListener('click', hideMenu);
    //when the user click on the reserve link, throw the displayReserve function
    let reserve = document.getElementById('reserve_button');
    reserve.addEventListener('click', displayReserve);
    //when the user click on the cross in the reserve display, throw the hideReserve function
    let reserveCross = document.getElementById('reserve_cross');
    reserveCross.addEventListener('click', hideReserve);
});
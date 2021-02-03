    // sticky navigation menu

function navbarFixed() {
        
    // define all UI variable
    const navToggler = document.querySelector('.nav-toggler');
    const navMenu = document.querySelector('.site-navbar ul');
    const navLinks = document.querySelectorAll('.site-navbar a');

    // load all event listners
    allEventListners();

    // functions of all event listners
    function allEventListners() {
    // toggler icon click event
    navToggler.addEventListener('click', togglerClick);
    // nav links click event
    navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
    }

    // togglerClick function
    function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
    }

    // navLinkClick function
    function navLinkClick() {
        if(navMenu.classList.contains('open')) {
            navToggler.click();
        }
    }
    if ($('.header_area').length > 0) {
    let nav_offset_top = 0;
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();
            if (scroll < nav_offset_top) {
                $('.header_area .main-menu').removeClass('scrolled-down').addClass('scrolled-up');
            } else {
                $('.header_area .main-menu').removeClass('scrolled-up').addClass('scrolled-down');
            }
            nav_offset_top = scroll;
        });
    }
    

}

export default navbarFixed;
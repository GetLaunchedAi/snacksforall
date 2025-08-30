//
//    Toggle Mobile Navigation
//
const navbarMenu = document.querySelector("#cs-navigation .mobile-menu");
const hamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");
const navLinks = document.querySelectorAll('.cs-li-link');
const about = document.querySelector('#About\\ Us')
const contact = document.querySelector('#Contact')

const togggleMenu = () => {
    const isNavOpen = navbarMenu.classList.contains("open");
    if (!isNavOpen) {
        hamburgerMenu.setAttribute("aria-expanded", true);
        hamburgerMenu.classList.add("clicked");
        navbarMenu.classList.add("open");
        console.log('opened');
    } else {
        hamburgerMenu.setAttribute("aria-expanded", false);
        hamburgerMenu.classList.remove("clicked");
        navbarMenu.classList.remove("open");
        console.log('closed');
    }
}

hamburgerMenu.addEventListener('click', function () {
    togggleMenu()
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        togggleMenu();
    });
});
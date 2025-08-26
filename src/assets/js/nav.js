//
//    Toggle Mobile Navigation
//
const navbarMenu = document.querySelector("#cs-navigation .mobile-menu");
const hamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");
const serviceMenu = document.querySelector("#navigation .dropdown");
const about = document.querySelector('#About\\ Us')
const contact = document.querySelector('#Contact')

const screenWidth = window.screen.width;

hamburgerMenu.addEventListener('click', function () {
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
});

// serviceMenu.addEventListener('click', function () {
//     const isServiceOpen = serviceMenu.classList.contains("open");
//     if (!isServiceOpen) {
//         serviceMenu.setAttribute("aria-expanded", true);
//         serviceMenu.classList.add("open");
//         if (screenWidth < 770) {
//             about.style.display = 'none'
//             contact.style.display = 'none'
//         }
//     } else {
//         serviceMenu.setAttribute("aria-expanded", false);
//         serviceMenu.classList.remove("open");
//         if (screenWidth < 770) {
//             about.style.display = 'block'
//             contact.style.display = 'block'
//         }
//     }
// });
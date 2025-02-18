let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let experience = document.querySelectorAll('experience');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    Selection.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.ForEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
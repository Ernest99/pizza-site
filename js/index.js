// scroll reveal
// Scroll Reveal
const sr = ScrollReveal();
sr.reveal('.pop', {
    origin: "top",
    duration: 2000,
    reset: true
});

// Toggler for navbar
var menu_toggler = document.querySelector('.menu-btn');
var navbar = document.querySelector('.navbar');
menu_toggler.addEventListener('click', function() {
    menu_toggler.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


var navbar = document.querySelector('.navbar');
var NavLink = document.querySelectorAll('.navLink');

NavLink.addEventListener("click", function() {
    navbar.classList.remove('active');
});

// preloader
var loader = document.getElementById('preloader');
window.addEventListener('load', function() {
    loader.style.display = 'none';
});


// back to top
var topBtn = document.getElementById('Top');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
        topBtn.classList.add('showTop');
    } else {
        topBtn.classList.remove('showTop');
    }
});
// back to top
var topBtn = document.querySelector('#Top');
topBtn.addEventListener('click', function() {
    window.scrollTo(0, 0);
});


// owl caurosel

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});
$('.owl-theme').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

// Message popup script

var frm = $('#msform');
let submissionStatus = document.querySelector('.body');

frm.submit(function(e) {
    e.preventDefault();

    $.ajax({
        type: frm.attr('method'),
        url: frm.attr('action'),
        data: frm.serialize(),
        success: function(data) {
            submissionStatus.innerHTML = `<div class="suc">
        <div class="box">
            <i class="fa-regular fa-circle-check"></i>
            <h3>Message sent successfully</h3>
            <div class="suc_btn">
                <a href="index.html">OK</a>
            </div>
        </div>
    </div>`
            frm.trigger("reset");
        },
        error: function(data) {
            submissionStatus.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                <span class="sr-only">Close</span>
            </button>
            <strong>Sorry an error occured. Try again
        </div>`
        },
    });
});
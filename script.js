// toggle icon nav bar //
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

// scroll section active bar //
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id +']').classList.add('active');
            });
        };
    });
 //sticky navbar//
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click navbar link(scroll)//
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

// circle skill //
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0 ; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    };
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    };
});

/*************scroll reveal******************************** */
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .education-row, .skills-left, .project-box', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .skills-right', { origin: 'right' });

/////////////typed js////////////////
const typed = new Typed('.multiple-text',{
    strings: ['FULL STACK DEVELOPER','WEB APP DEVELOPER' , 'DATA ANALYTICS'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/**************hire me*********************** */
function sendEmail() {
    var recipient = "anuragrai13856@gmail.com";
    var subject = "Hiring Process";
    var body = "Dear Anurag Rai,";

    var mailtoUrl = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    // Create a temporary anchor element
    var tempLink = document.createElement("a");
    tempLink.href = mailtoUrl;

    // Simulate a click on the temporary link
    tempLink.click();
  }

  

  
// ===============================
// Mobile Menu
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Close menu on click

document.querySelectorAll("#nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});

// ===============================
// Scroll Progress Bar
// ===============================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scroll = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    progressBar.style.width = (scroll / height) * 100 + "%";

});

// ===============================
// Sticky Navbar Shadow
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.4)";

    }

    else{

        header.style.boxShadow="none";

    }

});

// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 80;

        const update = () => {

            count += speed;

            if(count < target){

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(update);

            }

            else{

                counter.innerText = target + "+";

            }

        };

        update();

    });

};

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            startCounter();

            observer.disconnect();

        }

    });

});

observer.observe(document.querySelector(".stats"));

// ===============================
// Active Navigation
// ===============================

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll("#nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ===============================
// Dark / Light Mode
// ===============================

const themeBtn=document.getElementById("theme-toggle");

let dark=true;

themeBtn.addEventListener("click",()=>{

if(dark){

document.documentElement.style.setProperty("--dark","#ffffff");
document.documentElement.style.setProperty("--dark2","#f4f4f4");
document.documentElement.style.setProperty("--white","#111827");
document.body.style.background="#ffffff";
document.body.style.color="#111827";

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

else{

document.documentElement.style.setProperty("--dark","#0f172a");
document.documentElement.style.setProperty("--dark2","#111827");
document.documentElement.style.setProperty("--white","#ffffff");
document.body.style.background="#0f172a";
document.body.style.color="#ffffff";

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

dark=!dark;

});

// ===============================
// Scroll Reveal
// ===============================

const reveal=document.querySelectorAll(".project-card,.skill-card,.service-card,.education-card,.certificate-card");

const revealFunction=()=>{

reveal.forEach(card=>{

const top=card.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(top<windowHeight-100){

card.classList.add("fade-up");

}

});

}

window.addEventListener("scroll",revealFunction);

revealFunction();

// ===============================
// Back To Top Button
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#38bdf8";
topBtn.style.color="#fff";
topBtn.style.cursor="pointer";
topBtn.style.fontSize="20px";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ===============================
// Contact Form
// ===============================

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}
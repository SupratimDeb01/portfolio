document.querySelectorAll('nav a, .footer a, .popup-navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// -------------------------Floating Navbar Functionality-----------------------------


// Get elements
const hamburger = document.getElementById('hamburger-icon');
const floatingnavbar = document.getElementById('floating-navbar');
const popupNavbar = document.getElementById('popup-navbar');
const cancel = document.getElementById('cancel');

// Toggle popup navbar
hamburger.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    popupNavbar.style.display="flex";
    floatingnavbar.style.display="none";
});

// Close popup navbar
cancel.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    popupNavbar.style.display="none";
    floatingnavbar.style.display="flex";
});


//darkmode---------------------------------
const sign =document.getElementById("sign-light");
const sign1=document.getElementById("sign-dark");

const sign3 =document.getElementById("sign-foot1");
const sign4=document.getElementById("sign-foot2");

const darkModeToggle = document.getElementById("darkModeToggle");
const darkModeToggle2 = document.getElementById("darkModeToggle2");
const body = document.body;

// Check for saved dark mode preference
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
}

// // Toggle dark mode on click

darkModeToggle.addEventListener("click", (event) => {
    body.classList.toggle("dark-mode");
    event.preventDefault();
    if (body.classList.contains("dark-mode")) {
        // localStorage.setItem("dark-mode", "enabled");
        darkModeToggle.classList.replace("fa-moon", "fa-sun");
        sign.style.display="none";
        sign1.style.display="flex";
        sign3.style.display="none";
        sign4.style.display="flex";
    } else {
        // localStorage.setItem("dark-mode", "disabled");
        darkModeToggle.classList.replace("fa-sun", "fa-moon");
        sign.style.display="flex";
        sign1.style.display="none";
        sign3.style.display="flex";
        sign4.style.display="none";
    }
});

darkModeToggle2.addEventListener("click", (event) => {
    event.preventDefault();
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        // localStorage.setItem("dark-mode", "enabled");
        darkModeToggle2.classList.replace("fa-moon", "fa-sun");
        sign.style.display="none";
        sign1.style.display="flex";
        sign3.style.display="none";
        sign4.style.display="flex";
    } else {
        // localStorage.setItem("dark-mode", "disabled");
        darkModeToggle2.classList.replace("fa-sun", "fa-moon");
        sign.style.display="flex";
        sign1.style.display="none";
        sign3.style.display="flex";
        sign4.style.display="none";
    }
});



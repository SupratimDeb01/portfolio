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
// if (localStorage.getItem("dark-mode") === "enabled") {
//     body.classList.add("dark-mode");
// }

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


// --------------------------------------------------------------------------------------
/* === Projects slider (re‑ordering, no clones) ==================== */
/* === Projects Slider === */
/* === Projects Slider (step = 1 card) === */

/* ——— grab elements ——— */
const sliderWrapper  = document.getElementById('sliderWrapper');
const prevBtn        = document.getElementById('prevBtn');
const nextBtn        = document.getElementById('nextBtn');
const dotsContainer  = document.getElementById('dotsContainer');

let pageSize   = 2;   // visible cards per view (auto‑computed)
let current    = 0;   // index of the FIRST visible card
let totalSteps = 0;   // how many distinct starting positions

/* ——— build / rebuild everything ——— */
function refresh () {
  pageSize   = window.innerWidth < 640 ? 1 : 2;              // phones ⇒ 1
  const cards = sliderWrapper.querySelectorAll('.card');
  totalSteps  = Math.max(1, cards.length - pageSize + 1);    // move by ONE

  /* force correct width so exactly pageSize cards fill 100 % */
  cards.forEach(c => c.style.flex = `0 0 ${100 / pageSize}%`);

  /* rebuild dots (one per step) */
  dotsContainer.innerHTML = '';
  for (let i = 0; i < totalSteps; i++) {
    const dot = document.createElement('button');
    if (i === current) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  }

  /* clamp current if resize removed steps */
  if (current >= totalSteps) current = totalSteps - 1;

  translate();
}

/* ——— helpers ——— */
function translate () {
  /* each card is 100/pageSize % wide, so shift that much per step */
  const offset = current * (100 / pageSize);
  sliderWrapper.style.transform = `translateX(-${offset}%)`;
  updateDots();
  updateArrows();
}

function updateDots () {
  [...dotsContainer.children].forEach((d, i) =>
    d.classList.toggle('active', i === current)
  );
}

function updateArrows () {
  const hasPrev = current > 0;
  const hasNext = current < totalSteps - 1;
  prevBtn.style.display = hasPrev ? 'block' : 'none';
  nextBtn.style.display = hasNext ? 'block' : 'none';
}

function goTo (step) {
  current = Math.max(0, Math.min(step, totalSteps - 1));
  translate();
}

/* ——— nav buttons ——— */
prevBtn.addEventListener('click', () => goTo(current - 1));
nextBtn.addEventListener('click', () => goTo(current + 1));

/* ——— re‑calculate on resize ——— */
window.addEventListener('resize', refresh);

/* ——— first run ——— */
refresh();

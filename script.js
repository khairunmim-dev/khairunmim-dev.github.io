/* ==========================================================
   Portfolio of Mst. Khairun Nessa Mim — script.js
   Small, beginner-friendly JavaScript. Each part is labelled.
   ========================================================== */

/* ---------- 0. Dark / Light mode ---------- */
/* The choice is saved in the browser, so it stays on the next visit. */
const themeToggle = document.getElementById('themeToggle');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
}

/* On first load: use the saved choice, or the phone/PC system setting */
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setTheme('dark');
} else {
  setTheme('light');
}

themeToggle.addEventListener('click', function () {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

/* ---------- 0b. Typing effect (hero title) ---------- */
/* Words are typed letter by letter, stay for a moment,
   then get erased and the next word is typed. */
const typedWords = ['CSE Student', 'Digital Marketing Intern', 'Aspiring Web Developer', 'Technology Enthusiast'];
const typedText = document.getElementById('typedText');

let wordIndex = 0;   // which word is showing now
let charIndex = 0;   // how many letters of it are visible
let isDeleting = false;

function typeEffect() {
  const word = typedWords[wordIndex];

  if (isDeleting) {
    charIndex--;                       // remove one letter
  } else {
    charIndex++;                       // add one letter
  }
  typedText.textContent = word.substring(0, charIndex);

  let speed = isDeleting ? 40 : 90;    // deleting is faster than typing

  if (!isDeleting && charIndex === word.length) {
    speed = 1600;                      // word complete: wait before erasing
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % typedWords.length;  // move to next word
    speed = 350;                       // small pause before typing again
  }

  setTimeout(typeEffect, speed);       // run again after the delay
}
typeEffect();

/* ---------- 1. Mobile menu (hamburger) ---------- */
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

navToggle.addEventListener('click', function () {
  navList.classList.toggle('open');
});

/* Close the mobile menu after a link is tapped */
document.querySelectorAll('.nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    navList.classList.remove('open');
  });
});

/* ---------- 2. Highlight the menu link of the section on screen ---------- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function () {
  let current = 'home';
  sections.forEach(function (section) {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });
  navLinks.forEach(function (link) {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

/* ---------- 3. Scroll reveal animation ---------- */
/* Anything with class "reveal" fades in when it comes into view */
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(function (el) {
  observer.observe(el);
});

/* ---------- 4. Back-to-top button ---------- */
const toTop = document.getElementById('toTop');

window.addEventListener('scroll', function () {
  toTop.classList.toggle('show', window.scrollY > 400);
});

toTop.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ---------- 5. Contact form ---------- */
/* HOW MESSAGES REACH YOUR EMAIL:
      This form sends through FormSubmit (free, no account needed).
      The FIRST submission sends one activation email to your Gmail —
      click the activation link in it once, and from then on every
      message from this form arrives directly in your inbox.
      If sending ever fails, the form falls back to opening the
      visitor's email app with the message ready to send. */
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/mimpakhi05@gmail.com';

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // stop the page from reloading

  const name = document.getElementById('cf-name').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  const message = document.getElementById('cf-message').value.trim();

  /* Send through FormSubmit, which delivers the message to my inbox */
  formStatus.textContent = 'Sending...';
  fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
      _subject: 'New message from your portfolio website',
      _template: 'table'
    })
  }).then(function (response) {
    if (response.ok) {
      formStatus.textContent = 'Thank you! Your message has been sent.';
      contactForm.reset();
    } else {
      openMailApp();
    }
  }).catch(function () {
    openMailApp();
  });

  /* Fallback: open the visitor's email app with the message filled in */
  function openMailApp() {
    const subject = encodeURIComponent('Portfolio contact from ' + name);
    const body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');
    formStatus.textContent = 'Opening your email app instead...';
    window.location.href = 'mailto:mimpakhi05@gmail.com?subject=' + subject + '&body=' + body;
  }
});

/* ---------- 6. Automatic year in the footer ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

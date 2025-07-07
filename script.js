const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeSwitch.checked = true;
} else if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  body.classList.add('dark-mode');
  themeSwitch.checked = true;
}

themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
});
const toggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");
const header = document.querySelector("header");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    header.classList.add("hide");
  });
});
document.querySelectorAll('.icon-link').forEach(icon => {
  const i = icon.querySelector('i');
  if (i) {
    icon.setAttribute('data-icon', i.textContent);
  }
});
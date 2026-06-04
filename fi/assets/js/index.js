// Toggle Menu Functionality Start

function openMenu() {
  document.getElementById("sidebar").classList.add("active");
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("active");
}
// Toggle Menu Functionality End


// Scroll to next section Start

(function () {
  'use strict';

  var btnScrollDown = document.querySelector('#scroll_down');

  function scrollDown() {
    const nextSection = window.innerHeight;

    window.scrollTo({
      top: nextSection,
      behavior: "smooth"
    });
  }

  if (btnScrollDown) {
    btnScrollDown.addEventListener('click', scrollDown);
  }
})();

// Scroll to next section End

// AOS JS Start
AOS.init({
  duration: 1200,
});
// AOS JS End

window.addEventListener("load", function () {
  if (window.location.hash === "#contact_page") {
    const section = document.getElementById("contact_page");
    const offset = 150;

    if (section) {
      const y = section.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    }
  }
});

// Loader JS Start
window.addEventListener('load', function () {
  document.getElementById('loader').style.display = 'none';
});
// Loader JS End

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header-container");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});




// Language Transltor JS Strat
const langBtn = document.getElementById("langBtn");
const dropdown = document.getElementById("langDropdown");
const currentFlag = document.getElementById("currentFlag");

langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("active");
});

document.addEventListener("click", () => {
    dropdown.classList.remove("active");
});

document.querySelectorAll(".lang-option").forEach(option => {

    option.addEventListener("click", () => {

        const flag = option.dataset.flag;
        const url = option.dataset.url;

        // Update button flag immediately
        currentFlag.src = flag;

        // Redirect to language folder
        window.location.href = url;
    });

});


// Language Transltor JS End
// Selecet DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial Stat of Menu
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

$(document).ready(function() {
  /* VANTA.WAVES({
    el: "#background",
    color: 0x3aafa9,
    shininess: 100.0,
    waveHeight: 20.0,
    waveSpeed: 1.3,
    zoom: 1.0
  });

  var typed = new Typed(".typed", {
    strings: ["Web Developer.", "Programmer.", "Designer.", "Entrepreneur."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: true
  }); */
});

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //Set Menu State
    showMenu = false;
  }
}

$(function() {
  var $grid = $(".grid").isotope({
    itemSelector: "article"
  });

  // filter buttons
  $(".filters-button-group").on("click", "button", function() {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });
  $(".button-group").each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function() {
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      $(this).addClass("is-checked");
    });
  });
});

// debounce so filtering doesn't happen every millisecond
function debounce(fn, threshold) {
  var timeout;
  return function debounced() {
    if (timeout) {
      clearTimeout(timeout);
    }
    function delayed() {
      fn();
      timeout = null;
    }
    timeout = setTimeout(delayed, threshold || 100);
  };
}

$(window).bind("load", function() {
  $("#all").click();
});

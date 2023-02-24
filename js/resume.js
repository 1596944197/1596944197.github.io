// Get that hamburger menu cookin' //

document.addEventListener("DOMContentLoaded", function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener("click", function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// Preloader
$(document).ready(function ($) {
  $('#main').css('display', 'none');
  $('html').css('overflow', 'hidden');
  setTimeout(() => {
    $('#main').css('display', 'block');
  }, 1000);
  setTimeout(() => {
    $("#loading_page").fadeOut();
    $('html').css('overflow', 'auto');
  }, 1000);
  $("body").removeClass("preloader-site");
});

$(window).on("load", function () {
  var Body = $("body");
  Body.addClass("preloader-site");
});

$('.juejin-writing').on('click', function () {
  window.open('https://juejin.cn/user/96412752681079');
});

$('.submit-button').on('click', function () {
  Swal.fire({
    title: '<img style="width: 200px; height: 200px" src="../img/mmqrcode1677205240740.png" />',
    // icon: 'info',
    text: '此功能还未开发完成，扫描上方二维码添加我为微信好友～',
    showCloseButton: true,
    confirmButtonText: '知道了'
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $('html').css('overflow', 'hidden');
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $('html').css('overflow', 'auto');
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});

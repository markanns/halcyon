//js for dropdown menu

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');

});


//library for image slider
$(document).ready(function () {
  $('.responsive').slick({

    prevArrow: $('.prevArrow'),
    nextArrow: $('.nextArrow'),
    infinite: false,
    speed: 300,
    slidesToShow: 2.5,
    slidesToScroll: 2.5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2.5,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: 'unslick'
      }
    ]
  });
});



$(document).ready(function () {
  if ($('.single-item').length == 1) {
    $('.single-item').appendTo('.reviewSlider')
  }
  $('.single-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: $('.prev1'),
    nextArrow: $('.next1'),

  });
});


$(document).ready(function () {
  $('.multiple').slick({

    prevArrow: $('.prev2'),
    nextArrow: $('.next2'),
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: 'unslick'
      }
    ]
  });
});

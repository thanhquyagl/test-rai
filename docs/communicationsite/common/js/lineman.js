$(document).ready(function () {

  $('.js-bubble').click(function () {
    $(this).removeClass('is-show');
    $('.js-speech').addClass('is-show');
  })

  $('.js-close--speech').click(function () {
    $('.js-speech').removeClass('is-show');
    $('.js-bubble').addClass('is-show');
  })

  $('.js-nav__btn').click(function () {
    $('.js-lineman__nav').toggleClass('is-show');
  })

  $('.js-slider__left').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    asNavFor: '.js-slider__right',
  });

  var sliderRight = $('.js-slider__right');

  sliderRight.slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '.js-slider__right--next',
    prevArrow: '.js-slider__right--prev',
    fade: true,
    cssEase: 'linear',
    asNavFor: '.js-slider__left',
  });

  $('.js-slider__other').slick({
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          nextArrow: '.js-kasou__other--next',
          prevArrow: '.js-kasou__other--prev',
        }
      }
    ]
  });

  $('.js-nav__link').click(function (event) {
    event.preventDefault();
    var id = $(this).attr('href');

    let aboutHeight = $('#about').innerHeight();
    let winHeight = $('#scrollContent').innerHeight();
    let headerHeight = $('#js-header').innerHeight();
    let topHeight = $('#top').innerHeight();
    let littleHeight = $('#js-little').innerHeight();
    let maintenHeight = $('#js-mainten').innerHeight();
    let overheadHeight = $('#js-overhead').innerHeight();
    let assemblyHeight = $('#js-assembly').innerHeight();
    let surveyHeight = $('#js-survey').innerHeight();
    let scrollValue = 0;

    if (id == "#top") {
      scrollValue = headerHeight;
    }
    if (id == "#mainten") {
      scrollValue = headerHeight + topHeight + littleHeight + maintenHeight;
    }
    if (id == "#overhead") {
      scrollValue = headerHeight + topHeight + littleHeight + maintenHeight + overheadHeight;
    }
    if (id == "#assembly") {
      scrollValue = headerHeight + topHeight + littleHeight + maintenHeight + overheadHeight + assemblyHeight;
    }
    if (id == "#survey") {
      scrollValue = headerHeight + topHeight + littleHeight + maintenHeight + overheadHeight + assemblyHeight + surveyHeight;
    }

    $('html, body').animate({
      scrollTop: ((winHeight - scrollValue) + (aboutHeight + 100))
    }, 1600);
  });

  function observeIntersection(id, linkClass) {
    if (!!window.IntersectionObserver) {
      let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            $('.js-nav__link').removeClass('is-active');
            $(`.p-lineman__nav--link.${linkClass}`).addClass('is-active');
          }
        });
      }, { rootMargin: "-200px 0px 0px 0px" });
      Array.from(document.querySelectorAll(`#${id}`)).forEach(item => { observer.observe(item) });
    }
  }

  const items = [
    { id: "top", linkClass: "top" },
    { id: "mainten", linkClass: "mainten" },
    { id: "overhead", linkClass: "overhead" },
    { id: "assembly", linkClass: "assembly" },
    { id: "survey", linkClass: "survey" },
    { id: "js-little", linkClass: "little" }
  ];

  items.forEach(item => {
    observeIntersection(item.id, item.linkClass);
  });

  // function scroll linema
  var winAbout = $('#about').innerHeight();
  $(window).on('load resize', function () {
    let winHeight = $('#scrollContent').innerHeight();
    $("#scrollTop").height(winHeight + winAbout);
  });

  $(window).on("scroll", function () {
    var elemOffsetTop = $("#about").offset().top;
    var elemHeight = document.getElementById('about').offsetHeight;
    var elemAbout = elemOffsetTop + elemHeight;
    let num = $(window).scrollTop() - winAbout;
    if (num <= 0) {
      num = 0;
    }
    $("#scrollContent").css("transform", "translate(0px, 0px)");
    if (document.documentElement.scrollTop > elemAbout || document.documentElement.scrollTop > elemAbout) {
      $("#scrollContent").css('transform', 'translate3d(0px,' + num + 'px, 0px)');
    }

  });


  // function show item down up
  if (!!window.IntersectionObserver) {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.className += " is-active";
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "-200px 0px 0px 0px" });

    Array.from(document.querySelectorAll('.c-inv')).forEach(item => { observer.observe(item) });
  }
  else {
    $('.c-inv').addClass('is-active')
  }

  //function scroll Parellax
  let scrollspeed = 0.09;
  let target = $('.scrollr-wrap');

  if (target.length) {
    $(window).scroll(function () {
      let scrollTop = $(this).scrollTop();
      let point = scrollTop - target.offset().top;
      $('.c-scrollr').each(function () {
        let s = $(this);
        let speed = s.data('speed');
        s.css('transform', 'translate3d(0,' + -point * speed * scrollspeed + 'px, 0)');
      });
      $('.c-scrollr02').each(function () {
        let s = $(this);
        let speed = s.data('speed');
        s.css('transform', 'translate3d(0,' + point * speed * scrollspeed + 'px, 0)');
      });
    });
  }
});
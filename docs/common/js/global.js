(function($) {

"use strict";

  $(function(){
    // footer menu
    $('.l-group-footer-link__link').on('click', function () {
      if ($(window).innerWidth() <= 767) {
        $(this).toggleClass('is-open');
        $(this).parent('.l-group-footer-link__logo').siblings('.l-group-footer-menu').stop(true, false).slideToggle(250);
        $("html,body").animate({ scrollTop: $(this).offset().top });
        return false;
      }
    });

    // global menu
    var elem = "";
    $('.l-group-header__nav--item__link').on('click', function () {
      elem = $(this).parent('.l-group-header__nav--item').data('group');
      if (elem !== undefined) {
        if ($(this).parent('.l-group-header__nav--item').hasClass('is-active')) {
          $('.l-group-header__nav--item').removeClass('is-active');
          $('.l-group-header').removeClass('is-active');
        } else {
          $('.l-group-header__nav--item').removeClass('is-active');
          $('.l-group-header').removeClass('is-active');
          $(this).parent('.l-group-header__nav--item').addClass('is-active');
          $('.l-group-header').addClass('is-active');
        }
        if ($('#' + elem).hasClass('is-active')) {
          $('#' + elem).removeClass('is-active');
        } else {
          $('.l-group-drop__block').removeClass('is-active');
          $('#' + elem).addClass('is-active');
        }
        if ($('.l-group-drop__block').hasClass('is-active')) {
          $('.overlay').addClass('is-active');
        } else {
          $('.overlay').removeClass('is-active');
        }
        return false;
      }
    });
    $('.l-group-drop__block-close,.overlay').on('click', function (e) {
      e.stopPropagation();
      $('.l-group-header__nav--item').removeClass('is-active');
      $('.l-group-drop__block').removeClass('is-active');
      $('.overlay').removeClass('is-active');
      $('.l-group-header').removeClass('is-active');
    });

    // Hamburger
    var st;
    var timer;
    $('.sp-header__menu-wrap').on('click', function() {
      clearTimeout(timer);
      if($('.sp-header__menu').hasClass('btn-open')){
        $('#wrapper').css({'position':'static'});
        $('body,html')
            .stop(true, false)
            .animate({ scrollTop: st }, 0, 'swing');
      }else{
        st = $(window).scrollTop();
        timer = setTimeout(function(){
          $('#wrapper').css({'position':'fixed'});
        },100);
      }
      $('.overlay')
          .stop()
          .fadeToggle();
      $('.sp-header__menu')
          .stop()
          .toggleClass('btn-open')
          .stop()
          .toggleClass('btn-close');
      $('.l-header-nav')
          .stop()
          .toggleClass('is-active');
      $('body').stop().toggleClass('oh-open');
    });

    $('.sp-header__menu-wrap').on('click', function () {
      $('.l-header-link').toggleClass('open');
      $('.l-group-header').toggleClass('open');
      setTimeout(function(){
        if($('.l-header-nav').hasClass('is-active')){
          $('.l-header').css('height','100%');
          $('.l-header-top').addClass('is-active')
        }else{
          $('.l-header').css('height','auto');
          $('.l-header-top').removeClass('is-active')
        }
      }, 100);
    });

    $('.overlay').on('click', function (e) {
      e.stopPropagation();
      $('.overlay').removeClass('is-active');
      $('.l-group-header').removeClass('is-active');
    });

  });

})(jQuery);


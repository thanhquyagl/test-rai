'use strict';

// ▼グロナビ（SP）▼
$(function () {
  $('.sp-header__menu-wrap').on('click', function () {
    $('.l-brand-header-link__wrapper').toggleClass('open');
  });
});
// ▲グロナビ（SP）▲

// ▼fadeIn▼
$(function () {
  if ($('.js-ContentfadeIn').length) {
    if (window.matchMedia('(min-width:1025px)').matches) {
      var fadeIn = $('.js-ContentfadeIn');
      $(window).on('load scroll resize', function () {
        $(fadeIn).each(function () {
          var offset = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > offset - windowHeight + 100) {
            if ($(this).hasClass('p-brand-daily__box')) {
              if ($('.p-brand-daily__inner').hasClass('js-anime')) {
                $('.p-brand-daily__box').addClass('js-anime');
              }
            } else {
              $(this).addClass('js-anime');
            }
          }
        });
      });
    } else {
      $(function () {
        if ($('.p-brand-daily__inner').hasClass('js-anime')) {
          $('.p-brand-daily__box').addClass('js-anime');
        }
      });
      var fadeIn = $('.js-ContentfadeIn');
      $(window).on('load scroll resize', function () {
        $(fadeIn).each(function () {
          var offset = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > offset - windowHeight + 100) {
            $(this).addClass('js-anime');
          }
        });
      });
    }
  }
});
// ▲fadeIn▲

// ▼IEでのobject-fit対応▼
$(function () {
  objectFitImages();
});
// ▲IEでのobject-fit対応▲

// ▼絞り込み（Power Grid Activity Report）▼
$(function () {

  var number = $('.js-brand-content').length;
  $('.js-number').text(number).append('<span>件</span>');

  var showCount = 8;
  var $option = $('.js-filter-option');
  var $groups = $('.js-holder');
  if (!$option.length || !$groups.length) return;

  var nfText = '<p class="u-fz-24 u-fz-20-md--down u-center u-fw-bold js-text">該当する情報がありません</p>';
  if ($('.js-filter01').length && $('.js-filter02').length) {
    $groups.first().before(nfText);
  }
  if ($('.js-text').length) {
    $('.js-text').hide();
  }
  var $groupsLength = $groups.length;
  var $groupsHideCount = 0;

  $groups.each(function () {
    setButtons($(this));
    resetShowStatus($(this));
    if ($groupsLength === $groupsHideCount) {
      $('.js-text').show();
    } else {
      $('.js-text').hide();
    }
  });
  $option.find('a').click(function (e) {
    e.preventDefault();
    $(this).closest('ul').find('.is-active').removeClass('is-active');
    $(this).addClass('is-active');
    var filterOption01 = $('.js-filter01').find('.is-active').data('filter01');
    var filterOption02 = $('.js-filter02').find('.is-active').data('filter02');
    // console.log([filterOption01, filterOption02])

    $groupsLength = $groups.length;
    $groupsHideCount = 0;
    $groups.each(function (i) {
      $('.js-holder').children('.js-brand-content').each(function () {
        var prefectureFilter = $(this).data('list-filter01');
        var categoryFilter = $(this).data('list-filter02');
        var filter01 = prefectureFilter.indexOf(filterOption01) !== -1;
        var filter02 = categoryFilter.indexOf(filterOption02) !== -1;
        var apply = 0;
        if (filterOption01 === 'all' || filterOption01 === prefectureFilter || filter01 === true) {
          apply++;
        }
        if (filterOption02 === 'all' || filterOption02 === categoryFilter || filter02 === true) {
          apply++;
        }
        if (apply === 2) {
          $(this).addClass('current');
        } else {
          $(this).removeClass('current').hide();
        }
      });

      if ($(this).find('.current').length) {
        resetShowStatus($(this));
        $(this).show();
      } else {
        $(this).hide();
        $groupsHideCount++;
      }
    });
    if ($groupsLength === $groupsHideCount) {
      $('.js-text').show();
    } else {
      $('.js-text').hide();
    }

    var number = $('.current').length;
    $('.js-number').text(number).append('<span>件</span>');
  });

  function setButtons($group) {
    var $more = $group.find('.js-more-item');
    $more.on('click', function (e) {
      e.preventDefault();
      if ($group.find('.current').length) {
        $group.find('.current.-hidden:lt(' + showCount + ')').removeClass('-hidden').show();
        var remain = $group.find('.current.-hidden').length;
      } else {
        $group.find('.-hidden:lt(' + showCount + ')').removeClass('-hidden').show();
        var remain = $group.find('.-hidden').length;
      }
      if (!remain) {
        $more.hide();
      }
    });
  }

  function resetShowStatus($group) {
    if (!$group) return;
    if ($group.find('.current').length) {
      $group.find('.current:lt(' + showCount + ')').removeClass('-hidden').show();
      $group.find('.current:gt(' + (showCount - 1) + ')').addClass('-hidden').hide();
    } else {
      $group.find('.js-brand-content:lt(' + showCount + ')').removeClass('-hidden').show();
      $group.find('.js-brand-content:gt(' + (showCount - 1) + ')').addClass('-hidden').hide();
    }
    if (!$group.find('.-hidden').length) {
      $group.find('.js-more-item').hide();
    } else {
      $group.find('.js-more-item').show();
    }
    if ($group.find('.current').length >= 1 && $group.find('.current').length <= showCount) {
      $group.find('.js-more-item').hide();
    }
  }
});
// ▲絞り込み（Power Grid Activity Report）▲

// ▼画像の動き（私たちの約束）▼
$(function () {
  var fadeIn = $('.p-brand-promise__photo');
  $(window).on('load scroll resize', function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 300) {
        $(this).addClass('js-anime');
        $('.p-brand-promise__img02').addClass('js-anime');
      }
    });
  });
});
// ▲画像の動き（私たちの約束）▲

// ▼背景の動き（私たちの事業領域、私たちのサービス）▼
$(function () {
  $('.js-bg-dot').each(function () {
    $(this).animate({
      opacity: 1
    }, {
      duration: 1200,
      easing: 'swing'
    })
  });
  $(window).scroll(function () {
    $('.js-bg-dot-scroll').each(function () {
      var offsetTop = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > offsetTop - windowHeight + windowHeight / 2) {
        $(this).animate({
          opacity: 1
        }, {
          duration: 800,
          easing: 'swing'
        })
      }
    });
  });
});
// ▲背景の動き（私たちの事業領域、私たちのサービス）▲

// ▼スクロール画像の動き▼
if ($('.js-img-scroll').length) {
  $(window).on('load resize', function () {
    $('.js-scroll').addClass('is-active');
    $('.js-img-scroll').on('keydown', function () {
      $('.js-scroll').removeClass('is-active');
    });
  
    var ua = navigator.userAgent;
    if ((ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0) && ua.indexOf('Mobile') > 0) {
      $('.js-img-scroll').on('touchstart', function () {
        $('.js-scroll').removeClass('is-active');
      });
      $('.js-img-scroll').css({
        'overflow-y': 'auto',
        'cursor': 'auto'
      });
    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
      $('.js-img-scroll').on('touchstart', function () {
        $('.js-scroll').removeClass('is-active');
      });
      $('.js-img-scroll').css({
        'overflow-y': 'auto',
        'cursor': 'auto',
        'padding': '0 30px'
      });
    } else {
      $.fn.dragScroll = function () {
        let target = this;
        $(this).mousedown(function (event) {
          $('.js-scroll').removeClass('is-active');
          $(this)
            .data('down', true)
            .data('x', event.clientX)
            .data('y', event.clientY)
            .data('scrollLeft', this.scrollLeft)
            .data('scrollTop', this.scrollTop);
          return false;
        }).css({
          'overflow': 'scroll',
          'cursor': 'pointer'
        });
        $(document).mousemove(function (event) {
          if ($(target).data('down') == true) {
            target.scrollLeft($(target).data('scrollLeft') + $(target).data('x') - event.clientX);
            target.scrollTop($(target).data('scrollTop') + $(target).data('y') - event.clientY);
            return false;
          }
        }).mouseup(function (event) {
          $(target).data('down', false);
        });
        return this;
      }

      $(document).ready(function () {
        $('.js-img-scroll').dragScroll();
      });
    }
  });
}
// ▲スクロール画像の動き▲

// ▼数字で見るパワーグリッド▼
$('.js-show-chart').on('inview', function (event, isInView) {
  if (isInView) {
    var ctx = document.getElementById('js-chart').getContext('2d');
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        datasets: [{
          data: [75, 25],
          backgroundColor: [
            '#dcdcdc',
            '#9f9f9f'
          ],

          borderWidth: 0,
        }]
      },
      options: {
        events: [],
      }
    });
    $('#js-chart').fadeIn();
    $('.js-show-chart').parent().find('.js-chart-anime').fadeIn(1500);
  } else {
    $('#js-chart').fadeOut();
    $('.js-show-chart').parent().find('.js-chart-anime').fadeOut();
  }
});

$('.js-count').on('inview', function (event, isInView) {
  if (isInView) {
    $('.js-num', this).numerator({
      easing: 'linear',
      duration: 1050,
      toValue: $('.js-num', this).attr('data-num'),
      delimiter: ',',
      rounding: 0,
    });

    $(this).parent().parent().find('.js-arrow').addClass('is-active');
    $(this).parent().parent().find('.js-anime').addClass('is-active');
  } else {
    $(this).parent().parent().find('.js-arrow').removeClass('is-active');
    $(this).parent().parent().find('.js-anime').removeClass('is-active');
  }
});

$('.js-count-delay').on('inview', function (event, isInView) {
  if (isInView) {
    $('.js-show-list .js-show-item').css({
      opacity: 0
    }).each(function (i) {
      $(this).delay(300 * i).animate({
        opacity: 1
      }, 1000);
    });
    $('.js-num', this).numerator({
      easing: 'linear',
      duration: 1800,
      toValue: $('.js-num', this).attr('data-num'),
      delimiter: ',',
      rounding: 0,
    });
    $(this).find('.js-anime').addClass('is-active');
  } else {
    $(this).find('.js-anime').removeClass('is-active');
  }
});

$('.js-show-list--convenience-store').on('inview', function (event, isInView) {
  if (isInView) {
    $('.js-show-list--convenience-store .js-show-item').css({
      opacity: 0
    }).each(function (i) {
      $(this).delay(60 * i).animate({
        opacity: 1
      }, 1000);
    });
  }
});

$('.js-show-list--person').on('inview', function (event, isInView) {
  if (isInView) {
    $('.js-show-list--person .js-show-item').css({
      opacity: 0
    }).each(function (i) {
      $(this).delay(75 * i).animate({
        opacity: 1
      }, 1100);
    });
  }
});

$('.js-bicycle').on('inview', function (event, isInView) {
  if (isInView) {
    $(this).find('.js-anime-bicycle').addClass('is-active');
    var count = 0;
    $('.js-anime-bicycle').on('animationend', function () {
      if ($(this).attr('data-order') === 'left') {
        $(this).attr('data-order', 'right');
        $(this).children('img').attr('src', '/communicationsite/common/img/number-img_19.png');
      } else {
        $(this).attr('data-order', 'left');
        $(this).children('img').attr('src', '/communicationsite/common/img/number-img_19_reversal.png');
        count = count + 1;
        if (count > 2) {
          $(this).off();
        }
      }
    });
  } else {
    $('.js-anime-bicycle').attr('data-order', 'right');
    $('.js-anime-bicycle').children('img').attr('src', '/communicationsite/common/img/number-img_19.png');
    $(this).find('.js-anime-bicycle').removeClass('is-active');
  }
});
// ▲数字で見るパワーグリッド▲

// ▼ImageMaps▼
$(function () {
  if ($('img[usemap]').length) {
    $('img[usemap]').rwdImageMaps();
  }
});
// ▲ImageMaps▲

// ▼modal▼
  $(function () {
    if ($('.js-brand-modal--open').length) {
      $('.js-brand-modal--open').each(function () {
        $(this).on('click', function () {
          var target = $(this).data('target');
          var modal = document.getElementById(target);
          $(modal).fadeIn();
          return false;
        });
      });
      $('.js-brand-modal--close').on('click', function () {
        $('.js-brand-modal').fadeOut();
        return false;
      });
    }
  });
  $(window).on('load resize', function () {
    if ($('.js-brand-modal--open').length) {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  });
// ▲modal▲
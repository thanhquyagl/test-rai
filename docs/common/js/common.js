/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readyDeviceWidth = undefined;

__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

__webpack_require__(19);

__webpack_require__(20);

__webpack_require__(21);

__webpack_require__(22);

__webpack_require__(23);

__webpack_require__(26);

__webpack_require__(27);

__webpack_require__(28);

__webpack_require__(29);

__webpack_require__(31);

__webpack_require__(32);

__webpack_require__(33);

// Global variables
var display_mode = 'w'; // "w" or "n"
/**
 * @file 全ページ共通で使用するjsファイル
 *
*/

var resize_eventname = 'resize'; // "resize" or "orientationchange"
var device = 'pc'; // "pc" or "sp"
var touch_device = false;
var user_agent = window.navigator.userAgent.toLowerCase();
/* prettier-ignore */
if (user_agent.match(/(iphone|iPhone)/) > 0 && user_agent.match(/(ipad|iPad)/) == -1 || user_agent.match(/(ipod|iPod)/) > 0 || user_agent.match(/(android|Android)/) > 0) {
  resize_eventname = 'orientationchange';device = 'sp';
}
if (window.ontouchstart === null) {
  touch_device = true;
}

/* ---------------------- function ---------------------- */

/* set_display_mode -------------------- */

function set_display_mode() {
  var break_point = 767;
  display_mode = $(window).innerWidth() <= break_point ? 'n' : 'w';
}

/* ---------------------- DOM_ready ---------------------- */

$(function () {

  'user strict';

  if (touch_device) {
    $('body').addClass('touch');
  }

  /* resize_event -------------------- */

  var resize_event = function resize_event() {
    set_display_mode();
  };
  resize_event();
  $(window).on('load ' + resize_eventname, resize_event);

  /* IE,Edgeでのカクつき対応 -------------------- */
  if (navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
    $('body').on('mousewheel', function () {
      event.preventDefault();
      var wd = event.wheelDelta;
      var csp = window.pageYOffset;
      window.scrollTo(0, csp - wd);
    });
  }
  if (navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./)) {
    // 大カテゴリ メインビジュアルを背景画像に変換（IEのみ）
    $('.p-lead__figure .p-lead__img').each(function () {
      var imgSrc = $(this).attr('src');
      if ($(this).attr('class').indexOf('u-opacity') === -1) {
        $(this).closest('.p-lead__figure').css({
          'background-image': 'url(' + imgSrc + ')',
          'background-size': 'cover'
        }).closest('.p-lead--opacity').css({ 'background-color': '#000' });
      }
    });
  }

  // footer menu
  $('.l-group-footer-link__link').on('click', function () {
    if (display_mode === 'n') {
      $(this).toggleClass('is-open');
      $(this).parent('.l-group-footer-link__logo').siblings('.l-group-footer-menu').stop(true, false).slideToggle(250);
      $("html,body").animate({ scrollTop: $(this).offset().top });
      return false;
    }
  });

  // header menu
  $('.sp-header__menu-wrap').on('click', function () {
    $('.l-header-link').toggleClass('open');
    $('.l-group-header').toggleClass('open');
    setTimeout(function () {
      if ($('.l-header-nav').hasClass('is-active')) {
        $('.l-header').css('height', '100%');
        $('.l-header-top').addClass('is-active');
      } else {
        $('.l-header').css('height', 'auto');
        $('.l-header-top').removeClass('is-active');
      }
    }, 100);
  });

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

  /* sp_menu -------------------- */

  // Hamburger
  if (display_mode === 'n') {
    var st;
    var timer;
    $('.sp-header__menu-wrap').on('click', function () {
      clearTimeout(timer);
      if ($('.sp-header__menu').hasClass('btn-open')) {
        $('#wrapper').css({ 'position': 'static' });
        $('body,html').stop(true, false).animate({ scrollTop: st }, 0, 'swing');
      } else {
        st = $(window).scrollTop();
        timer = setTimeout(function () {
          $('#wrapper').css({ 'position': 'fixed' });
        }, 100);
      }
      $('.overlay').stop().fadeToggle();
      $('.sp-header__menu').stop().toggleClass('btn-open').stop().toggleClass('btn-close');
      $('.l-header-nav').stop().toggleClass('is-active');
      $('body').stop().toggleClass('oh-open');
    });

    $('.local_list').hide();
    $('.local_nav__in h1').on('click', function () {
      clearTimeout(timer);
      $('.local_nav__menu').stop().toggleClass('btn-open').stop().toggleClass('btn-close');
      $('.local_list').slideToggle(300);
      $(this).toggleClass('is-active');
    });

    $('.hamaoka_menu__nav').hide();
    $('.hamaoka_menu__ttl').on('click', function () {
      clearTimeout(timer);
      $('.hamaoka_nav__menu').stop().toggleClass('btn-open').stop().toggleClass('btn-close');
      $('.hamaoka_menu__nav').slideToggle(300);
    });
    $('.js-l-header-nav__item').on('click', function () {
      $(this).parent('li').toggleClass('is-open');
    });
  }
  $('.spheader-group__item__title--toggle').on('click', function () {
    $(this).toggleClass('is-open').next().stop().slideToggle();
  });

  // ページ内リンクが存在する場合
  if (display_mode === 'n') {
    $(".l-header-nav__link[href^='#']").on('click', function () {
      $('body').attr('class', '');
      $('.sp-header__menu').stop().removeClass('btn-open');
      $('.sp-header__menu').stop().addClass('btn-close');
      $('.l-header-nav').stop().removeClass('is-active');
      $('.overlay').stop().fadeOut();
      $('body').removeClass('oh-open');
    });
  }

  // 印刷ボタン
  $('.js-print').on('click', function () {
    window.print();
    return false;
  });

  // 要素を非表示
  $('.js-cut').css({ 'cursor': 'pointer' });
  $('.js-cut').on('click', function () {
    var targetElm = $($(this).data('cut'));
    targetElm.slideUp(300);
  });
}); // ready event ___/

var readyDeviceWidth = exports.readyDeviceWidth = window.innerWidth;
var setResize = false;
$(window).on('resize', function () {
  if (setResize !== false) {
    clearTimeout(setResize);
  }
  setResize = setTimeout(function () {
    exports.readyDeviceWidth = readyDeviceWidth = window.innerWidth;
  }, 600);
});

// 印刷画面の<h1>の表示or非表示を制御用のclassを付与
var pLeadTitle = $('.p-lead--other .p-lead__title').text();
var pLeadSubtitle = $('.p-lead__subtitle').text();
if (pLeadTitle == pLeadSubtitle) {
  $('.p-lead').addClass('noPrint');
  $('.l-contents .l-main').addClass('noPrint');
};

// headerメニューフェードインの修正（PCのみ）
if (device === 'pc') {
  var moFlag = [];
  $('.l-header-nav__link').each(function (i) {
    moFlag[i] = true;
    headerMeFunc($(this), moFlag[i]);
  });
  $('.l-header-drop__item-in').each(function (i) {
    headerMlFunc($(this), moFlag[i]);
  });
}

function headerMeFunc(elm, flag) {
  elm.on({
    'mouseenter.mEnt': function mouseenterMEnt(e) {
      // e.stopPropagation();
      if (elm.hasClass('l-header-nav__item')) {
        if (elm.hasClass('leaveNow') && flag === true) {
          elm.removeClass('leaveNow');
        }
      } else {
        if (elm.parents('.l-header-nav__item').hasClass('leaveNow') && flag === true) {
          elm.parents('.l-header-nav__item').removeClass('leaveNow');
        }
        // console.log(flag);
      }
      return false;
    }
  });
}
function headerMlFunc(elm, flag) {
  elm.on({
    'mouseleave.mLev': function mouseleaveMLev(e) {
      // e.stopPropagation();
      // console.log('leave');
      if (elm.hasClass('l-header-nav__item')) {
        elm.addClass('leaveNow');
      } else {
        elm.parents('.l-header-nav__item').addClass('leaveNow');
      }
      flag = false;
      // console.log(flag);
      return false;
    }
  });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @file URLパラメータ「?scroll=id」と「id」が一致したらtab or accordionを開く
 *
*/

if ($('.js-accd-module').length) {
    $('.js-accd-module').each(function () {
        var $this = $(this);
        var $thisOpen = 'is-open';
        var $thisActive = 'is-active';
        var $thisBtnAccd = $this.find('.js-accd-btn');
        var $thisCont = $this.find('.js-accd-content');
        $thisBtnAccd.css({ 'cursor': 'pointer' });
        if ($this.data('open') !== undefined) {
            if ($this.hasClass($thisOpen)) {
                $thisBtnAccd.addClass($thisActive);
                $thisCont.slideDown(10);
            }
        }
        $thisBtnAccd.on('click', function () {
            if (!$this.hasClass($thisOpen)) {
                $this.addClass($thisOpen + ' ' + $thisActive);
                $thisBtnAccd.addClass($thisActive);
                $thisCont.slideDown(200);
            } else {
                $this.removeClass($thisOpen + ' ' + $thisActive);
                $thisBtnAccd.removeClass($thisActive);
                $thisCont.slideUp(200);
            }
        });
    });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _variables = __webpack_require__(3);

var $window = $(window); /**
                          * @file アコーディオン
                          *
                         */

var $accordion = $('.js-accordion');
var speed = 300; // 開閉スピード

function responsiveAccordion() {
  $accordion.each(function (index, element) {
    var $this = $(element);
    var $target = $this.next();
    var targetHeight = $target.children().outerHeight();
    if ($this.hasClass(_variables.activeClass)) {
      $target.css('max-height', targetHeight);
    }
  });
}

$window.on('resize', function () {
  responsiveAccordion();
});

$accordion.on('click', function (event) {

  // デフォルトの挙動を無効化
  event.preventDefault();

  var $this = $(event.currentTarget);
  var $target = $this.next();
  var targetHeight = $target.children().outerHeight();

  // data-accordionが指定されていたらグループ化
  var group = $this.attr('data-group');
  if (group) {
    if ($this.hasClass(_variables.activeClass)) {
      $this.removeClass(_variables.activeClass);
      $target.removeAttr('style');
    } else {
      $('[data-group="' + group + '"]').removeClass(_variables.activeClass).next().removeAttr('style');
      $this.addClass(_variables.activeClass);
      $target.css('max-height', targetHeight);
    }
  } else {
    // クリックする度にclassを付与/除去
    $this.toggleClass(_variables.activeClass);
    // 次の要素にmax-heightを与える
    if ($this.hasClass(_variables.activeClass)) {
      $target.css('max-height', targetHeight);
    } else {
      $target.removeAttr('style');
    }
  }
});

var target03 = $('.l-main').offset().top - 20;

$('.js-accordion03__switch').on('click', function () {
  $('body,html').animate({ scrollTop: target03 }, 400);
  $('.c-button').toggleClass('u-dn');
  $('.js-accordion03__item').slideToggle();
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file グローバル変数を定義
 *
*/

// ユーザーエージェント
var ua = exports.ua = navigator.userAgent;

// コンテンツサイズ
var contentsSize = exports.contentsSize = 1000;

// ブレイクポイント
var breakpointMd = exports.breakpointMd = 768;

// デバイス判定
var mqMd = exports.mqMd = window.matchMedia('(min-width:' + breakpointMd + 'px)');
var mqMdDown = exports.mqMdDown = window.matchMedia('(max-width:' + breakpointMd - 1 + 'px)');
var isMq = exports.isMq = mqMd.matches ? 'pc' : 'sp';
var isMqMd = exports.isMqMd = isMq === 'pc' ? true : false;
var isMqMdDown = exports.isMqMdDown = isMq === 'sp' ? true : false;

// アクティブクラス
var activeClass = exports.activeClass = 'is-active';

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @file 特定のページでのみ利用するスクリプト
 */

// 浜岡原発　外観図へのマーカープロット
var $markerField = $('.c-icon--marker-field');
if ($markerField.length) {
	$(window).on('load', function () {
		var fieldWidth = $markerField.find('img').css('width');
		var fieldHeight = $markerField.find('img').css('height');
		var iconSize = parseInt(fieldWidth) / 20 + 'px';
		var fontSize = parseInt(fieldWidth) / 48 + 'px';
		var markerSize = parseInt(fieldWidth) / 10 + 'px';

		$markerField.css({ 'width': fieldWidth, 'height': fieldHeight });
		$('.c-icon--marker').css({
			'width': iconSize,
			'height': iconSize,
			'font-size': fontSize
		});
		$('.c-icon--marker::before').css('font-size', markerSize);

		$('.c-icon--marker').each(function () {
			var positionTop = $(this).data('top');
			var positionLeft = $(this).data('left');
			$(this).css({
				'top': positionTop,
				'left': positionLeft
			});
		});
	});
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @file URLとhrefが一致したらclass付与
 *
*/

var $current = $('.js-current');

$current.each(function (index, element) {

  var $this = $(element);
  // URLとhrefを比較
  if (location.pathname.match($this.attr('href'))) {
    // 一致したらclass付与
    $this.addClass('is-current');
  }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @file URLパラメータ「?scroll=id」と「id」が一致したらtab or accordionを開く
 *
*/

$('#filterOption li a').click(function (e) {
    e.preventDefault();
    $(this).closest("ul").find(".is-active").removeClass('is-active');
    // update the active state on our clicked button
    $(this).addClass('is-active');
    var ourYear = $("#filterYear").find(".is-active").data('year');
    var ourSlug = $("#filterSlug").find(".is-active").data('slug');

    $("#ourHolder").children("li").each(function () {
        var newsYear = $(this).data('list-year');
        var newsSlug = $(this).data('list-slug');
        if (ourYear === newsYear && ourSlug === newsSlug || ourYear === "all" && ourSlug === newsSlug || ourYear === newsYear && ourSlug === "all" || ourYear === "all" && ourSlug === "all") {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});

$('#filterOption2 li a').click(function (e) {
    e.preventDefault();
    $(this).closest("ul").find(".is-active").removeClass('is-active');
    // update the active state on our clicked button
    $(this).addClass('is-active');
    var ourFilter01 = $("#filter01").find(".is-active").data('filter01');
    var ourFilter02 = $("#filter02").find(".is-active").data('filter02');

    $("#ourHolder2").children("li").each(function () {
        var newsFilter01 = $(this).data('list-filter01');
        var newsFilter02 = $(this).data('list-filter02');
        if (ourFilter01 === newsFilter01 && ourFilter02 === newsFilter02 || ourFilter01 === "all" && ourFilter02 === newsFilter02 || ourFilter01 === newsFilter01 && ourFilter02 === "all" || ourFilter01 === "all" && ourFilter02 === "all") {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _objectFitPolyfill = __webpack_require__(8);

var _objectFitPolyfill2 = _interopRequireDefault(_objectFitPolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $window = $(window); /**
                          * @file object-fitのpolyfill
                          * https://github.com/constancecchen/object-fit-polyfill
                         */

var elements = document.querySelectorAll('.js-fit');

$window.on('load resize', function () {
  objectFitPolyfill(elements);
});

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _variables = __webpack_require__(3);

var $window = $(window); /**
                          * @file 表示領域に入ったらclass付与
                          *
                         */

var $inview = $('.js-inview');

$window.on('load scroll', function (event) {

  $inview.each(function (index, element) {

    var $this = $(element);

    var positionTop = $this.offset().top;
    var scroll = $window.scrollTop();
    var windowHeight = $window.height();
    var set = scroll > positionTop - windowHeight;

    if (set) {
      $this.addClass(_variables.activeClass);
    } else {
      $this.removeClass(_variables.activeClass);
    }
  });
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _modaal = __webpack_require__(11);

var _modaal2 = _interopRequireDefault(_modaal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//インライン
$('.js-modal').modaal();

//画像
/**
 * @file モーダルウィンドウ
 * https://github.com/humaan/Modaal
*/

$('.js-modal-img').modaal({
  type: 'image'
});

//ajax
$('.js-modal-ajax').modaal({
  type: 'ajax'
});

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _variables = __webpack_require__(3);

var $more = $('.js-more'); /**
                            * @file もっと見る
                            *
                           */

$more.on('click', function (event) {

  // デフォルトの挙動を無効化
  event.preventDefault();

  var $this = $(event.currentTarget),
      $target = $($this.attr('href')),
      $targetChild = $target.children(),
      $targetActiveChild = $target.children('.' + _variables.activeClass),
      $targetChildShow = $target.children(':lt(' + showCnt + ')'),
      addCnt = parseInt($this.attr('data-more')),
      cnt = $targetChild.length,
      activeCnt = $targetActiveChild.length,
      showCnt = addCnt + activeCnt;

  if (addCnt) {
    if (cnt <= showCnt) {
      $this.hide();
      $targetChildShow.addClass(_variables.activeClass);
    } else {
      $targetChildShow.addClass(_variables.activeClass);
    }
  } else {
    $this.hide();
    $targetChild.addClass(_variables.activeClass);
  }
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @file ニュース・プレスリリース
 */

$('.p-card-05__text--tag p').each(function () {
	if ($(this).text() == 'キャンペーン') {
		$(this).parent().css('background', '#bb67c7');
	} else if ($(this).text() == 'イベント') {
		$(this).parent().css('background', '#f19149');
	} else if ($(this).text() == 'スポーツ') {
		$(this).parent().css('background', '#00b7ee');
	} else if ($(this).text() == 'CM・動画') {
		$(this).parent().css('background', '#ff0000');
	} else if ($(this).text() == 'その他') {
		$(this).parent().css('background', '#009944');
	};
});
// 暫定措置
$('.js-sort').on('change', function () {
	var period = $(this).val();
	if (period == '2020') {
		$('.p-info-date, article').css('display', 'block');
	} else if (period == '2021') {
		$('.p-info-date, article').css('display', 'none');
		$('.p-info-date[data-year="' + period + '"], article[data-year="' + period + '"]').css('display', 'block');
	};
});

//selectedされたページに遷移
$("#js-select-press").change(function () {
	window.location.href = '/news/press/press_' + $("#js-select").val() + '.html';
});
$("#js-select-topics").change(function () {
	window.location.href = '/news/topics/topics_' + $("#js-select").val() + '.html';
});

//selected付与
$(document).ready(function () {
	var $selectyear = $("#js-select").val(),
	    pathname = location.pathname,
	    $selectyear = pathname.match(/\d+/g);
	if (document.URL.match($selectyear)) {
		$('select').val($selectyear);
	}
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @file URLパラメータ「?scroll=id」と「id」が一致したらtab or accordionを開く
 *
*/

var $window = $(window);
var hash = location.hash;
var loaded = 'is-loaded';

$window.on('load', function () {

  //ロードが完了したらclass付与
  $('body').addClass(loaded);

  var key = '?scroll=';
  var $url = $(location).attr('href');

  if ($url.indexOf(key) != -1) {
    var id = $url.split(key);
    var target = '#' + id[id.length - 1];

    //アコーディオンカレント
    $(target + '.js-accordion').click();

    //タブカレント
    $('.js-tab-navi a[href="' + target + '"]').click();
  }
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _variables = __webpack_require__(3);

var $window = $(window); /**
                          * @file スクロールしたらclass付与
                          *
                         */

var $pagetop = $('.js-pagetop');

$window.on('load scroll', function (event) {

  $pagetop.each(function (index, element) {
    var $this = $(element);
    if ($window.scrollTop() > 100) {
      // スクロール量が100を超えたらclass付与
      $this.addClass(_variables.activeClass);
    } else {
      // スクロール量が100を超えていなかったらclass除去
      $this.removeClass(_variables.activeClass);
    }

    var scrollHeight = $(document).height(); //ドキュメントの高さ
    var scrollPosition = $(window).height() + $(window).scrollTop(); //現在地
    var footHeight = $(".l-footer-wrap").innerHeight() - 40; //footerの高さ（＝止めたい位置）
    if (scrollHeight - scrollPosition <= footHeight) {
      //ドキュメントの高さと現在地の差がfooterの高さ以下になったら
      $(".p-pagetop").css({
        "position": "absolute", //positionをabsolute（親：wrapperからの絶対値）に変更
        "bottom": footHeight + 20 //下からfooterの高さ + 20px上げた位置に配置
      });
    } else {
      //それ以外の場合は
      $(".p-pagetop").css({
        "position": "fixed",
        "bottom": "20px"
      });
    }
  });
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _picturefill = __webpack_require__(17);

var _picturefill2 = _interopRequireDefault(_picturefill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _picturefill2.default)(); /**
                               * @file pictureタグのpolyfill
                               * http://scottjehl.github.io/picturefill/
                              */

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _variables = __webpack_require__(3);

// PCイベント
//if(isMqMd){
//  console.log(isMq)
//}

// SPイベント
//if(isMqMdDown){
//  console.log(isMq)
//}

// レスポンシブイベント
function responsive() {
  if (_variables.mqMd.matches) {
    // PCイベント
    console.log('pc');
  } else {
    // SPイベント
    console.log('sp');
  }
}
//responsive();
//mqMd.addListener(responsive);
/**
 * @file ブレイクポイントで動作出し分け
*/

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _variables = __webpack_require__(3);

var $window = $(window); /**
                          * @file スムーススクロール
                          *
                         */

var $scroll = $('.js-scroll');
var $scroll2 = $('.js-scroll2');
var speed = 400; // スクロールの速度
var $pcFixedHeight = 0; // PCで固定ヘッダーがない場合は0、ある場合は$('.class')を指定
var $spFixedHeight = $('.l-header'); // SPで固定ヘッダーがない場合は0、ある場合は$('.class')を指定

//クリックした時にスムーススクロール
$scroll.on('click', function (event) {

  // デフォルトの挙動を無効化
  event.preventDefault();

  var $this = $(event.currentTarget);

  // 移動先IDを取得
  var href = $this.attr('href');

  // 移動先を取得
  var $target = $(href === '#' || href === '' ? 'html' : href);

  scrollFunc($target);
});

//クリックした時にスムーススクロール2
$scroll2.on('click', function (event) {

  // デフォルトの挙動を無効化
  event.preventDefault();

  var $this = $(event.currentTarget);

  // 移動先IDを取得
  var href = $this.attr('href');

  // 移動先を取得
  var $target = $(href === '#' || href === '' ? 'html' : href);

  scrollFunc2($target);
});

//ページ外アンカーの時の固定ヘッダーのズレ解消してスクロール
$window.on('load', function (event) {

  var key = '?scroll=';
  var $url = $(location).attr('href');

  if ($url.indexOf(key) != -1) {

    var id = $url.split(key);
    var $target = $('#' + id[id.length - 1]);

    if ($target.length) {

      if ($target.hasClass('js-tab-block')) {
        var $targetParent = $target.closest('.js-tab');
        scrollFunc($targetParent);
      } else {
        scrollFunc($target);
      }
    }
  }
});

// 指定要素までアニメーションでスクロールさせる
function smoothScroll(position) {
  $('body,html').animate({ scrollTop: position }, speed, 'swing');
}

// スムーススクロールを実行
function scrollFunc($target, position) {
  // 移動先を数値で取得
  if (window.innerWidth < _variables.breakpointMd) {
    //SP指定
    if ($spFixedHeight != 0) {
      var _position = $target.offset().top - $spFixedHeight.outerHeight() - 20;
      smoothScroll(_position);
    } else {
      var _position2 = $target.offset().top;
      smoothScroll(_position2);
    }
  } else {
    //PC指定
    if ($pcFixedHeight != 0) {
      var _position3 = $target.offset().top - $pcFixedHeight.outerHeight();
      smoothScroll(_position3);
    } else {
      var _position4 = $target.offset().top - 40;
      smoothScroll(_position4);
    }
  }
}

// スムーススクロールを実行 2
function scrollFunc2($target, position) {
  // 移動先を数値で取得
  if (window.innerWidth < _variables.breakpointMd) {
    //SP指定
    if ($spFixedHeight != 0) {
      var _position5 = $target.offset().top - $spFixedHeight.outerHeight() - 15;
      smoothScroll(_position5);
    } else {
      var _position6 = $target.offset().top;
      smoothScroll(_position6);
    }
  } else {
    //PC指定
    if ($pcFixedHeight != 0) {
      var _position7 = $target.offset().top - $pcFixedHeight.outerHeight();
      smoothScroll(_position7);
    } else {
      var _position8 = $target.offset().top - 5;
      smoothScroll(_position8);
    }
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @file 検索フォーム用
 */

var classes = {
  's': 'small',
  'm': 'middle',
  'l': 'large'
};
$(".p-search__option__size--input input").on("change", function () {
  var key = $(this).val();
  $(".p-flag--002__hero, .p-flag--002__body").removeClass('small middle large').addClass(classes[key]);
});
$('.p-sort__input--item').on('change', function () {
  var checkedId = $(this).attr('id');
  $('.p-sort__labels__item--label').removeClass('active');
  $('.p-sort__labels__item--label[for="' + checkedId + '"]').addClass('active');
});

// 暫定措置（ページャ）
if ($('.p-pager--002__item li:first-of-type').hasClass('is-active')) {
  $('.p-pager--002__item[data-position="left"] .p-pager--002__item--link').css('display', 'none');
}
if ($('.p-pager--002__item li:last-of-type').hasClass('is-active')) {
  $('.p-pager--002__item[data-position="right"] .p-pager--002__item--link').css('display', 'none');
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @file URLパラメータ「?scroll=id」と「id」が一致したらtab or accordionを開く
 *
*/
$(function () {
    loadMore();
    loadLess();
    fiterYear();
});

var loadMore = function loadMore() {
    var $this = $("#ourHolder li");
    var numberList = $this.length;
    $("#buttonLess").hide();
    if (numberList > 10) {
        $("#ourHolder li:gt(9)").hide();
        $("#buttonMore").show();
    } else {
        $("#buttonMore").hide();
    }
    $("#buttonMore").on("click", function (e) {
        e.preventDefault();

        var ourYear = $("#filterYear").find(".is-active").data('year');
        var ourSlug = $("#filterSlug").find(".is-active").data('slug');
        var count = 0;
        var remain = false;

        // show next 10 items
        $('#ourHolder li:hidden').each(function () {
            var newsYear = $(this).data('list-year');
            var newsSlug = $(this).data('list-slug');

            if (ourYear === newsYear && ourSlug === newsSlug || ourYear === "all" && ourSlug === newsSlug || ourYear === newsYear && ourSlug === "all" || ourYear === "all" && ourSlug === "all") {
                count++;
                if (count <= 10) {
                    $(this).show();
                } else if (count > 10) {
                    remain = true;
                    return false;
                }
            }
        });

        if (!remain) {
            $("#buttonLess").show();
            $("#buttonMore").hide();
        }
    });
};

var loadLess = function loadLess() {
    var p = $("#ourHolder").height();
    $("#buttonLess").on("click", function (e) {
        e.preventDefault();
        $("#ourHolder li:visible:gt(9)").hide();
        $("#buttonLess").hide();
        $("#buttonMore").show();
        window.scrollTo(500, 500);
    });
};
var fiterYear = function fiterYear() {
    $("#filterOption a").on("click", function (e) {
        e.preventDefault();
        var $this = $("#ourHolder li:visible");
        var numberList = $this.length;
        $("#buttonMore").hide();
        $("#buttonLess").hide();
        if (numberList > 10) {
            $("#ourHolder li:visible:gt(9)").hide();
            $("#buttonMore").show();
        }
    });
};

$(function () {
    loadMore2();
    loadLess2();
    fiterYear2();

    if (document.URL.match('/index_boat')) {
        $('.p-extract__button[data-filter01="ボート部"]').trigger('click');
    } else if (document.URL.match('/index_rugby')) {
        $('.p-extract__button[data-filter01="ラグビー部"]').trigger('click');
    } else if (document.URL.match('/index_curling')) {
        $('.p-extract__button[data-filter01="カーリング部"]').trigger('click');
    } else if (document.URL.match('/index_other')) {
        $('.p-extract__button[data-filter01="その他"]').trigger('click');
    };
});

var loadMore2 = function loadMore2() {
    var $this2 = $('#ourHolder2 li');
    var numberList2 = $this2.length - 3;
    $("#buttonLess2").hide();
    if (numberList2 > 8) {
        $("#ourHolder2 li:gt(7)").hide();
        $("#buttonMore2").show();
    }
    $("#buttonMore2").on("click", function (e) {
        e.preventDefault();

        var ourFilter01 = $("#filter01").find(".is-active").data('filter01');
        var ourFilter02 = $("#filter02").find(".is-active").data('filter02');
        var count2 = 0;
        var remain2 = false;

        // show next 8 items
        $('#ourHolder2 li:hidden').each(function () {
            var newsFilter01 = $(this).data('list-filter01');
            var newsFilter02 = $(this).data('list-filter02');

            if (ourFilter01 === newsFilter01 && ourFilter02 === newsFilter02 || ourFilter01 === "all" && ourFilter02 === newsFilter02 || ourFilter01 === newsFilter01 && ourFilter02 === "all" || ourFilter01 === "all" && ourFilter02 === "all") {
                count2++;
                if (count2 <= 8) {
                    $(this).show();
                } else if (count2 > 8) {
                    remain2 = true;
                    return false;
                }
            }
        });

        if (!remain2) {
            $("#buttonLess2").show();
            $("#buttonMore2").hide();
        }
    });
};

var loadLess2 = function loadLess2() {
    var p = $("#ourHolder2").height();
    if ($('.l-main__in').length) {
        if ($(window).width() < 768) {
            var backPoint = $('.l-main__in').offset().top - 90;
        } else {
            var backPoint = $('.l-main__in').offset().top - 35;
        };
    };
    $("#buttonLess2").on("click", function (e) {
        e.preventDefault();
        $("#ourHolder2 li:visible:gt(7)").hide();
        $("#buttonLess2").hide();
        $("#buttonMore2").show();
        window.scrollTo(500, backPoint);
    });
};
var fiterYear2 = function fiterYear2() {
    $("#filterOption2 a").on("click", function (e) {
        e.preventDefault();
        var $this2 = $("#ourHolder2 li:visible");
        var numberList2 = $this2.length - 3;
        $("#buttonMore2").hide();
        $("#buttonLess2").hide();
        if (numberList2 > 8) {
            $("#ourHolder2 li:visible:gt(7)").hide();
            $("#buttonMore2").show();
        }
    });
};

$(function () {
    loadMore3();
    loadLess3();
});

var loadMore3 = function loadMore3() {
    var $this3 = $('#ourHolder3 li');
    var numberList3 = $this3.length - 3;
    $("#buttonLess3").hide();
    if (numberList3 > 12) {
        $("#ourHolder3 li:gt(11)").hide();
        $("#buttonMore3").show();
    }
    $("#buttonMore3").on("click", function (e) {
        e.preventDefault();

        var count3 = 0;
        var remain3 = false;

        // show next 12 items
        $('#ourHolder3 li:hidden').each(function () {
            count3++;
            if (count3 <= 12) {
                $(this).show();
            } else if (count3 > 12) {
                remain3 = true;
                return false;
            }
        });

        if (!remain3) {
            $("#buttonLess3").show();
            $("#buttonMore3").hide();
        }
    });
};

var loadLess3 = function loadLess3() {
    var p = $("#ourHolder3").height();
    if ($('.l-main__in').length) {
        if ($(window).width() < 768) {
            var backPoint = $('.l-main__in').offset().top - 75;
        } else {
            var backPoint = $('.l-main__in').offset().top;
        };
    };
    $("#buttonLess3").on("click", function (e) {
        e.preventDefault();
        $("#ourHolder3 li:visible:gt(11)").hide();
        $("#buttonLess3").hide();
        $("#buttonMore3").show();
        window.scrollTo(500, backPoint);
    });
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slick = __webpack_require__(24);

var _slick2 = _interopRequireDefault(_slick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$('.js-slider').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 800,
  appendDots: $('.p-slider__nav'),
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 768, //767px以下のサイズに適用
    settings: {
      slidesToShow: 1
    }
  }]
}); /**
     * @file スライダー
     * http://kenwheeler.github.io/slick/
    */

$('.js-slider-02').slick({
  dots: true,
  appendDots: $('.p-slider-02__nav'),
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 768, //767px以下のサイズに適用
    settings: {
      slidesToShow: 1
    }
  }]
});

$('.js-slider-03').slick({
  accessibility: false,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 400,
  cssEase: 'ease',
  fade: true,
  arrows: false,
  dots: true,
  appendDots: $('.p-slider-03__nav')
});

$('.js-slider-04').slick({
  autoplay: false,
  autoplaySpeed: 3000,
  speed: 400,
  cssEase: 'ease',
  dots: true,
  appendDots: $('.p-slider-04__nav'),
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '10%',
  responsive: [{
    breakpoint: 1025, //768～1024pxのサイズに適用
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: false,
      centerPadding: '0%'
    }
  }, {
    breakpoint: 768, //767px以下のサイズに適用
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      centerPadding: '0%'
    }
  }]
});

// 余白計算（PC）
var paddingCalc = 100 / 1300 * 100;
paddingCalc = paddingCalc.toString();
paddingCalc = paddingCalc + '%';
// fadeのオプション切り替え
var fssLength = $('.js-slider-05.fullscreenSlide').length;
var opFade = fssLength ? true : false;
var opArrows = fssLength ? false : true;
var opCenterMode = fssLength ? false : true;
var opCenterPadding = fssLength ? '0px' : paddingCalc;
// slider初期化後loader削除とIEのfade対策
$('.js-slider-05').on('init', function () {
  $('.loader').remove();
  $(this).closest('.p-slider-05').css('opacity', '1').closest('.top-main-slider').height('auto');
  $(this).parents('.p-slider-05-wrap').css({ 'background-color': 'transparent' });
  if (fssLength && $(this).parents('.p-lead02').length) {
    //$(this).parents('.p-lead__in').css({'position' : 'relative'});
    $(this).parents('.js-slider__box').css({ 'position': 'relative' });
    if ($(this).find('.onSlide').length) {
      $(this).find('.onSlide').css({ 'opacity': '0' });
      $(this).find('.onSlide').each(function () {
        $(this).parents('.p-slider-05__item').css({
          'background': 'url(' + $(this).attr('src') + ') no-repeat center',
          'background-size': 'cover'
        });
      });
    }
  }
});

$('.js-slider-05').slick({
  fade: opFade,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 800,
  appendDots: $('.p-slider-05__nav'),
  arrows: opArrows,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
  centerMode: opCenterMode,
  centerPadding: opCenterPadding,
  responsive: [{
    breakpoint: 768, //767px以下のサイズに適用
    settings: {
      centerMode: false
    }
  }]
});

$('.js-slider-06').slick({
  autoplay: false,
  autoplaySpeed: 5000,
  speed: 800,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  slidesToShow: 2,
  slidesToScroll: 2,
  variableWidth: true,
  responsive: [{
    breakpoint: 768, //767px以下のサイズに適用
    settings: {
      variableWidth: false,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
$('.slider-autoslide').slick('slickSetOption', 'autoplay', true, true);

$('.c-tag-02 p').each(function () {
  if ($(this).text() == 'キャンペーン') {
    $(this).parent().css('background', '#bb67c7');
  } else if ($(this).text() == 'イベント') {
    $(this).parent().css('background', '#f19149');
  } else if ($(this).text() == 'スポーツ') {
    $(this).parent().css('background', '#00b7ee');
  } else if ($(this).text() == 'CM・動画') {
    $(this).parent().css('background', '#ff0000');
  } else if ($(this).text() == 'その他') {
    $(this).parent().css('background', '#009944');
  };
});

// 一時停止ボタンを準備
var pause = $('<button class="p-slider__pause"><span></span><span></span></button>');

// ページ送りの前に追加
pause.insertBefore('.slick-dots');

// 切り替えフラグを準備
var flg = "play";

// ボタンをクリックした時の処理
$('.p-slider__pause').on('click', function () {
  // フラグの条件でボタンの切り替えと再生・停止の処理
  if (flg == "play") {
    $(this).addClass('is-active');
    flg = "stop";
    $('.js-slider,.js-slider-05').slick('slickPause');
  } else {
    $(this).removeClass('is-active');
    flg = "play";
    $('.js-slider,.js-slider-05').slick('slickPlay');
  }
});

// slider06の画像幅の自動調整

var slickListWidth = parseInt($('.slick-list').width());
if (slickListWidth >= 1240) {
  var slickListWidth = 1240;
}
var imgWidth = (slickListWidth - 25) * (350 / 1075);
var imgWidthWide = (slickListWidth - 25) * (725 / 1075);

if ($('html,body').width() >= 768) {
  $('.p-slider-06__item img').css('width', imgWidth);
  $('.p-slider-06__item.wide img').css('width', imgWidthWide);
}

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @file シェアボタン
 *
*/

var url = location.href;
var title = $('title').html();

function popupWindow(popupUrl) {

  var widthHalf = window.screen.width / 2,
      heightHalf = window.screen.height / 2,
      blankWindowWidth = 640,
      // 別窓の横幅
  blankWindowHeight = 640,
      // 別窓の縦幅
  options = { // 後ほど記載する window.open の第３引数で使用する
    left: Math.floor(widthHalf - blankWindowWidth / 2), // 別窓の X座標
    top: Math.floor(heightHalf - blankWindowHeight / 2), // 別窓の Y座標
    width: blankWindowWidth,
    height: blankWindowHeight
  };

  var arg = 'left=' + options.left + ',top=' + options.top + ',width=' + options.width + ',height=' + options.height;

  window.open(popupUrl, 'window', arg);
}

// twitter シェアの生成
var text = encodeURIComponent(title);
var tweetUrl = 'http://twitter.com/share?url=' + url + '&text=' + text;
$('.js-twitter').on('click', function (event) {
  event.preventDefault();
  popupWindow(tweetUrl);
});

// facebookシェアの生成
var facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
$('.js-facebook').on('click', function (event) {
  event.preventDefault();
  popupWindow(facebookUrl);
});

// LINEシェア
var message = title + ' ' + url;
var lineUrl = 'https://social-plugins.line.me/lineit/share?url=' + encodeURIComponent(message);

$('.js-line').on('click', function (event) {
  event.preventDefault();
  popupWindow(lineUrl);
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _variables = __webpack_require__(3);

var $window = $(window); /**
                          * @file 追従
                         */

var $sticky = $('.js-sticky');

$window.on('load', function (event) {
  $sticky.each(function (index, element) {

    var $this = $(element);

    // メニューのtop座標を取得する
    var offsetTop = $this.offset().top;

    $window.on('scroll', function () {
      // スクロール位置がメニューのtop座標を超えたらクラス付与
      if ($window.scrollTop() > offsetTop) {
        $this.addClass(_variables.activeClass);
      } else {
        $this.removeClass(_variables.activeClass);
      }
    });
  });
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @file J-Stream
 */

var iframeHeight = $('iframe[id*="eq"]').width() * 0.791666667;
$('iframe[id*="eq"]').css("height", iframeHeight);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(30);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$('.js-stretch').matchHeight(); /**
                                 * @file 高さ揃え
                                 * https://github.com/liabru/jquery-match-height
                                */

/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file タブ切り替え
 *
*/

//import { activeClass } from '../data/_variables';
//
//const $tab = $('.js-tab-navi a');
//
//$tab.on('click', event => {
//
//  // デフォルトの挙動を無効化
//  event.preventDefault();
//
//  // タブのclassを初期化
//  $tab.each((index, element) => {
//    const $this = $(element);
//    const targetGroup = $this.attr('href');
//    $(targetGroup).removeClass(activeClass);
//  });
//
//  const $this = $(event.currentTarget);
//
//  // 指定の要素にclass付与
//  const target = $this.attr('href');
//  $(target).addClass(activeClass);
//
//  // トリガーのclassを初期化
//  $tab.removeClass(activeClass);
//
//  // クリックしたトリガーにclass付与
//  $this.addClass(activeClass);
//
//});


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _common = __webpack_require__(0);

if ($('.js-ticker').length) {
	var tickerInterval = function tickerInterval() {
		$('.js-ticker li:first').slideUp(function () {
			$(this).appendTo($('.js-ticker')).slideDown();
		});
	};

	var tickerResize = false;

	var tickerHeight = function tickerHeight() {
		$('.js-ticker').css({ 'height': $('.js-ticker li:first').outerHeight(), 'overflow': 'hidden' });
	};
	tickerHeight();
	$(window).on('resize', function () {
		if (tickerResize !== false) {
			clearTimeout(tickerResize);
		}
		tickerResize = setTimeout(function () {
			if (_common.readyDeviceWidth !== window.innerWidth) {
				tickerHeight();
			}
		}, 200);
	});
	setInterval(function () {
		tickerInterval();
	}, 5000);
}
/**
 * @file 重要なお知らせ
 */

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _variables = __webpack_require__(3);

var $toggle = $('.js-toggle'); /**
                                * @file クリックしたらclass付与
                                *
                               */

$toggle.on('click', function (event) {

  // デフォルトの挙動を無効化
  event.preventDefault();

  var $this = $(event.currentTarget);

  // hrefの指定先にclassを付与/除去
  var id = $this.attr('href');
  if (id != '#') {
    $(id).toggleClass(_variables.activeClass);
  }

  // data-toggleが指定されていたらグループ化
  var group = $this.attr('data-group');
  if (group) {
    if ($this.hasClass(_variables.activeClass)) {
      $this.removeClass(_variables.activeClass);
    } else {
      $('[data-group="' + group + '"]').removeClass(_variables.activeClass);
      $this.addClass(_variables.activeClass);
    }
  } else {
    // クリックする度にclassを付与/除去
    $this.toggleClass(_variables.activeClass);
  }
});

///// toggle2 /////
var toggleSwitch = !false;
$('.js-toggle2').css({ 'cursor': 'pointer' });
// console.log($('.p-emergency__inner__info__button.js-toggle2').length);
if ($('.p-emergency__inner__info__button.js-toggle2').length) {
  // console.log('a');
  $('.p-emergency__inner__info__button.js-toggle2').each(function () {
    var thisH = $(this).outerHeight(),
        emgTh = $(this).siblings('.p-emergency__inner__info--title').outerHeight();
    $(this).css({ 'top': emgTh / 2 - thisH / 2 });
  });
}
$('.js-toggleInner').css({ 'display': 'none' });
$('.js-toggle2').on('click', function () {
  if (toggleSwitch) {
    toggleSwitch = !toggleSwitch;
    var id = $(this).data('id');
    if ($('.p-emergency__inner__info[id="' + id + '"]').length && !$('.p-emergency__inner__info[id="' + id + '"]').hasClass('js-toggleContent')) {
      $('.p-emergency__inner__info[id="' + id + '"]').toggleClass('is-active');
      $('.p-emergency__inner__info[id="' + id + '"] .p-emergency__inner__info__main').slideToggle(function () {
        toggleSwitch = !toggleSwitch;
      });
    } else {
      $('.js-toggleContent[id="' + id + '"]').toggleClass('is-active');
      $('.js-toggleContent[id="' + id + '"] .js-toggleInner').slideToggle(function () {
        toggleSwitch = !toggleSwitch;
      });
    }
  }
});

/***/ })
/******/ ]);
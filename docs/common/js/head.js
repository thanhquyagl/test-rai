/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
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

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _variables = __webpack_require__(3);

var windowSize = window.innerWidth; /**
                                     * @file headで読み込むのに使用するjsファイル
                                     *
                                    */

// viewportを最適化する

var metalist = document.getElementsByTagName('meta');
//const viewSize = contentsSize + 40;
var viewSize = 1250;

for (var i = 0; i < metalist.length; i++) {
  var name = metalist[i].getAttribute('name');
  if (name && name.toLowerCase() === 'viewport') {
    // console.log(ua);
    // タブレットを判定
    if (_variables.ua.indexOf('iPad') > 0 || _variables.ua.indexOf('Android') > 0 && _variables.ua.indexOf('Mobile') < 0) {
      // viewportをPC幅に固定し、PCレイアウトを表示させる
      metalist[i].setAttribute('content', 'width=' + viewSize + '');
    }
    // 375pxより小さいデバイスを判定
    if (windowSize < 375) {
      // viewportを375px固定し、表示領域を縮小させて表示させる
      metalist[i].setAttribute('content', 'width=375');
    }
    // 1250pxより大きいデバイスを判定
    if (windowSize >= 1250) {
      // viewportを375px固定し、表示領域を縮小させて表示させる
      metalist[i].setAttribute('content', 'width=device-width,initial-scale=1.0');
    }
    // 768px～1250pxの間のみ1250pxに固定
    if (windowSize >= 768 && windowSize <= 1250) {
      metalist[i].setAttribute('content', 'width=' + viewSize + '');
    }
  }
}

/***/ })

/******/ });
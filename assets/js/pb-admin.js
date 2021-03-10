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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/admin.js":
/*!*************************!*\
  !*** ./src/js/admin.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(function ($) {
  // Icon Gradient Color.
  var powerfulBlocksGradient = '<div><svg xmlns="http://www.w3.org/2000/svg" class="pb-icon-gradient" height="0" width="0" style="opacity: 0"><defs><linearGradient id="powerfulblocks-gradient"><stop offset="20%" stop-color="#5820e5" stop-opacity="1"></stop><stop offset="90%" stop-color=" #f30d55" stop-opacity="1"></stop></linearGradient></defs></svg></div>';
  $(powerfulBlocksGradient).prependTo('body');
  $('#pb-save-blocks').hide();
  $('.pb-tabs__content .pb-tabs__item').hide();
  $('.pb-tabs__content .pb-tabs__item:first').show();
  $('.pb-tabs__nav li:first').addClass('tabs__is-active');
  var hash = window.location.hash;

  if (hash) {
    tab = hash.substring(hash.indexOf('#'));
    activateTab(tab);
  }

  function activateTab(tab) {
    $('.pb-tabs__nav li').removeClass('tabs__is-active');
    $('.pb-tabs__nav li').find("a[href=\"" + tab + "\"").parent().addClass('tabs__is-active');
    $('.pb-tabs__content .pb-tabs__item').hide();
    $('.pb-tabs__content').find(tab).show();

    if ('#blocks' === $('.tabs__is-active a').attr('href')) {
      $('#pb-save-blocks').show();
    } else {
      $('#pb-save-blocks').hide();
    }

    $('#toplevel_page_powerful-blocks .wp-submenu').find('a').filter(function (i, a) {
      return tab === a.hash;
    }).parent().addClass('current').siblings().removeClass('current');
  }

  var _this = $('.pb-tabs__nav'),
      tabs = _this.find('a');

  tabs.on('click', function (e) {
    e.preventDefault();

    var _this = $(this),
        tab = $(this).attr('href');

    activateTab(tab);
  });
  $(window).on('hashchange', function (e) {
    e.preventDefault();
    var pHash = window.location.hash;
    activateTab(pHash);
  });
});

/***/ })

/******/ });
//# sourceMappingURL=pb-admin.js.map
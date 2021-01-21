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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/accordion/frontend.js":
/*!******************************************!*\
  !*** ./src/blocks/accordion/frontend.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(function ($) {
  $('.pb-accordion-wrapper').each(function () {
    var _this = $(this),
        item = _this.find('.pb-accordion-item'),
        header = item.find('.pb-accordion-header'),
        openIcon = item.find('.pb-accordion-toggle-icon--open'),
        closeIcon = item.find('.pb-accordion-toggle-icon--close'),
        data = _this.data('settings');

    closeIcon.hide();

    if ('accordion' === data.type) {
      header.on('click', function () {
        openIcon.show(data.speed);
        closeIcon.hide(data.speed);

        if ($(this).hasClass('pb-active')) {
          $(this).removeClass('pb-active');
          $(this).next('.pb-accordion-content').removeClass('pb-active').slideUp(data.speed);
          $(this).find('.pb-accordion-toggle-icon--open').show(data.speed);
          $(this).find('.pb-accordion-toggle-icon--close').hide(data.speed);
        } else {
          header.removeClass('pb-active');
          header.next('.pb-accordion-content').removeClass('pb-active').slideUp(data.speed);
          $(this).find('.pb-accordion-toggle-icon--open').hide(data.speed);
          $(this).find('.pb-accordion-toggle-icon--close').show(data.speed);
          $(this).toggleClass('pb-active');
          $(this).next('.pb-accordion-content').slideToggle(data.speed, function () {
            $(this).toggleClass('pb-active');
          });
        }
      });
    } else {
      header.on('click', function () {
        if ($(this).hasClass('pb-active')) {
          $(this).removeClass('pb-active');
          $(this).next('.pb-accordion-content').removeClass('pb-active').slideUp(data.speed);
          $(this).find('.pb-accordion-toggle-icon--open').show(data.speed);
          $(this).find('.pb-accordion-toggle-icon--close').hide(data.speed);
        } else {
          $(this).find('.pb-accordion-toggle-icon--open').hide(data.speed);
          $(this).find('.pb-accordion-toggle-icon--close').show(data.speed);
          $(this).toggleClass('pb-active');
          $(this).next('.pb-accordion-content').slideToggle(data.speed, function () {
            $(this).toggleClass('pb-active');
          });
        }
      });
    }
  });
});

/***/ }),

/***/ "./src/blocks/alert-box/frontend.js":
/*!******************************************!*\
  !*** ./src/blocks/alert-box/frontend.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(function ($) {
  // Click to hide
  $('.pb-alert-box-hide').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.pb-alert-box').slideUp(500);
  }); // Hide After X Time.

  $('.pb-alert-box').each(function (i, item) {
    var settings = $(this).data('settings');
    var id = settings.id;
    var time = settings.time;

    if (0 !== time && $('#' + id).is(':visible')) {
      var t = time * 1000;
      setTimeout(function () {
        $('#' + id).slideUp(500);
      }, t);
    }
  });
});

/***/ }),

/***/ "./src/js/frontend.js":
/*!****************************!*\
  !*** ./src/js/frontend.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_alert_box_frontend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/alert-box/frontend */ "./src/blocks/alert-box/frontend.js");
/* harmony import */ var _blocks_alert_box_frontend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_alert_box_frontend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_accordion_frontend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocks/accordion/frontend */ "./src/blocks/accordion/frontend.js");
/* harmony import */ var _blocks_accordion_frontend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_accordion_frontend__WEBPACK_IMPORTED_MODULE_1__);


jQuery(function ($) {
  var linkData = $('[data-pb-link]');
  var lData = $(linkData[0]).data('pb-link'); // if( '' !== lData.addLink ) {
  //     $( linkData[0]).css('cursor', 'pointer');
  // }

  $('[data-pb-link]').on('click', function () {
    var _this = $(this),
        data = _this.data('pb-link'),
        id = data.id,
        addLink = data.addLink;

    if (true === addLink) {
      var a = document.createElement('a'),
          newA,
          t;
      a.id = 'pb-wl-r-' + id;
      a.href = data.url ? data.url : '';
      a.target = data.new_window ? '_blank' : '_self';
      a.rel = data.wrapperLinkNofollow ? 'nofollow noreferer' : '';
      a.style.display = 'none';
      document.body.appendChild(a);
      newA = document.getElementById(a.id);
      newA.click();
      t = setTimeout(function () {
        document.body.removeChild(newA);
        clearTimeout(t);
      });
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=pb-frontend.js.map
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

/***/ "./src/blocks/animated-headlines/frontend.js":
/*!***************************************************!*\
  !*** ./src/blocks/animated-headlines/frontend.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(function ($) {
  window['pbAnimatedHeadlines'] = function () {
    //set animation timing
    var animationDelay = 2500,
        //loading bar effect
    barAnimationDelay = 3800,
        barWaiting = barAnimationDelay - 3000,
        //3000 is the duration of the transition on the loading bar - set in the scss/css file
    //letters effect
    lettersDelay = 50,
        //type effect
    typeLettersDelay = 150,
        selectionDuration = 500,
        typeAnimationDelay = selectionDuration + 800,
        //clip effect 
    revealDuration = 600,
        revealAnimationDelay = 1500;
    initHeadline();

    function initHeadline() {
      //insert <i> element for each letter of a changing word
      singleLetters($('.pb-animated-txt.letters').find('b')); //initialise headline animation

      animateHeadline($('.pb-animated-txt'));
    }

    function singleLetters($words) {
      $words.each(function () {
        var word = $(this),
            letters = word.text().split(''),
            selected = word.hasClass('is-visible');

        for (i in letters) {
          if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
          letters[i] = selected ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
        }

        var newLetters = letters.join('');
        word.html(newLetters).css('opacity', 1);
      });
    }

    function animateHeadline($headlines) {
      var duration = animationDelay;
      $headlines.each(function () {
        var headline = $(this);

        if (headline.hasClass('loading-bar')) {
          duration = barAnimationDelay;
          setTimeout(function () {
            headline.find('.animation-text--content').addClass('is-loading');
          }, barWaiting);
        } else if (headline.hasClass('clip')) {
          var spanWrapper = headline.find('.animation-text--content'),
              newWidth = spanWrapper.width() + 10;
          spanWrapper.css('width', newWidth);
        } else if (!headline.hasClass('type')) {
          //assign to .animation-text--content the width of its longest word
          var words = headline.find('.animation-text--content b'),
              width = 0;
          words.each(function () {
            var wordWidth = $(this).width();
            if (wordWidth > width) width = wordWidth;
          }); // headline.find('.animation-text--content').css('width', width);
        }

        ; //trigger animation

        setTimeout(function () {
          hideWord(headline.find('.is-visible').eq(0));
        }, duration);
      });
    }

    function hideWord($word) {
      var nextWord = takeNext($word);

      if ($word.parents('.pb-animated-txt').hasClass('type')) {
        var parentSpan = $word.parent('.animation-text--content');
        parentSpan.addClass('selected').removeClass('waiting');
        setTimeout(function () {
          parentSpan.removeClass('selected');
          $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
        }, selectionDuration);
        setTimeout(function () {
          showWord(nextWord, typeLettersDelay);
        }, typeAnimationDelay);
      } else if ($word.parents('.pb-animated-txt').hasClass('letters')) {
        var bool = $word.children('i').length >= nextWord.children('i').length ? true : false;
        hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
        showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);
      } else if ($word.parents('.pb-animated-txt').hasClass('clip')) {
        $word.parents('.animation-text--content').animate({
          width: '2px'
        }, revealDuration, function () {
          switchWord($word, nextWord);
          showWord(nextWord);
        });
      } else if ($word.parents('.pb-animated-txt').hasClass('loading-bar')) {
        $word.parents('.animation-text--content').removeClass('is-loading');
        switchWord($word, nextWord);
        setTimeout(function () {
          hideWord(nextWord);
        }, barAnimationDelay);
        setTimeout(function () {
          $word.parents('.animation-text--content').addClass('is-loading');
        }, barWaiting);
      } else {
        switchWord($word, nextWord);
        setTimeout(function () {
          hideWord(nextWord);
        }, animationDelay);
      }
    }

    function showWord($word, $duration) {
      if ($word.parents('.pb-animated-txt').hasClass('type')) {
        showLetter($word.find('i').eq(0), $word, false, $duration);
        $word.addClass('is-visible').removeClass('is-hidden');
      } else if ($word.parents('.pb-animated-txt').hasClass('clip')) {
        $word.parents('.animation-text--content').animate({
          'width': $word.width() + 10
        }, revealDuration, function () {
          setTimeout(function () {
            hideWord($word);
          }, revealAnimationDelay);
        });
      }
    }

    function hideLetter($letter, $word, $bool, $duration) {
      $letter.removeClass('in').addClass('out');

      if (!$letter.is(':last-child')) {
        setTimeout(function () {
          hideLetter($letter.next(), $word, $bool, $duration);
        }, $duration);
      } else if ($bool) {
        setTimeout(function () {
          hideWord(takeNext($word));
        }, animationDelay);
      }

      if ($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
        var nextWord = takeNext($word);
        switchWord($word, nextWord);
      }
    }

    function showLetter($letter, $word, $bool, $duration) {
      $letter.addClass('in').removeClass('out');

      if (!$letter.is(':last-child')) {
        setTimeout(function () {
          showLetter($letter.next(), $word, $bool, $duration);
        }, $duration);
      } else {
        if ($word.parents('.pb-animated-txt').hasClass('type')) {
          setTimeout(function () {
            $word.parents('.animation-text--content').addClass('waiting');
          }, 200);
        }

        if (!$bool) {
          setTimeout(function () {
            hideWord($word);
          }, animationDelay);
        }
      }
    }

    function takeNext($word) {
      return !$word.is(':last-child') ? $word.next() : $word.parent().children().eq(0);
    }

    function takePrev($word) {
      return !$word.is(':first-child') ? $word.prev() : $word.parent().children().last();
    }

    function switchWord($oldWord, $newWord) {
      $oldWord.removeClass('is-visible').addClass('is-hidden');
      $newWord.removeClass('is-hidden').addClass('is-visible');
    }
  };

  pbAnimatedHeadlines();
});

/***/ }),

/***/ "./src/blocks/counter/frontend.js":
/*!****************************************!*\
  !*** ./src/blocks/counter/frontend.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(function ($) {
  // Counter
  window['pbCounter'] = function () {
    $('.pb-counter-wrapper').each(function () {
      if ($('body').hasClass('wp-admin') && $(this).parents('.wp-block-powerful-blocks-counter.pb-is-selected').length === 0) {
        return;
      }

      if ($(window).scrollTop() > $(this).offset().top - window.innerHeight) {
        var $el = $(this).find('.pb-counter'),
            data = {
          fromValue: $el.attr('data-from'),
          toValue: $el.attr('data-to'),
          delimiter: $el.attr('data-delimiter'),
          duration: $el.attr('data-duration'),
          easing: $el.attr('data-easing'),
          onComplete: function onComplete() {
            $el.addClass('pb-num-counter-complete');
          }
        },
            decimalDigits = data.toValue.toString().match(/\.(.*)/);

        if (decimalDigits) {
          data.rounding = decimalDigits[1].length;
        }

        if ($('body').hasClass('wp-admin')) {
          data.onComplete = function () {};

          $el.empty();
        }

        if (!$el.hasClass('pb-num-counter-complete')) {
          $el.numerator(data);
        }
      }
    });
  };

  if ($('.pb-counter-wrapper').length > 0) {
    $(window).on('scroll', function () {
      pbCounter();
    });
  }
});

/***/ }),

/***/ "./src/blocks/fun-factor/frontend.js":
/*!*******************************************!*\
  !*** ./src/blocks/fun-factor/frontend.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(function ($) {
  // Fun Factor Counter
  window['pbCounter'] = function () {
    $('.pb-fun-factor-wrapper').each(function () {
      if ($('body').hasClass('wp-admin') && $(this).parents('.wp-block-powerful-blocks-fun-factor.pb-is-selected').length === 0) {
        return;
      }

      if ($(window).scrollTop() > $(this).offset().top - window.innerHeight) {
        var $el = $(this).find('.pb-fun-factor-number'),
            data = {
          fromValue: $el.attr('data-from'),
          toValue: $el.attr('data-to'),
          delimiter: $el.attr('data-delimiter'),
          duration: $el.attr('data-duration'),
          easing: $el.attr('data-easing'),
          onComplete: function onComplete() {
            $el.addClass('pb-num-counter-complete');
          }
        },
            decimalDigits = data.toValue.toString().match(/\.(.*)/);

        if (decimalDigits) {
          data.rounding = decimalDigits[1].length;
        }

        if ($('body').hasClass('wp-admin')) {
          data.onComplete = function () {};

          $el.empty();
        }

        if (!$el.hasClass('pb-num-counter-complete')) {
          $el.numerator(data);
        }
      }
    });
  };

  if ($('.pb-fun-factor-wrapper').length > 0) {
    $(window).on('scroll', function () {
      pbCounter();
    });
  }
});

/***/ }),

/***/ "./src/blocks/tabs/frontend.js":
/*!*************************************!*\
  !*** ./src/blocks/tabs/frontend.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(function ($) {
  function activateTab(tab) {
    $('.pb-tabs--item').removeClass('pb-tab-active');
    $('.pb-tabs-content [data-tab]').hide();
    $('.pb-tabs--tabs, .pb-tabs--pills').find("[data-tab=\"" + tab + "\"").addClass('pb-tab-active');
    $('.pb-tabs-content').find("[data-tab=\"" + tab + "\"").show();
  }

  window['pbTabs'] = function () {
    $('.pb-tabs-wrapper').each(function () {
      var _this = $(this),
          aTab = $(this).attr('data-a-tab'),
          tabs = _this.find('.pb-tabs--item');

      $('.pb-tabs-content').find("[data-tab=\"" + aTab + "\"").show();
      tabs.on('click', function (e) {
        e.preventDefault();

        var _this = $(this),
            tab = $(this).attr('data-tab');

        activateTab(tab);
      });
    });
  };

  $(window).on('hashchange', function () {
    var pHash = window.location.hash;
    activateTab(pHash.replace(/^#/, ''));
  });
  pbTabs();
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
/* harmony import */ var _blocks_fun_factor_frontend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blocks/fun-factor/frontend */ "./src/blocks/fun-factor/frontend.js");
/* harmony import */ var _blocks_fun_factor_frontend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks_fun_factor_frontend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blocks_counter_frontend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blocks/counter/frontend */ "./src/blocks/counter/frontend.js");
/* harmony import */ var _blocks_counter_frontend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blocks_counter_frontend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _blocks_animated_headlines_frontend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blocks/animated-headlines/frontend */ "./src/blocks/animated-headlines/frontend.js");
/* harmony import */ var _blocks_animated_headlines_frontend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_blocks_animated_headlines_frontend__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blocks_tabs_frontend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/tabs/frontend */ "./src/blocks/tabs/frontend.js");
/* harmony import */ var _blocks_tabs_frontend__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blocks_tabs_frontend__WEBPACK_IMPORTED_MODULE_5__);






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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

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
/******/ 		"index": 0
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
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../../../node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************************!*\
  !*** /Users/mhimon/node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "../../../../../../../../../../node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** /Users/mhimon/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "../../../../../../../../../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************************!*\
  !*** /Users/mhimon/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../../../../../../../../../../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** /Users/mhimon/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "../../../../../../../../../../node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** /Users/mhimon/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "../../../../../../../../../../node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************************!*\
  !*** /Users/mhimon/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "../../../../../../../../../../node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "../../../../../../../../../../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "../../../../../../../../../../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "../../../../../../../../../../node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "../../../../../../../../../../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************************!*\
  !*** /Users/mhimon/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "../../../../../../../../../../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "../../../../../../../../../../node_modules/classnames/index.js":
/*!******************************************************!*\
  !*** /Users/mhimon/node_modules/classnames/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "../../components/alignment-control/editor.scss":
/*!****************************************************************************************************************************************!*\
  !*** /Users/mhimon/Local Sites/gutenblocks/app/public/wp-content/plugins/powerful-blocks/src/components/alignment-control/editor.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../components/alignment-control/index.js":
/*!*************************************************************************************************************************************!*\
  !*** /Users/mhimon/Local Sites/gutenblocks/app/public/wp-content/plugins/powerful-blocks/src/components/alignment-control/index.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "../../components/alignment-control/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);

var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup;


var AlignmentControl = function AlignmentControl(props) {
  var alignment = props.value;
  var type = props.type || null;
  var TEXT_ALIGNS = [{
    icon: 'editor-alignleft',
    value: 'left'
  }, {
    icon: 'editor-aligncenter',
    value: 'center'
  }, {
    icon: 'editor-alignright',
    value: 'right'
  }];
  var FLEX_ALIGNS = [{
    icon: 'editor-alignleft',
    value: 'flex-start'
  }, {
    icon: 'editor-aligncenter',
    value: 'center'
  }, {
    icon: 'editor-alignright',
    value: 'flex-end'
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    label: props.label,
    className: "pb-block-control__alignment"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ButtonGroup, {
    className: "align-btn-group"
  }, (type === 'text' || type === null) && TEXT_ALIGNS.map(function (align) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      key: align.value,
      isPrimary: alignment === align.value,
      onClick: function onClick() {
        props.onChange(align.value);
      },
      icon: align.icon
    });
  }), type === 'flex' && FLEX_ALIGNS.map(function (align) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      key: align.value,
      isPrimary: alignment === align.value,
      onClick: function onClick() {
        props.onChange(align.value);
      },
      icon: align.icon
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AlignmentControl);

/***/ }),

/***/ "../../components/image-control/editor.scss":
/*!************************************************************************************************************************************!*\
  !*** /Users/mhimon/Local Sites/gutenblocks/app/public/wp-content/plugins/powerful-blocks/src/components/image-control/editor.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../components/image-control/index.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/mhimon/Local Sites/gutenblocks/app/public/wp-content/plugins/powerful-blocks/src/components/image-control/index.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../../../../../../../../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../../../../../../../../../../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.scss */ "../../components/image-control/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_8__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */







var ALLOWED_MEDIA_TYPES = ['image'];

var ImageControl = function ImageControl(props) {
  var image = props.image,
      i18n = props.i18n;
  var defaultData = {
    id: undefined,
    alt: '',
    size: 'full',
    url: ''
  };
  var imageObj = props.value || defaultData;
  var imageId = imageObj.id;
  var imageSize = imageObj.size || 'full';
  var enableImageSizes = props.enableImageSizes;
  var labels = {
    uploadImage: i18n && i18n.uploadImage ? i18n.uploadImage : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Upload image'),
    imageSize: i18n && i18n.imageSize ? i18n.imageSize : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Image Size')
  };

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(imageObj),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      imageData = _useState2[0],
      setImageData = _useState2[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (imageData) {
      props.onChange(imageData);
    }
  }, [imageData]);

  var onUpdateImage = function onUpdateImage(image) {
    var id = image.id,
        sizes = image.sizes,
        alt = image.alt;
    var size = sizes[imageSize] ? imageSize : 'full';
    var url = sizes[size].url;
    setImageData({
      id: id,
      alt: alt,
      size: size,
      sizes: sizes,
      url: url
    });
  };

  var onRemoveImage = function onRemoveImage() {
    setImageData(defaultData);
  };

  var onSizeChange = function onSizeChange(size) {
    var _image$media_details, _image$media_details$;

    var url = (_image$media_details = image.media_details) === null || _image$media_details === void 0 ? void 0 : (_image$media_details$ = _image$media_details.sizes[size]) === null || _image$media_details$ === void 0 ? void 0 : _image$media_details$.source_url;

    if (url) {
      setImageData(_objectSpread(_objectSpread({}, imageData), {}, {
        size: size,
        url: url
      }));
    }
  };

  var getImageSizes = function getImageSizes() {
    var full = [{
      value: 'full',
      label: 'full'
    }];
    var sizes = [];

    if (imageData.sizes) {
      Object.keys(imageData.sizes).map(function (size) {
        sizes.push({
          value: size,
          label: size
        });
      });
    }

    return 0 === sizes.length ? full : sizes;
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], {
    label: props.label,
    className: "ib-block-control__image"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUpload"], {
    title: props.label,
    onSelect: onUpdateImage,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    value: imageId,
    render: function render(_ref) {
      var open = _ref.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        className: !imageId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
        onClick: open
      }, !imageId && labels.uploadImage, !!imageId && !image && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null), !!imageId && image && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ResponsiveWrapper"], {
        naturalWidth: image.media_details.width,
        naturalHeight: image.media_details.height
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("img", {
        src: image.source_url,
        alt: image.alt
      })));
    }
  })), !!imageId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "ib-block-control__image-actions components-button-group"
  }, image && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUpload"], {
    title: props.label,
    onSelect: onUpdateImage,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    value: imageId,
    render: function render(_ref2) {
      var open = _ref2.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        onClick: open,
        icon: "edit"
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: onRemoveImage,
    icon: "trash",
    isDestructive: true
  }))), !!enableImageSizes && !!imageId && image && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
    label: labels.imageSize,
    className: "ib-block-control__image-size",
    value: imageSize,
    options: getImageSizes(),
    onChange: onSizeChange
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["withSelect"])(function (select, props) {
  var _select = select('core'),
      getMedia = _select.getMedia;

  var imageId = props.value.id;
  return {
    image: imageId ? getMedia(imageId) : null
  };
}))(ImageControl));

/***/ }),

/***/ "../../components/index.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/mhimon/Local Sites/gutenblocks/app/public/wp-content/plugins/powerful-blocks/src/components/index.js ***!
  \*******************************************************************************************************************/
/*! exports provided: ResponsiveRangeControl, AlignmentControl, ImageControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _responsive_range_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./responsive-range-control */ "../../components/responsive-range-control/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveRangeControl", function() { return _responsive_range_control__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _alignment_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alignment-control */ "../../components/alignment-control/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlignmentControl", function() { return _alignment_control__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _image_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-control */ "../../components/image-control/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageControl", function() { return _image_control__WEBPACK_IMPORTED_MODULE_2__["default"]; });

// export { default as AdvancedRangeControl } from './range-control';




/***/ }),

/***/ "../../components/responsive-range-control/editor.scss":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/mhimon/Local Sites/gutenblocks/app/public/wp-content/plugins/powerful-blocks/src/components/responsive-range-control/editor.scss ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../components/responsive-range-control/index.js":
/*!********************************************************************************************************************************************!*\
  !*** /Users/mhimon/Local Sites/gutenblocks/app/public/wp-content/plugins/powerful-blocks/src/components/responsive-range-control/index.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "../../components/responsive-range-control/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);

var withState = wp.compose.withState;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup,
    Icon = _wp$components.Icon; // import { desktop, tablet, smartphone } from '@wordpress/icons';

var __ = wp.i18n.__;


var BaseRangeControl = function BaseRangeControl(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
    value: props.value,
    min: props.min ? props.min : 1,
    max: props.max ? props.max : 100,
    allowReset: true,
    onChange: props.onChange
  });
};

var ResponsiveRangeControl = function ResponsiveRangeControl(props) {
  var device = props.device;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, {
    label: props.label,
    className: "pb-block-control__responsive-range-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ButtonGroup, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
    isPrimary: 'desktop' === device ? true : false,
    onClick: function onClick() {
      return props.setState({
        device: 'desktop'
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Icon, {
    icon: "desktop"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
    isPrimary: 'tablet' === device ? true : false,
    onClick: function onClick() {
      return props.setState({
        device: 'tablet'
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Icon, {
    icon: "tablet"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
    isPrimary: 'mobile' === device ? true : false,
    onClick: function onClick() {
      return props.setState({
        device: 'mobile'
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Icon, {
    icon: "smartphone"
  }))), 'desktop' === device && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseRangeControl, {
    value: props.value.desktop,
    onChange: function onChange(value) {
      props.onChange(value, device);
    },
    min: props.min,
    max: props.max
  }), 'tablet' === device && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseRangeControl, {
    value: props.value.tablet,
    onChange: function onChange(value) {
      props.onChange(value, device);
    },
    min: props.min,
    max: props.max
  }), 'mobile' === device && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseRangeControl, {
    value: props.value.mobile,
    onChange: function onChange(value) {
      props.onChange(value, device);
    },
    min: props.min,
    max: props.max
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (withState({
  device: 'desktop'
})(ResponsiveRangeControl));

/***/ }),

/***/ "../../components/utils.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/mhimon/Local Sites/gutenblocks/app/public/wp-content/plugins/powerful-blocks/src/components/utils.js ***!
  \*******************************************************************************************************************/
/*! exports provided: renderStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderStyle", function() { return renderStyle; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var renderStyle = function renderStyle(css, selectorPrefix) {
  var breakpoints = {
    tablet: 992,
    mobile: 768
  };

  if ('undefined' === typeof css.desktop) {
    throw new Error('Parser: Invalid CSS.');
  }

  var parsedStyle = '';
  Object.keys(css).map(function (device) {
    if ('undefined' === typeof device) {
      return;
    }

    if ('tablet' === device || 'mobile' === device) {
      parsedStyle += "@media only screen and (max-width: ".concat(breakpoints[device], "px) { ");
    }

    Object.keys(css[device]).map(function (selector) {
      if ('undefined' === typeof selector) {
        return;
      }

      parsedStyle += selectorPrefix;

      if ('selector' !== selector) {
        parsedStyle += ' ' + selector;
      }

      parsedStyle += ' { ';
      var properties = css[device][selector];
      Object.keys(properties).map(function (property) {
        if ('undefined' === typeof property || 'undefined' === typeof properties[property]) {
          return;
        }

        if ('' !== properties[property]) {
          parsedStyle += property + ': ' + properties[property] + '; ';
        }
      });
      parsedStyle += '} ';
    });

    if ('tablet' === device || 'mobile' === device) {
      parsedStyle += '} ';
    }
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("style", null, parsedStyle);
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

var attributes = {
  blockId: {
    type: 'string',
    default: undefined
  },
  backgroundColor: {
    type: 'string',
    default: ''
  },
  hoverBackgroundColor: {
    type: 'string',
    default: ''
  },
  padding: {
    type: 'object',
    default: {
      top: '15px',
      left: '15px',
      right: '15px',
      bottom: '15px'
    }
  },
  shadowColor: {
    type: 'string',
    default: 'transparent'
  },
  shadowHOffset: {
    type: 'number',
    default: '0'
  },
  shadowVOffset: {
    type: 'number',
    default: '0'
  },
  shadowBlur: {
    type: 'number',
    default: '0'
  },
  shadowSpread: {
    type: 'number',
    default: '0'
  },
  showContent: {
    type: 'boolean',
    default: true
  },
  content: {
    type: 'string',
    default: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.', 'powerful-blocks')
  },
  contentBackgroundColor: {
    type: 'string',
    default: ''
  },
  hoverContentBackgroundColor: {
    type: 'string',
    default: ''
  },
  contentColor: {
    type: 'string',
    default: '#111'
  },
  contentTextAlign: {
    type: 'string',
    default: 'center'
  },
  contentWidth: {
    type: 'number',
    default: 80
  },
  contentFontSize: {
    type: 'number',
    default: 18
  },
  contentFontSizeTablet: {
    type: 'number',
    default: 17
  },
  contentFontSizeMobile: {
    type: 'number',
    default: 16
  },
  contentMargin: {
    type: 'object',
    default: {
      top: '0px',
      left: '00px',
      right: '0px',
      bottom: '10px'
    }
  },
  contentPadding: {
    type: 'object',
    default: {
      top: '10px',
      left: '10px',
      right: '10px',
      bottom: '10px'
    }
  },
  contentBorderRadius: {
    type: 'number',
    default: 0
  },
  contentBorderRadiusTablet: {
    type: 'number',
    default: 0
  },
  contentBorderRadiusMobile: {
    type: 'number',
    default: 0
  },
  imageData: {
    type: 'object',
    default: {
      id: undefined,
      alt: '',
      size: undefined,
      url: ''
    }
  },
  showImage: {
    type: 'boolean',
    default: true
  },
  imageSize: {
    type: 'number',
    default: 50
  },
  imageSizeTablet: {
    type: 'number',
    default: 50
  },
  imageSizeMobile: {
    type: 'number',
    default: 50
  },
  imageBorderStyle: {
    type: 'string',
    default: 'none'
  },
  imageBorderSize: {
    type: 'number',
    default: 1
  },
  imageBorderColor: {
    type: 'string',
    default: '#111'
  },
  imageBorderRadius: {
    type: 'number',
    default: 50
  },
  imageBorderRadiusTablet: {
    type: 'number',
    default: 50
  },
  imageBorderRadiusMobile: {
    type: 'number',
    default: 50
  },
  imageShadowColor: {
    type: 'string',
    default: 'transparent'
  },
  imageShadowHOffset: {
    type: 'number',
    default: '0'
  },
  imageShadowVOffset: {
    type: 'number',
    default: '0'
  },
  imageShadowBlur: {
    type: 'number',
    default: '0'
  },
  imageShadowSpread: {
    type: 'number',
    default: '0'
  },
  imageShowContent: {
    type: 'boolean',
    default: true
  },
  imagePosition: {
    type: 'string',
    default: 'left'
  },
  imageMargin: {
    type: 'object',
    default: {
      top: '10px',
      left: '0px',
      right: '10px',
      bottom: '0px'
    }
  },
  name: {
    type: 'string',
    default: 'MH Imon'
  },
  showName: {
    type: 'boolean',
    default: true
  },
  nameColor: {
    type: 'string',
    default: '#111'
  },
  nameTextAlign: {
    type: 'string',
    default: 'left'
  },
  nameFontSize: {
    type: 'number',
    default: 18
  },
  nameFontSizeTablet: {
    type: 'number',
    default: 17
  },
  nameFontSizeMobile: {
    type: 'number',
    default: 16
  },
  nameMargin: {
    type: 'object',
    default: {
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px'
    }
  },
  title: {
    type: 'string',
    default: 'Owner'
  },
  showTitle: {
    type: 'boolean',
    default: true
  },
  titleColor: {
    type: 'string',
    default: '#111'
  },
  titleTextAlign: {
    type: 'string',
    default: 'left'
  },
  titleFontSize: {
    type: 'number',
    default: 18
  },
  titleFontSizeTablet: {
    type: 'number',
    default: 17
  },
  titleFontSizeMobile: {
    type: 'number',
    default: 16
  },
  titleMargin: {
    type: 'object',
    default: {
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px'
    }
  },
  clientInfoPosition: {
    type: 'string',
    default: 'after-content'
  },
  ratingsAlign: {
    type: 'string',
    default: 'center'
  },
  showRatings: {
    type: 'boolean',
    default: true
  },
  ratingsPosition: {
    type: 'string',
    default: 'after-content'
  },
  preset: {
    type: 'string',
    default: 'design-1'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../../../../../../../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./src/style.js");

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    MediaUpload = _wp$blockEditor.MediaUpload;
var __ = wp.i18n.__;
var Button = wp.components.Button;





var edit = function edit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var blockId = attributes.blockId,
      content = attributes.content,
      imageData = attributes.imageData,
      name = attributes.name,
      title = attributes.title,
      imagePosition = attributes.imagePosition,
      showContent = attributes.showContent,
      showImage = attributes.showImage,
      showName = attributes.showName,
      showTitle = attributes.showTitle,
      showRatings = attributes.showRatings,
      ratingsPosition = attributes.ratingsPosition,
      preset = attributes.preset;

  if (props.isSelected && !props.blockId) {
    var clientId = props.clientId;
    setAttributes({
      blockId: clientId.replace(/-/g, '')
    });
  }

  var allowedBlocks = ['powerful-blocks/star-rating'];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_inspector__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes: attributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "pb-testimonial-".concat(blockId)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('pb-testimonial-wrapper', props.className, 'pb-testimonial-client-info-position', preset)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "pb-testimonial--conr"
  }, true === showRatings && 'before-content' === ratingsPosition && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "pb-testimonial--rating"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    allowedBlocks: allowedBlocks
  })), true === showContent && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    tagName: "div",
    className: "pb-testimonial--content",
    placeholder: __('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.', 'powerful-blocks'),
    value: content,
    disableLineBreaks: true,
    keepPlaceholderOnFocus: true,
    onChange: function onChange(content) {
      setAttributes({
        content: content
      });
    }
  }), true === showRatings && 'after-content' === ratingsPosition && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "pb-testimonial--rating"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    allowedBlocks: allowedBlocks
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "pb-testimonial--details image-position-".concat(imagePosition)
  }, true === showImage && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "pb-testimonial-image"
  }, imageData.url ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: imageData.url,
    alt: imageData.alt
  }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
    onSelect: function onSelect(image) {
      return setAttributes({
        imageData: image
      });
    },
    type: "image",
    value: imageData.id,
    render: function render(_ref) {
      var open = _ref.open;
      return !imageData.url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
        label: __('Upload Image', 'powerful-blocks'),
        icon: "format-image",
        onClick: open
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "pb-testimonial-info"
  }, true === showName && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    tagName: "h3",
    className: "pb-testimonial-info--name",
    placeholder: __('Name', 'powerful-blocks'),
    value: name,
    disableLineBreaks: true,
    keepPlaceholderOnFocus: true,
    onChange: function onChange(name) {
      setAttributes({
        name: name
      });
    }
  }), true === showTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
    tagName: "h4",
    className: "pb-testimonial-info--title",
    placeholder: __('Title', 'powerful-blocks'),
    value: title,
    disableLineBreaks: true,
    keepPlaceholderOnFocus: true,
    onChange: function onChange(title) {
      setAttributes({
        title: title
      });
    }
  }), true === showRatings && 'after-info' === ratingsPosition && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "pb-testimonial--rating"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    allowedBlocks: allowedBlocks
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

var example = {
  attributes: {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Alert Title', 'powerful-blocks'),
    content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.', 'powerful-blocks')
  }
};
/* harmony default export */ __webpack_exports__["default"] = (example);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
  class: "fa-group"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "red",
  d: "M352 287.9H162.3L79.5 350a9.7 9.7 0 0 1-15.5-7.8V288a64.06 64.06 0 0 1-64-64V64A64.06 64.06 0 0 1 64 0h288a64.06 64.06 0 0 1 64 64v160a63.91 63.91 0 0 1-64 63.9z",
  opacity: "0.4"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  class: "fa-primary",
  fill: "currentColor",
  d: "M576 224v160a64.06 64.06 0 0 1-64 64h-32v54.3a9.7 9.7 0 0 1-15.5 7.8L381.7 448H256a64.06 64.06 0 0 1-64-64v-64h160a96.15 96.15 0 0 0 96-96v-64h64a64.06 64.06 0 0 1 64 64z"
}))));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example */ "./src/example.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./save */ "./src/save.js");









Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('powerful-blocks/testimonial', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Testimonial', 'powerful-blocks'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Example block written with ESNext standard and JSX support – build step required.', 'powerful-blocks'),
  category: 'powerful-blocks',
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
  supports: {
    html: false
  },
  keywords: ['ultrablocks', 'ultra blocks', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Testimonial', 'powerful-blocks')],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_7__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_8__["default"],
  example: _example__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../../../../../../../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components */ "../../components/index.js");


var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    ColorPalette = _wp$blockEditor.ColorPalette;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    __experimentalBoxControl = _wp$components.__experimentalBoxControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    Dropdown = _wp$components.Dropdown,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup;
var __ = wp.i18n.__;
var useState = wp.element.useState;





var Inspector = function Inspector(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var backgroundColor = attributes.backgroundColor,
      hoverBackgroundColor = attributes.hoverBackgroundColor,
      padding = attributes.padding,
      shadowColor = attributes.shadowColor,
      shadowHOffset = attributes.shadowHOffset,
      shadowVOffset = attributes.shadowVOffset,
      shadowBlur = attributes.shadowBlur,
      shadowSpread = attributes.shadowSpread,
      contentBackgroundColor = attributes.contentBackgroundColor,
      hoverContentBackgroundColor = attributes.hoverContentBackgroundColor,
      contentColor = attributes.contentColor,
      contentTextAlign = attributes.contentTextAlign,
      contentWidth = attributes.contentWidth,
      contentPadding = attributes.contentPadding,
      contentFontSize = attributes.contentFontSize,
      contentFontSizeTablet = attributes.contentFontSizeTablet,
      contentFontSizeMobile = attributes.contentFontSizeMobile,
      contentMargin = attributes.contentMargin,
      contentBorderRadius = attributes.contentBorderRadius,
      contentBorderRadiusTablet = attributes.contentBorderRadiusTablet,
      contentBorderRadiusMobile = attributes.contentBorderRadiusMobile,
      imageData = attributes.imageData,
      imageSize = attributes.imageSize,
      imageSizeTablet = attributes.imageSizeTablet,
      imageSizeMobile = attributes.imageSizeMobile,
      imageBorderStyle = attributes.imageBorderStyle,
      imageBorderSize = attributes.imageBorderSize,
      imageBorderColor = attributes.imageBorderColor,
      imageBorderRadius = attributes.imageBorderRadius,
      imageBorderRadiusTablet = attributes.imageBorderRadiusTablet,
      imageBorderRadiusMobile = attributes.imageBorderRadiusMobile,
      imageShadowColor = attributes.imageShadowColor,
      imageShadowHOffset = attributes.imageShadowHOffset,
      imageShadowVOffset = attributes.imageShadowVOffset,
      imageShadowBlur = attributes.imageShadowBlur,
      imageShadowSpread = attributes.imageShadowSpread,
      imageShowContent = attributes.imageShowContent,
      imagePosition = attributes.imagePosition,
      imageMargin = attributes.imageMargin,
      nameColor = attributes.nameColor,
      nameTextAlign = attributes.nameTextAlign,
      nameFontSize = attributes.nameFontSize,
      nameFontSizeTablet = attributes.nameFontSizeTablet,
      nameFontSizeMobile = attributes.nameFontSizeMobile,
      nameMargin = attributes.nameMargin,
      titleColor = attributes.titleColor,
      titleTextAlign = attributes.titleTextAlign,
      titleFontSize = attributes.titleFontSize,
      titleFontSizeTablet = attributes.titleFontSizeTablet,
      titleFontSizeMobile = attributes.titleFontSizeMobile,
      titleMargin = attributes.titleMargin,
      clientInfoPosition = attributes.clientInfoPosition,
      showContent = attributes.showContent,
      showImage = attributes.showImage,
      showName = attributes.showName,
      showTitle = attributes.showTitle,
      ratingsAlign = attributes.ratingsAlign,
      showRatings = attributes.showRatings,
      ratingsPosition = attributes.ratingsPosition,
      preset = attributes.preset;
  var currentTab = 'layout';

  var _useState = useState(currentTab),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1];

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "pb-panel-head--tabs"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ButtonGroup, {
    className: "pb-panel-head--tabs__wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
    onClick: function onClick() {
      setTab('layout');
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("pb-panel-head--tab", 'layout' === tab ? 'pb-ph-tab--active' : ''),
    icon: "layout"
  }, __('Layout', 'powerful-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
    onClick: function onClick() {
      setTab('style');
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("pb-panel-head--tab", 'style' === tab ? 'pb-ph-tab--active' : ''),
    icon: "edit"
  }, __('Style', 'powerful-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
    onClick: function onClick() {
      setTab('advanced');
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("pb-panel-head--tab", 'advanced' === tab ? 'pb-ph-tab--active' : ''),
    icon: "admin-generic"
  }, __('Advanced', 'powerful-blocks'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "pb-panel-head--tabs__controls"
  }, 'layout' === tab && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Layout', 'powerful-blocks'),
    initialOpen: open
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: __('Preset', 'powerful-blocks'),
    value: preset,
    onChange: function onChange(preset) {
      setAttributes({
        preset: preset
      });
    },
    options: [{
      value: 'design-1',
      label: 'Design 1'
    }, {
      value: 'design-2',
      label: 'Design 2'
    }, {
      value: 'design-3',
      label: 'Design 3'
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: __('Client Info Position', 'powerful-blocks'),
    value: clientInfoPosition,
    onChange: function onChange(clientInfoPosition) {
      setAttributes({
        clientInfoPosition: clientInfoPosition
      });
    },
    options: [{
      value: 'above-content',
      label: 'Above Content'
    }, {
      value: 'after-content',
      label: 'After Content'
    }, {
      value: 'left-content',
      label: 'Left Content'
    }, {
      value: 'right-content',
      label: 'Right Content'
    }]
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Image', 'powerful-blocks'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __('Show Image?', 'powerful-blocks'),
    checked: showImage,
    onChange: function onChange(showImage) {
      setAttributes({
        showImage: showImage
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ImageControl"], {
    i18n: {
      imageSize: __('Image Size', 'powerful-blocks'),
      uploadImage: __('Choose or Upload an image', 'powerful-blocks')
    },
    value: imageData,
    onChange: function onChange(imageData) {
      setAttributes({
        imageData: imageData
      });
    },
    enableImageSizes: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Content', 'powerful-blocks'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __('Show Content?', 'powerful-blocks'),
    checked: showContent,
    onChange: function onChange(showContent) {
      setAttributes({
        showContent: showContent
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Name', 'powerful-blocks'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __('Show Name?', 'powerful-blocks'),
    checked: showName,
    onChange: function onChange(showName) {
      setAttributes({
        showName: showName
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Title', 'powerful-blocks'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __('Show Title?', 'powerful-blocks'),
    checked: showTitle,
    onChange: function onChange(showTitle) {
      setAttributes({
        showTitle: showTitle
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Ratings', 'powerful-blocks'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __('Show Ratings?', 'powerful-blocks'),
    checked: showRatings,
    onChange: function onChange(showRatings) {
      setAttributes({
        showRatings: showRatings
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: __('Ratings Position', 'powerful-blocks'),
    value: ratingsPosition,
    onChange: function onChange(ratingsPosition) {
      setAttributes({
        ratingsPosition: ratingsPosition
      });
    },
    options: [{
      value: 'before-content',
      label: 'Before Content'
    }, {
      value: 'after-content',
      label: 'After Content'
    }, {
      value: 'after-info',
      label: 'After Info'
    }]
  }))), 'style' === tab && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Image', 'powerful-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ResponsiveRangeControl"], {
    label: __('Size', 'powerful-blocks'),
    value: {
      desktop: imageSize,
      tablet: imageSizeTablet,
      mobile: imageSizeMobile
    },
    onChange: function onChange(value, device) {
      if ('desktop' === device) {
        setAttributes({
          imageSize: value
        });
      }

      if ('tablet' === device) {
        setAttributes({
          imageSizeTablet: value
        });
      }

      if ('mobile' === device) {
        setAttributes({
          imageSizeMobile: value
        });
      }
    },
    min: 0,
    max: 500
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    label: __('Border', 'powerful-blocks'),
    className: "pb-border-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Dropdown, {
    className: "pb-border-control--dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
          onToggle = _ref.onToggle;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen,
        icon: "edit"
      });
    },
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "pb-border-control--content"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
        label: __('Border Style', 'powerful-blocks'),
        value: imageBorderStyle,
        onChange: function onChange(imageBorderStyle) {
          setAttributes({
            imageBorderStyle: imageBorderStyle
          });
        },
        options: [{
          value: 'none',
          label: 'None'
        }, {
          value: 'solid',
          label: 'Solid'
        }, {
          value: 'dotted',
          label: 'Dotted'
        }, {
          value: 'dashed',
          label: 'Dashed'
        }, {
          value: 'double',
          label: 'Double'
        }]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __('Border Size', 'powerful-blocks'),
        value: imageBorderSize,
        onChange: function onChange(imageBorderSize) {
          return setAttributes({
            imageBorderSize: imageBorderSize
          });
        },
        min: 0,
        step: 1,
        max: 10
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, __('Border Color', 'powerful-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ColorPalette, {
        value: imageBorderColor,
        onChange: function onChange(imageBorderColor) {
          return setAttributes({
            imageBorderColor: imageBorderColor
          });
        },
        allowReset: true
      }));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ResponsiveRangeControl"], {
    label: __('Border Radius', 'powerful-blocks'),
    value: {
      desktop: imageBorderRadius,
      tablet: imageBorderRadiusTablet,
      mobile: imageBorderRadiusMobile
    },
    onChange: function onChange(value, device) {
      if ('desktop' === device) {
        setAttributes({
          imageBorderRadius: value
        });
      }

      if ('tablet' === device) {
        setAttributes({
          imageBorderRadiusTablet: value
        });
      }

      if ('mobile' === device) {
        setAttributes({
          imageBorderRadiusMobile: value
        });
      }
    },
    min: 0,
    max: 100
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    label: __('Shadow', 'powerful-blocks'),
    className: "pb-shadow-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Dropdown, {
    className: "pb-shadow-control--dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen,
        icon: "edit"
      });
    },
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "pb-shadow-control--content"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, "Shadow")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, __('Color', 'powerful-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ColorPalette, {
        value: imageShadowColor,
        onChange: function onChange(imageShadowColor) {
          return setAttributes({
            imageShadowColor: imageShadowColor
          });
        },
        allowReset: true
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __('Horizontal Offset', 'powerful-blocks'),
        value: imageShadowHOffset,
        onChange: function onChange(imageShadowHOffset) {
          return setAttributes({
            imageShadowHOffset: imageShadowHOffset
          });
        },
        min: 0,
        step: 1,
        max: 10
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __('Vertical Offset', 'powerful-blocks'),
        value: imageShadowVOffset,
        onChange: function onChange(imageShadowVOffset) {
          return setAttributes({
            imageShadowVOffset: imageShadowVOffset
          });
        },
        min: 0,
        step: 1,
        max: 10
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __('Blur', 'powerful-blocks'),
        value: imageShadowBlur,
        onChange: function onChange(imageShadowBlur) {
          return setAttributes({
            imageShadowBlur: imageShadowBlur
          });
        },
        min: 0,
        step: 1,
        max: 10
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __('Spread', 'powerful-blocks'),
        value: imageShadowSpread,
        onChange: function onChange(imageShadowSpread) {
          return setAttributes({
            imageShadowSpread: imageShadowSpread
          });
        },
        min: 0,
        step: 1,
        max: 10
      }));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(__experimentalBoxControl, {
    label: __('Margin', 'powerful-blocks'),
    values: imageMargin,
    onChange: function onChange(imageMargin) {
      setAttributes({
        imageMargin: imageMargin
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
    label: __('Image Position', 'powerful-blocks'),
    value: imagePosition,
    onChange: function onChange(imagePosition) {
      setAttributes({
        imagePosition: imagePosition
      });
    },
    options: [{
      value: 'left',
      label: 'Left'
    }, {
      value: 'right',
      label: 'Right'
    }, {
      value: 'top',
      label: 'Top'
    }, {
      value: 'bottom',
      label: 'Bottom'
    }]
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Content', 'powerful-blocks'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, __('Color', 'powerful-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ColorPalette, {
    value: contentColor,
    onChange: function onChange(value) {
      return setAttributes({
        contentColor: value
      });
    },
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, __('Background Color', 'powerful-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ColorPalette, {
    value: contentBackgroundColor,
    onChange: function onChange(value) {
      return setAttributes({
        contentBackgroundColor: value
      });
    },
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, __('Background Color( Hover )', 'powerful-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ColorPalette, {
    value: hoverContentBackgroundColor,
    onChange: function onChange(value) {
      return setAttributes({
        hoverContentBackgroundColor: value
      });
    },
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["AlignmentControl"], {
    label: __('Alignment', 'powerful-blocks'),
    type: "text",
    value: contentTextAlign,
    onChange: function onChange(contentTextAlign) {
      setAttributes({
        contentTextAlign: contentTextAlign
      });
    }
  }), ('left-content' === clientInfoPosition || 'right-content' === clientInfoPosition) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __('Width (%)', 'powerful-blocks'),
    value: contentWidth,
    onChange: function onChange(contentWidth) {
      return setAttributes({
        contentWidth: contentWidth
      });
    },
    min: 1,
    max: 100,
    step: 1
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ResponsiveRangeControl"], {
    label: __('Font Size', 'powerful-blocks'),
    value: {
      desktop: contentFontSize,
      tablet: contentFontSizeTablet,
      mobile: contentFontSizeMobile
    },
    onChange: function onChange(value, device) {
      if ('desktop' === device) {
        setAttributes({
          contentFontSize: value
        });
      }

      if ('tablet' === device) {
        setAttributes({
          contentFontSizeTablet: value
        });
      }

      if ('mobile' === device) {
        setAttributes({
          contentFontSizeMobile: value
        });
      }
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(__experimentalBoxControl, {
    label: __('Margin', 'powerful-blocks'),
    values: contentMargin,
    onChange: function onChange(contentMargin) {
      setAttributes({
        contentMargin: contentMargin
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(__experimentalBoxControl, {
    label: __('Padding', 'powerful-blocks'),
    values: contentPadding,
    onChange: function onChange(contentPadding) {
      setAttributes({
        contentPadding: contentPadding
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ResponsiveRangeControl"], {
    label: __('Border Radius', 'powerful-blocks'),
    value: {
      desktop: contentBorderRadius,
      tablet: contentBorderRadiusTablet,
      mobile: contentBorderRadiusMobile
    },
    onChange: function onChange(value, device) {
      if ('desktop' === device) {
        setAttributes({
          contentBorderRadius: value
        });
      }

      if ('tablet' === device) {
        setAttributes({
          contentBorderRadiusTablet: value
        });
      }

      if ('mobile' === device) {
        setAttributes({
          contentBorderRadiusMobile: value
        });
      }
    },
    min: 0,
    max: 200
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Name', 'powerful-blocks'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, __('Color', 'powerful-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ColorPalette, {
    value: nameColor,
    onChange: function onChange(value) {
      return setAttributes({
        nameColor: value
      });
    },
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["AlignmentControl"], {
    label: __('Alignment', 'powerful-blocks'),
    type: "text",
    value: nameTextAlign,
    onChange: function onChange(nameTextAlign) {
      setAttributes({
        nameTextAlign: nameTextAlign
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ResponsiveRangeControl"], {
    label: __('Font Size', 'powerful-blocks'),
    value: {
      desktop: nameFontSize,
      tablet: nameFontSizeTablet,
      mobile: nameFontSizeMobile
    },
    onChange: function onChange(value, device) {
      if ('desktop' === device) {
        setAttributes({
          nameFontSize: value
        });
      }

      if ('tablet' === device) {
        setAttributes({
          nameFontSizeTablet: value
        });
      }

      if ('mobile' === device) {
        setAttributes({
          nameFontSizeMobile: value
        });
      }
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(__experimentalBoxControl, {
    label: __('Margin', 'powerful-blocks'),
    values: nameMargin,
    onChange: function onChange(nameMargin) {
      setAttributes({
        nameMargin: nameMargin
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Title', 'powerful-blocks'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, __('Color', 'powerful-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ColorPalette, {
    value: titleColor,
    onChange: function onChange(value) {
      return setAttributes({
        titleColor: value
      });
    },
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["AlignmentControl"], {
    label: __('Alignment', 'powerful-blocks'),
    type: "text",
    value: titleTextAlign,
    onChange: function onChange(titleTextAlign) {
      setAttributes({
        titleTextAlign: titleTextAlign
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components__WEBPACK_IMPORTED_MODULE_3__["ResponsiveRangeControl"], {
    label: __('Font Size', 'powerful-blocks'),
    value: {
      desktop: titleFontSize,
      tablet: titleFontSizeTablet,
      mobile: titleFontSizeMobile
    },
    onChange: function onChange(value, device) {
      if ('desktop' === device) {
        setAttributes({
          titleFontSize: value
        });
      }

      if ('tablet' === device) {
        setAttributes({
          titleFontSizeTablet: value
        });
      }

      if ('mobile' === device) {
        setAttributes({
          titleFontSizeMobile: value
        });
      }
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(__experimentalBoxControl, {
    label: __('Margin', 'powerful-blocks'),
    values: titleMargin,
    onChange: function onChange(titleMargin) {
      setAttributes({
        titleMargin: titleMargin
      });
    }
  }))), 'advanced' === tab && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Background', 'powerful-blocks')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, __('Background Color', 'powerful-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ColorPalette, {
    value: backgroundColor,
    onChange: function onChange(backgroundColor) {
      return setAttributes({
        backgroundColor: backgroundColor
      });
    },
    allowReset: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, __('Background Color ( Hover )', 'powerful-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ColorPalette, {
    value: hoverBackgroundColor,
    onChange: function onChange(value) {
      return setAttributes({
        hoverBackgroundColor: value
      });
    },
    allowReset: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Spacing', 'powerful-blocks'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(__experimentalBoxControl, {
    label: __('Padding', 'powerful-blocks'),
    values: padding,
    onChange: function onChange(padding) {
      setAttributes({
        padding: padding
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Box Shadow', 'powerful-blocks'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    label: __('Shadow', 'powerful-blocks'),
    className: "pb-shadow-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Dropdown, {
    className: "pb-shadow-control--dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref3) {
      var isOpen = _ref3.isOpen,
          onToggle = _ref3.onToggle;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen,
        icon: "edit"
      });
    },
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "pb-shadow-control--content"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, "Shadow")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, __('Color', 'powerful-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ColorPalette, {
        value: shadowColor,
        onChange: function onChange(shadowColor) {
          return setAttributes({
            shadowColor: shadowColor
          });
        },
        allowReset: true
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __('Horizontal Offset', 'powerful-blocks'),
        value: shadowHOffset,
        onChange: function onChange(shadowHOffset) {
          return setAttributes({
            shadowHOffset: shadowHOffset
          });
        },
        min: 0,
        step: 1,
        max: 10
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __('Vertical Offset', 'powerful-blocks'),
        value: shadowVOffset,
        onChange: function onChange(shadowVOffset) {
          return setAttributes({
            shadowVOffset: shadowVOffset
          });
        },
        min: 0,
        step: 1,
        max: 10
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __('Blur', 'powerful-blocks'),
        value: shadowBlur,
        onChange: function onChange(shadowBlur) {
          return setAttributes({
            shadowBlur: shadowBlur
          });
        },
        min: 0,
        step: 1,
        max: 10
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
        label: __('Spread', 'powerful-blocks'),
        value: shadowSpread,
        onChange: function onChange(shadowSpread) {
          return setAttributes({
            shadowSpread: shadowSpread
          });
        },
        min: 0,
        step: 1,
        max: 10
      }));
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "../../../../../../../../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./src/style.js");






var save = function save(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className;
  var blockId = attributes.blockId,
      content = attributes.content,
      imageData = attributes.imageData,
      name = attributes.name,
      title = attributes.title,
      imagePosition = attributes.imagePosition,
      showContent = attributes.showContent,
      showImage = attributes.showImage,
      showName = attributes.showName,
      showTitle = attributes.showTitle,
      showRatings = attributes.showRatings,
      ratingsPosition = attributes.ratingsPosition,
      preset = attributes.preset;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes: attributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "pb-testimonial-".concat(blockId)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'pb-testimonial-wrapper', 'pb-testimonial-client-info-position', preset)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "pb-testimonial--conr"
  }, true === showRatings && 'before-content' === ratingsPosition && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "pb-testimonial--rating"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null)), !_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].isEmpty(content) && true === showContent && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    tagName: "div",
    className: "pb-testimonial--content",
    value: content
  }), true === showRatings && 'after-content' === ratingsPosition && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "pb-testimonial--rating"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "pb-testimonial--details image-position-".concat(imagePosition)
  }, true === showImage && imageData.url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "pb-testimonial-image"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: imageData.url,
    alt: imageData.alt
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "pb-testimonial-info"
  }, !_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].isEmpty(name) && true === showName && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    tagName: "h3",
    className: "pb-testimonial-info--name",
    value: name
  }), !_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].isEmpty(title) && true === showTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    tagName: "h4",
    className: "pb-testimonial-info--title",
    value: title
  }), true === showRatings && 'after-info' === ratingsPosition && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "pb-testimonial--rating"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/utils */ "../../components/utils.js");


var Styles = function Styles(props) {
  var attributes = props.attributes;
  var blockId = attributes.blockId,
      backgroundColor = attributes.backgroundColor,
      hoverBackgroundColor = attributes.hoverBackgroundColor,
      padding = attributes.padding,
      shadowColor = attributes.shadowColor,
      shadowHOffset = attributes.shadowHOffset,
      shadowVOffset = attributes.shadowVOffset,
      shadowBlur = attributes.shadowBlur,
      shadowSpread = attributes.shadowSpread,
      contentBackgroundColor = attributes.contentBackgroundColor,
      hoverContentBackgroundColor = attributes.hoverContentBackgroundColor,
      contentColor = attributes.contentColor,
      contentWidth = attributes.contentWidth,
      contentTextAlign = attributes.contentTextAlign,
      contentPadding = attributes.contentPadding,
      contentFontSize = attributes.contentFontSize,
      contentFontSizeTablet = attributes.contentFontSizeTablet,
      contentFontSizeMobile = attributes.contentFontSizeMobile,
      contentMargin = attributes.contentMargin,
      contentBorderRadius = attributes.contentBorderRadius,
      contentBorderRadiusTablet = attributes.contentBorderRadiusTablet,
      contentBorderRadiusMobile = attributes.contentBorderRadiusMobile,
      imageSize = attributes.imageSize,
      imageSizeTablet = attributes.imageSizeTablet,
      imageSizeMobile = attributes.imageSizeMobile,
      imageBorderStyle = attributes.imageBorderStyle,
      imageBorderSize = attributes.imageBorderSize,
      imageBorderColor = attributes.imageBorderColor,
      imageBorderRadius = attributes.imageBorderRadius,
      imageBorderRadiusTablet = attributes.imageBorderRadiusTablet,
      imageBorderRadiusMobile = attributes.imageBorderRadiusMobile,
      imageShadowColor = attributes.imageShadowColor,
      imageShadowHOffset = attributes.imageShadowHOffset,
      imageShadowVOffset = attributes.imageShadowVOffset,
      imageShadowBlur = attributes.imageShadowBlur,
      imageShadowSpread = attributes.imageShadowSpread,
      imageShowContent = attributes.imageShowContent,
      imagePosition = attributes.imagePosition,
      imageMargin = attributes.imageMargin,
      nameColor = attributes.nameColor,
      nameTextAlign = attributes.nameTextAlign,
      nameFontSize = attributes.nameFontSize,
      nameFontSizeTablet = attributes.nameFontSizeTablet,
      nameFontSizeMobile = attributes.nameFontSizeMobile,
      nameMargin = attributes.nameMargin,
      titleColor = attributes.titleColor,
      titleTextAlign = attributes.titleTextAlign,
      titleFontSize = attributes.titleFontSize,
      titleFontSizeTablet = attributes.titleFontSizeTablet,
      titleFontSizeMobile = attributes.titleFontSizeMobile,
      titleMargin = attributes.titleMargin,
      clientInfoPosition = attributes.clientInfoPosition,
      ratingsAlign = attributes.ratingsAlign,
      preset = attributes.preset;
  var selectorPrefix = "#pb-testimonial-".concat(blockId);
  var rules = {
    desktop: {
      '.pb-testimonial-wrapper': {
        display: 'flex',
        'flex-direction': 'column',
        'background-color': backgroundColor ? backgroundColor : undefined,
        padding: padding.top + ' ' + padding.right + ' ' + padding.bottom + ' ' + padding.left,
        'box-shadow': shadowHOffset + 'px ' + shadowVOffset + 'px ' + shadowBlur + 'px ' + shadowSpread + 'px ' + shadowColor
      },
      '.pb-testimonial-wrapper:hover': {
        'background-color': hoverBackgroundColor ? hoverBackgroundColor : undefined
      },
      '.pb-testimonial-image img': {
        height: imageSize ? imageSize + 'px' : undefined,
        width: imageSize ? imageSize + 'px' : undefined,
        'border-radius': imageBorderRadius ? imageBorderRadius + 'px' : undefined,
        'border-width': imageBorderSize ? imageBorderSize + 'px' : undefined,
        'border-style': imageBorderStyle ? imageBorderStyle : undefined,
        'border-color': imageBorderColor ? imageBorderColor : undefined,
        margin: imageMargin.top + ' ' + imageMargin.right + ' ' + imageMargin.bottom + ' ' + imageMargin.left,
        'box-shadow': imageShadowHOffset + 'px ' + imageShadowVOffset + 'px ' + imageShadowBlur + 'px ' + imageShadowSpread + 'px ' + imageShadowColor
      },
      '.pb-testimonial-info--name': {
        color: nameColor ? nameColor + '!important' : undefined,
        'font-size': nameFontSize ? nameFontSize + 'px' : undefined,
        'text-align': nameTextAlign ? nameTextAlign : undefined,
        margin: nameMargin.top + ' ' + nameMargin.right + ' ' + nameMargin.bottom + ' ' + nameMargin.left
      },
      '.pb-testimonial--content': {
        color: contentColor ? contentColor : undefined,
        'font-size': contentFontSize ? contentFontSize + 'px' : undefined,
        'text-align': contentTextAlign ? contentTextAlign : undefined
      },
      '.pb-testimonial--conr': {
        'background-color': contentBackgroundColor ? contentBackgroundColor : undefined,
        padding: contentPadding.top + ' ' + contentPadding.right + ' ' + contentPadding.bottom + ' ' + contentPadding.left,
        margin: contentMargin.top + ' ' + contentMargin.right + ' ' + contentMargin.bottom + ' ' + contentMargin.left,
        'border-radius': contentBorderRadius ? contentBorderRadius + 'px' : undefined
      },
      '.pb-testimonial--conr:hover': {
        'background-color': hoverContentBackgroundColor ? hoverContentBackgroundColor + '!important' : undefined
      },
      '.pb-testimonial-info--title': {
        color: titleColor ? titleColor + '!important' : undefined,
        'font-size': titleFontSize ? titleFontSize + 'px' : undefined,
        'text-align': titleTextAlign ? titleTextAlign : undefined,
        margin: titleMargin.top + ' ' + titleMargin.right + ' ' + titleMargin.bottom + ' ' + titleMargin.left
      },
      '.pb-testimonial--rating': {
        'text-align': ratingsAlign ? ratingsAlign : undefined
      }
    },
    tablet: {
      '.pb-testimonial-image img': {
        height: imageSizeTablet ? imageSizeTablet + 'px' : undefined,
        width: imageSizeTablet ? imageSizeTablet + 'px' : undefined,
        'border-radius': imageBorderRadiusTablet ? imageBorderRadiusTablet + 'px' : undefined
      },
      '.pb-testimonial-info--name': {
        'font-size': nameFontSizeTablet ? nameFontSizeTablet + 'px' : undefined
      },
      '.pb-testimonial--content': {
        'font-size': contentFontSizeTablet ? contentFontSizeTablet + 'px' : undefined
      },
      '.pb-testimonial--conr': {
        'border-radius': contentBorderRadiusTablet ? contentBorderRadiusTablet + 'px' : undefined
      },
      '.pb-testimonial-info--title': {
        'font-size': titleFontSizeTablet ? titleFontSizeTablet + 'px' : undefined
      }
    },
    mobile: {
      '.pb-testimonial-image img': {
        height: imageSizeMobile ? imageSizeMobile + 'px' : undefined,
        width: imageSizeMobile ? imageSizeMobile + 'px' : undefined,
        'border-radius': imageBorderRadiusMobile ? imageBorderRadiusMobile + 'px' : undefined
      },
      '.pb-testimonial-info--name': {
        'font-size': nameFontSizeMobile ? nameFontSizeMobile + 'px' : undefined
      },
      '.pb-testimonial--content': {
        'font-size': contentFontSizeMobile ? contentFontSizeMobile + 'px' : undefined
      },
      '.pb-testimonial--conr': {
        'border-radius': contentBorderRadiusMobile ? contentBorderRadiusMobile + 'px' : undefined
      },
      '.pb-testimonial-info--title': {
        'font-size': titleFontSizeMobile ? titleFontSizeMobile + 'px' : undefined
      }
    }
  };

  if ('above-content' === clientInfoPosition) {
    rules.desktop['.pb-testimonial-client-info-position'] = {
      'flex-direction': 'column-reverse'
    };
  }

  if ('after-content' === clientInfoPosition) {
    rules.desktop['.pb-testimonial-client-info-position'] = {
      'flex-direction': 'column'
    };
  }

  if ('left-content' === clientInfoPosition) {
    rules.desktop['.pb-testimonial-client-info-position'] = {
      'flex-direction': 'row-reverse',
      'align-items': 'center',
      'justify-content': 'space-between'
    };
  }

  if ('right-content' === clientInfoPosition) {
    rules.desktop['.pb-testimonial-client-info-position'] = {
      'flex-direction': 'row',
      'align-items': 'center',
      'justify-content': 'space-between'
    };
  }

  if ('left-content' === clientInfoPosition || 'right-content' === clientInfoPosition) {
    rules.desktop['.pb-testimonial--conr'] = {
      width: contentWidth ? contentWidth + '%' : undefined
    };
  } // Designs


  if ('design-2' === preset) {
    rules.desktop['.design-2'] = {
      'background-color': backgroundColor ? backgroundColor : 'transparent',
      padding: '0px '
    };
    rules.desktop['.design-2 .pb-testimonial--conr'] = {
      'background-color': contentBackgroundColor ? contentBackgroundColor : '#6a4adc'
    };
    rules.desktop['.design-2 .pb-testimonial--details'] = {
      'justify-content': 'flex-start'
    };
    rules.desktop['.design-2 .pb-testimonial-info--name'] = {
      color: nameColor ? nameColor : '#111'
    };
    rules.desktop['.design-2 .pb-testimonial-info--title'] = {
      color: titleColor ? titleColor : '#111'
    };
  }

  if ('design-3' === preset) {
    rules.desktop['.design-3'] = {
      'background-color': backgroundColor ? backgroundColor : 'transparent',
      padding: '0px '
    };
    rules.desktop['.design-3 .pb-testimonial--conr'] = {
      'background-color': contentBackgroundColor ? contentBackgroundColor : '#6a4adc',
      'border-radius': contentBorderRadius ? contentBorderRadius + 'px' : '100px',
      padding: contentPadding.top || '20px' + ' ' + contentPadding.right || '20px' + ' ' + contentPadding.bottom || '20px' + ' ' + contentPadding.left || '20px'
    };
    rules.tablet['.design-3 .pb-testimonial--conr'] = {
      'border-radius': contentBorderRadiusTablet ? contentBorderRadiusTablet + 'px' : '100px'
    };
    rules.mobile['.design-3 .pb-testimonial--conr'] = {
      'border-radius': contentBorderRadiusMobile ? contentBorderRadiusMobile + 'px' : '100px'
    };
    rules.desktop['.design-2 .pb-testimonial-info--name'] = {
      color: nameColor ? nameColor : '#111'
    };
    rules.desktop['.design-2 .pb-testimonial-info--title'] = {
      color: titleColor ? titleColor : '#111'
    };
  }

  return Object(_components_utils__WEBPACK_IMPORTED_MODULE_0__["renderStyle"])(rules, selectorPrefix);
};

/* harmony default export */ __webpack_exports__["default"] = (Styles);

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
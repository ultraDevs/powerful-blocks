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

/***/ "./node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

module.exports = _objectDestructuringEmpty;

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
  headline: {
    type: 'string',
    default: ''
  },
  date: {
    type: 'string',
    default: ''
  },
  days: {
    type: 'string',
    default: '0'
  },
  daysLabel: {
    type: 'string',
    default: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Days', 'powerful-blocks')
  },
  showDays: {
    type: 'boolean',
    default: true
  },
  months: {
    type: 'string',
    default: '0'
  },
  hours: {
    type: 'string',
    default: '0'
  },
  hoursLabel: {
    type: 'string',
    default: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Hours', 'powerful-blocks')
  },
  showHours: {
    type: 'boolean',
    default: true
  },
  minutes: {
    type: 'string',
    default: '0'
  },
  minutesLabel: {
    type: 'string',
    default: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Minutes', 'powerful-blocks')
  },
  showMinutes: {
    type: 'boolean',
    default: true
  },
  seconds: {
    type: 'string',
    default: '0'
  },
  secondsLabel: {
    type: 'string',
    default: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Seconds', 'powerful-blocks')
  },
  showSeconds: {
    type: 'boolean',
    default: true
  },
  boxBackground: {
    type: 'string',
    default: '#111'
  },
  boxHeight: {
    type: 'number',
    default: ''
  },
  boxWidth: {
    type: 'number',
    default: ''
  },
  boxSpace: {
    type: 'object',
    default: {
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px'
    }
  },
  itemsAlign: {
    type: 'string',
    default: 'center'
  },
  padding: {
    type: 'object',
    default: {
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px'
    }
  },
  borderRadius: {
    type: 'object',
    default: {
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px'
    }
  },
  borderStyle: {
    type: 'string',
    default: 'solid'
  },
  borderWidth: {
    type: 'number',
    default: 1
  },
  borderColor: {
    type: 'string',
    default: '#111'
  },
  digitColor: {
    type: 'string',
    default: '#111'
  },
  digitFontSize: {
    type: 'number',
    default: 18
  },
  digitFontSizeTablet: {
    type: 'number',
    default: 17
  },
  digitFontSizeMobile: {
    type: 'number',
    default: 16
  },
  labelColor: {
    type: 'string',
    default: '#111'
  },
  labelFontSize: {
    type: 'number',
    default: 18
  },
  labelFontSizeTablet: {
    type: 'number',
    default: 17
  },
  labelFontSizeMobile: {
    type: 'number',
    default: 16
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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./src/style.js");







var edit = function edit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var blockId = attributes.blockId,
      headline = attributes.headline;

  if (props.isSelected && !props.blockId) {
    var clientId = props.clientId;
    setAttributes({
      blockId: clientId.replace(/-/g, '')
    });
  }

  return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_inspector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: attributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "pb-countdown-".concat(blockId)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "pb-countdown-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    className: "pb-countdown--headline",
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Headline', 'powerful-blocks'),
    multiline: "false",
    value: headline,
    keepPlaceholderOnFocus: true,
    onChange: function onChange(headline) {
      setAttributes({
        headline: headline
      });
    },
    tagName: "h3"
  }))))];
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
  viewBox: "0 0 512 512"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "red",
  d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z"
})));

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









Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('powerful-blocks/countdown', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Countdown', 'powerful-blocks'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Default Block allows you to add countdown timer', 'powerful-blocks'),
  category: 'powerful-blocks',
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
  supports: {
    html: false
  },
  keywords: ['ultrablocks', 'ultra blocks', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('countdown timer', 'powerful-blocks')],
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
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components */ "../../components/index.js");







var Inspector = function Inspector(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;

  _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0___default()(attributes);

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Content', 'powerful-blocks')
  }));
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
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./src/style.js");





var save = function save(props) {
  var attributes = props.attributes;
  var blockId = attributes.blockId;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attributes: attributes
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "pb-default-".concat(blockId)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "dd")));
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
  var blockId = attributes.blockId;
  var selectorPrefix = "#pb-default-".concat(blockId);
  var rules = {
    desktop: {
      '.pb-default': {
        'color': '#fff'
      }
    },
    tablet: {},
    mobile: {}
  };
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

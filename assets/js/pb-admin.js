!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=186)}({186:function(t,e){jQuery((function(t){t('<div><svg xmlns="http://www.w3.org/2000/svg" class="pb-icon-gradient" height="0" width="0" style="opacity: 0"><defs><linearGradient id="powerfulblocks-gradient"><stop offset="20%" stop-color="#5820e5" stop-opacity="1"></stop><stop offset="90%" stop-color=" #f30d55" stop-opacity="1"></stop></linearGradient></defs></svg></div>').prependTo("body"),t("#pb-save-blocks").hide(),t(".pb-tabs__content .pb-tabs__item").hide(),t(".pb-tabs__content .pb-tabs__item:first").show(),t(".pb-tabs__nav li:first").addClass("tabs__is-active");var e=window.location.hash;function n(e){t(".pb-tabs__nav li").removeClass("tabs__is-active"),t(".pb-tabs__nav li").find('a[href="'+e+'"').parent().addClass("tabs__is-active"),t(".pb-tabs__content .pb-tabs__item").hide(),t(".pb-tabs__content").find(e).show(),"#blocks"===t(".tabs__is-active a").attr("href")?t("#pb-save-blocks").show():t("#pb-save-blocks").hide(),t("#toplevel_page_powerful-blocks .wp-submenu").find("a").filter((function(t,n){return e===n.hash})).parent().addClass("current").siblings().removeClass("current")}e&&(tab=e.substring(e.indexOf("#")),n(tab)),t(".pb-tabs__nav").find("a").on("click",(function(e){e.preventDefault();t(this);n(t(this).attr("href"))})),t(window).on("hashchange",(function(t){t.preventDefault(),n(window.location.hash)}))}))}});
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueAdvancedCalcultator"] = factory();
	else
		root["VueAdvancedCalcultator"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Standard_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_translations_translator__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
	components: {
		Standard: __WEBPACK_IMPORTED_MODULE_0__components_Standard_vue__["a" /* default */]
	},
	name: "VueAdvancedCalculator",
	props: {
		id: { type: String, default: 'vac-' + new Date().getTime() },
		title: { type: String, default: 'Vue Advanced Calculator' },
		description: { type: String, default: 'An advanced scientific calculator for Vue.js' },
		defaultMode: { type: String, default: 'standard' },
		locale: { type: String, default: 'fr' }
	},
	data: () => ({
		open_sidebar: false,
		mode: ''
	}),

	mounted() {
		this.mode = this.defaultMode;
	},

	methods: {
		/**
   * Effectue des traductions dans la langue choisie
   * 
   * @param {String} key 
   * @return {String}
   */
		__vac_translate(key) {
			return Object(__WEBPACK_IMPORTED_MODULE_1__utils_translations_translator__["a" /* default */])(key, this.locale);
		},
		/**
   * Change le type de calculatrice
   * 
   * @param {String} mode
   */
		changeMode(mode) {
			this.mode = mode;
			this.open_sidebar = false;
		}
	}
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_translations_translator__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'StandardCalculator',
	props: {
		locale: { type: String, required: true }
	},
	data: () => ({
		current: '0',
		result: 0,
		operation: null,

		operators: ['/', '*', '-', '+']
	}),
	computed: {
		current_last() {
			return this.current[this.current.length - 1];
		}
	},
	mounted() {
		this.keyboardPatch();
	},
	methods: {
		/**
   * Effectue des traductions dans la langue choisie
   * 
   * @param {String} key 
   * @return {String}
   */
		__vac_translate(key) {
			return Object(__WEBPACK_IMPORTED_MODULE_0__utils_translations_translator__["a" /* default */])(key, this.locale);
		},
		/**
   * Verifie qu'un element est un nombre
   * 
   * @param {any} x
   * @return {Boolean}
   */
		isNumber(x) {
			return !isNaN(parseFloat(x)) && isFinite(x);
		},
		/**
   * Stimulation de l'utilisation du clavier
   */
		keyboardPatch() {
			document.querySelectorAll('.vac-container[tabindex="-1"]').forEach(el => {
				el.addEventListener('keydown', e => {
					const key = e.key;
					if (this.isNumber(key) || ['(', ')', '.'].includes(key)) {
						this.addElement(key);
					}
					if (this.operators.includes(key)) {
						this.addOperator(key);
					}
					if (key == 'Backspace') {
						this.backspace();
					}
					if (key == 'Enter') {
						this.equals();
					}
					if (key == '²') {
						this.sqr();
					}
					if (key == '%') {
						this.percent();
					}
					if (key.toLowerCase() == 'c') {
						this.clear();
					}
				});
			});
		},

		addElement(element) {
			if (this.current == '0' && element != '.') {
				this.current = '';
			}
			if (this.operation != null && this.operation != '' && this.isNumber(this.current)) {
				this.current = '';
				this.operation = null;
			}
			this.current += '' + element;
		},
		clear() {
			this.operation = null;
			this.current = '0';
		},
		backspace() {
			if (this.isNumber(this.current) || typeof this.current != 'string') {
				this.clear();
				return;
			}
			this.current = this.current.substring(0, this.current.length - 1);
			if (this.current == '') {
				this.current = '0';
			}
		},
		addOperator(operator) {
			if (this.operators.includes(operator)) {
				if (this.operators.includes(this.current_last)) {
					this.backspace();
				}
				this.current += operator;
			}
		},
		plusMinus() {
			this.current = '' + this.current;
			if (this.current != '0' && this.current.charAt(0) === "-") {
				this.current = this.current.slice(1);
			} else {
				this.current = "-" + this.current;
			}
		},

		equals() {
			this.operation = `${this.current} =`;
			if (this.current.indexOf("^") > -1) {
				var base = this.current.slice(0, this.current.indexOf("^"));
				var exponent = this.current.slice(this.current.indexOf("^") + 1);
				this.current = eval("Math.pow(" + base + "," + exponent + ")");
			} else {
				this.current = eval(this.current);
			}
		},

		sqr() {
			if (this.isNumber(this.current)) {
				this.operation = `sqr(${this.current})`;
				this.current = this.current * this.current;
			}
		},
		sqrt() {
			if (this.isNumber(this.current)) {
				this.operation = `√(${this.current})`;
				this.current = Math.sqrt(this.current);
			}
		},
		percent() {
			if (this.isNumber(this.current)) {
				this.operation = `${this.current}%`;
				this.current = this.current / 100;
			}
		},
		inverse() {
			if (this.isNumber(this.current)) {
				this.operation = `1/(${this.current})`;
				this.current = 1 / this.current;
			}
		}
	}
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fr__ = __webpack_require__(9);


const data = {
	fr: __WEBPACK_IMPORTED_MODULE_0__fr__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = (function (key, locale = 'fr') {
	if (!(locale in data)) {
		locale = 'fr';
	}
	return data[locale][key];
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Calculator_vue__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VueAdvancedCalculator", function() { return __WEBPACK_IMPORTED_MODULE_0__Calculator_vue__["a"]; });

const Calculator = {
  install(Vue) {
    Vue.component('vue-advanced-calcultator', __WEBPACK_IMPORTED_MODULE_0__Calculator_vue__["a" /* default */]);
  }
};
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Calculator);
}

/* harmony default export */ __webpack_exports__["default"] = (Calculator);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Calculator_vue__ = __webpack_require__(1);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3300ce94_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Calculator_vue__ = __webpack_require__(11);
function injectStyle (ssrContext) {
  __webpack_require__(6)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3300ce94"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Calculator_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3300ce94_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Calculator_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Standard_vue__ = __webpack_require__(2);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d9f39f22_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Standard_vue__ = __webpack_require__(10);
function injectStyle (ssrContext) {
  __webpack_require__(8)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Standard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d9f39f22_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Standard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	about: 'A propos',
	area: 'Surface',
	calculator: "Calculatrice",
	converter: "Convertisseur",
	currency: "Devise",
	data: 'Données',
	date_calculation: 'Calcul de la date',
	hour: 'Heure',
	length: 'Longueur',
	scientific: 'Scientifique',
	standard: "Standard",
	weight_and_mass: 'Poids et masse'
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"vac-screen"},[_c('div',{staticClass:"w-100 text-right vac-screen-operation"},[_vm._v(_vm._s(_vm.operation))]),_vm._v(" "),_c('div',{staticClass:"w-100 text-right vac-screen-result"},[_vm._v(_vm._s(_vm.current))])]),_vm._v(" "),_c('div',[_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.percent()}}},[_vm._v("%")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.clear()}}},[_vm._v("CE")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.clear()}}},[_vm._v("C")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.backspace()}}},[_vm._v("← Backspace")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.inverse()}}},[_vm._v("1/x")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.sqr()}}},[_vm._v("x²")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.sqrt()}}},[_vm._v("√")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement('(')}}},[_vm._v("(")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){_vm.addElement(')')}}},[_vm._v(")")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(7)}}},[_vm._v("7")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(8)}}},[_vm._v("8")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(9)}}},[_vm._v("9")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('/')}}},[_vm._v("/")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":""}},[_vm._v("M+")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(4)}}},[_vm._v("4")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(5)}}},[_vm._v("5")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(6)}}},[_vm._v("6")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('*')}}},[_vm._v("*")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":""}},[_vm._v("M-")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(1)}}},[_vm._v("1")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(2)}}},[_vm._v("2")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(3)}}},[_vm._v("3")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('-')}}},[_vm._v("-")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":""}},[_vm._v("MS")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.plusMinus()}}},[_vm._v("±")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(0)}}},[_vm._v("0")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement('.')}}},[_vm._v(".")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('+')}}},[_vm._v("+")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light equals",on:{"click":function($event){return _vm.equals()}}},[_vm._v("=")])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vac-container position-relative w-100 border rounded",attrs:{"id":_vm.id,"tabindex":"-1"}},[_c('div',{staticClass:"vac-overlay",class:{'active': _vm.open_sidebar},on:{"click":function($event){_vm.open_sidebar = !_vm.open_sidebar}}}),_vm._v(" "),_c('nav',{staticClass:"vac-sidebar d-flex flex-column justify-content-between",class:{'active': _vm.open_sidebar}},[_c('div',{staticClass:"vac-dismiss-btn text-center rounded-circle position-absolute",on:{"click":function($event){_vm.open_sidebar = !_vm.open_sidebar}}},[_c('i',{staticClass:"fas fa-times"})]),_vm._v(" "),_c('div',{staticClass:"vac-sidebar-header px-1 pt-1 text-center"},[_c('h4',{staticClass:"h5 font-weight-bold vac-sidebar-title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('h5',{staticClass:"h6 text-muted"},[_vm._v(_vm._s(_vm.description))])]),_vm._v(" "),_c('div',{staticClass:"vac-sidebar-menu container"},[_c('ul',{staticClass:"list-unstyled w-100"},[_c('h5',{staticClass:"font-weight-bold text-muted h6"},[_vm._v(_vm._s(_vm.__vac_translate('calculator')))]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'standard'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('standard')}}},[_c('i',{staticClass:"fa fa-calculator"}),_vm._v(" "+_vm._s(_vm.__vac_translate('standard')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'scientific'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('scientific')}}},[_c('i',{staticClass:"fa fa-flask"}),_vm._v(" "+_vm._s(_vm.__vac_translate('scientific')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'date_calculation'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('date_calculation')}}},[_c('i',{staticClass:"fa fa-calendar-alt"}),_vm._v(" "+_vm._s(_vm.__vac_translate('date_calculation')))])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('h5',{staticClass:"font-weight-bold text-muted h6"},[_vm._v(_vm._s(_vm.__vac_translate('converter')))]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'currency'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('currency')}}},[_c('i',{staticClass:"fa fa-dollar-sign"}),_vm._v(" "+_vm._s(_vm.__vac_translate('currency')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'length'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('length')}}},[_c('i',{staticClass:"fa fa-ruler-combined"}),_vm._v(" "+_vm._s(_vm.__vac_translate('length')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'area'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('area')}}},[_c('i',{staticClass:"fa fa-th"}),_vm._v(" "+_vm._s(_vm.__vac_translate('area')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'weight_and_mass'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('weight_and_mass')}}},[_c('i',{staticClass:"fa fa-weight-hanging"}),_vm._v(" "+_vm._s(_vm.__vac_translate('weight_and_mass')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'hour'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('hour')}}},[_c('i',{staticClass:"fa fa-clock"}),_vm._v(" "+_vm._s(_vm.__vac_translate('hour')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'data'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('data')}}},[_c('i',{staticClass:"fa fa-hdd"}),_vm._v(" "+_vm._s(_vm.__vac_translate('data')))])])])]),_vm._v(" "),_c('div',{staticClass:"vac-sidebar-footer p-1 w-100"},[_c('div',{staticClass:"btn-group w-100 btn-group-block"},[_c('button',{staticClass:"btn btn-sm btn-light btn-block",attrs:{"type":"button"}},[_vm._v(_vm._s(_vm.__vac_translate('about')))])])])]),_vm._v(" "),_c('div',{staticClass:"vac-content w-100 p-1"},[_c('div',{staticClass:"d-flex justify-content-between mb-1"},[_c('button',{staticClass:"btn btn-sm btn-secondary",on:{"click":function($event){_vm.open_sidebar = !_vm.open_sidebar}}},[_c('i',{staticClass:"fa fa-bars"})]),_vm._v(" "),_c('div',{staticClass:"text-center"},[_c('h4',{staticClass:"font-weight-bold h5"},[_vm._v(_vm._s(_vm.__vac_translate(_vm.mode)))]),_vm._v(" "),_c('h5',{staticClass:"font-weight-bold text-muted small m-0"},[_vm._v(_vm._s(_vm.title))])]),_vm._v(" "),_vm._m(0)]),_vm._v(" "),(_vm.mode == 'standard')?_c('standard',{attrs:{"locale":_vm.locale}}):_vm._e()],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn btn-sm btn-light"},[_c('i',{staticClass:"fa fa-undo"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});
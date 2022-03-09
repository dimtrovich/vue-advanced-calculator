(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueAdvancedCalculator"] = factory();
	else
		root["VueAdvancedCalculator"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_translations_translator__ = __webpack_require__(11);


/* harmony default export */ __webpack_exports__["a"] = ({
	props: {
		locale: { type: String, required: true },
		id: { type: String, required: true }
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
   * Formate un nombre pour etre plus facile à lire
   * 
   * @param {Number} x 
   * @param {Integer} precision 
   * @example 12345.67 ==> 12 345.67
   */
		formatNumber(x, precision = 5) {
			const parts = x.toString().split('.');
			const result = [];
			result.push(parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " "));
			if (parts[1]) {
				result.push(parts[1].substring(0, precision));
			}
			return result.join('.');
		}
	}
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_calculators_DateCalculation_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_calculators_Scientific_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_calculators_Standard_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_vac__ = __webpack_require__(1);
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
	name: "VueAdvancedCalculator",
	components: {
		Standard: __WEBPACK_IMPORTED_MODULE_2__components_calculators_Standard_vue__["a" /* default */],
		Scientific: __WEBPACK_IMPORTED_MODULE_1__components_calculators_Scientific_vue__["a" /* default */],
		DateCalculation: __WEBPACK_IMPORTED_MODULE_0__components_calculators_DateCalculation_vue__["a" /* default */]
	},
	mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_vac__["a" /* default */]],
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_vac__ = __webpack_require__(1);
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
	name: 'DateCalculation',
	mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_vac__["a" /* default */]],
	data: () => ({
		type: 'operations',
		from: currentDate(),
		to: currentDate(),
		operation: {
			type: 'add',
			years: 0,
			months: 0,
			days: 0
		}
	}),
	computed: {
		/**
   * Difference en heure
   */
		difference_dates() {
			const date1 = new Date(this.from).getTime();
			const date2 = new Date(this.to).getTime();

			if (date1 > date2) {
				return date1 - date2;
			}
			return date2 - date1;
		},
		/**
   * Difference en jours
   */
		difference_days() {
			return this.difference_dates / (1000 * 3600 * 24);
		},
		/**
   * Difference global
   */
		difference() {
			let diff = this.difference_days;

			let result = [];

			let diffYear = parseInt(diff / 365);
			diff = diff % 365;
			if (diffYear > 0) {
				let res = `${diffYear} `;
				res += diffYear > 1 ? this.__vac_translate('years') : this.__vac_translate('year');
				result.push(res);
			}

			let diffMonth = parseInt(diff / 30);
			diff = diff % 30;
			if (diffMonth > 0) {
				let res = `${diffMonth} `;
				res += diffMonth > 1 ? this.__vac_translate('months') : this.__vac_translate('month');
				result.push(res);
			}

			let diffWeek = parseInt(diff / 7);
			diff = diff % 7;
			if (diffWeek > 0) {
				let res = `${diffWeek} `;
				res += diffWeek > 1 ? this.__vac_translate('weeks') : this.__vac_translate('week');
				result.push(res);
			}

			if (diff > 0) {
				let res = `${diff} `;
				res += diff > 1 ? this.__vac_translate('days') : this.__vac_translate('day');
				result.push(res);
			}

			return result.join('; ').toLowerCase();
		},
		displayed_difference() {
			if (this.difference_days == 0) {
				return this.__vac_translate('identics_dates');
			}
			if (this.difference_days == 1) {
				return `1 ${this.__vac_translate('day').toLowerCase()}`;
			}
			return `${this.difference_days} ${this.__vac_translate('days').toLowerCase()}`;
		},

		/**
   * Resultat de la date après une option d'ajout ou de soustraction
   */
		date_operation() {
			let current = new Date(this.from);

			const days = parseInt(this.operation.days);
			const months = parseInt(this.operation.months);
			const years = parseInt(this.operation.years);

			if (this.operation.type == 'add') {
				current.setDate(current.getDate() + days);
				current.setMonth(current.getMonth() + months);
				current.setFullYear(current.getFullYear() + years);
			}
			if (this.operation.type == 'substract') {
				current.setDate(current.getDate() - days);
				current.setFullYear(current.getFullYear() - years);
				current.setMonth(current.getMonth() - months);
			}

			return current;
		},
		date_result() {
			return this.date_operation.toLocaleDateString();
		},
		displayed_date_result() {
			return this.date_operation.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
		}
	}
});

const currentDate = () => {
	const today = new Date();

	let month = today.getMonth() + 1;
	if (month < 10) {
		month = `0${month}`;
	}

	let day = today.getDate();
	if (day < 10) {
		day = `0${day}`;
	}

	return `${today.getFullYear()}-${month}-${day}`;
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_calculator__ = __webpack_require__(5);
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
	name: 'ScientificCalculator',
	mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_calculator__["a" /* default */]]
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vac__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = ({
	mixins: [__WEBPACK_IMPORTED_MODULE_0__vac__["a" /* default */]],
	props: {
		locale: { type: String, required: true },
		precision: { type: Number, default: 15 }
	},
	data: () => ({
		current: '0',
		finished: false,
		operation: null,

		operators: ['/', '*', '-', '+'],
		is_deg: false,
		is_snd: false
	}),
	computed: {
		current_last() {
			return this.current[this.current.length - 1];
		},
		result() {
			if (!this.finished || !this.isNumber(this.current)) {
				return this.current;
			}
			return this.formatNumber(this.current, this.precision);
		}
	},
	mounted() {
		this.keyboardPatch();
	},
	methods: {
		/**
   * Stimulation de l'utilisation du clavier
   */
		keyboardPatch() {
			document.querySelectorAll('.vac-container[tabindex="-1"]').forEach(el => {
				el.addEventListener('keydown', e => {
					const key = e.key;
					if (this.isNumber(key) || ['(', ')', '.', '^'].includes(key)) {
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
			if (['-Infinity', 'NaN', 'Infinity'].includes(this.current.toString())) {
				this.operation = null;
				this.current = '';
			}
			if (this.operation != null && this.operation != '' && this.isNumber(this.current)) {
				this.current = '';
				this.operation = null;
			}
			this.finished = false;
			this.current += '' + element;
		},
		addOperator(operator) {
			if (['-Infinity', 'NaN', 'Infinity'].includes(this.current.toString())) {
				this.operation = null;
				this.current = '';
			}
			if (this.operators.includes(operator)) {
				if (this.operators.includes(this.current_last)) {
					this.backspace();
				}
				this.current += operator;
			}
			this.finished = false;
		},

		clear() {
			this.operation = null;
			this.current = '0';
			this.finished = false;
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
			this.finished = false;
		},
		plusMinus() {
			this.current = '' + this.current;
			if (this.current != '0' && this.current.charAt(0) === "-") {
				this.current = this.current.slice(1);
			} else {
				this.current = "-" + this.current;
			}
			this.finished = false;
		},

		equals() {
			this.operation = `${this.current} =`;
			if (this.current.toString().indexOf("^") > -1) {
				var base = this.current.slice(0, this.current.indexOf("^"));
				var exponent = this.current.slice(this.current.indexOf("^") + 1);
				this.current = eval("Math.pow(" + base + "," + exponent + ")");
			} else if (this.current.toString().indexOf('MOD') > -1) {
				const parts = this.current.split('MOD');
				if (parts.length != 2) {
					this.current = NaN;
				} else {
					this.current = parts[0] % parts[1];
				}
			} else {
				this.current = eval(this.current);
			}
			this.finished = true;
		},

		sqr() {
			if (this.isNumber(this.current)) {
				this.operation = `sqr(${this.current})`;
				this.current *= this.current;
				this.finished = true;
			}
		},
		sqrt() {
			if (this.isNumber(this.current)) {
				this.operation = `√(${this.current})`;
				this.current = Math.sqrt(this.current);
				this.finished = true;
			}
		},
		percent() {
			if (this.isNumber(this.current)) {
				this.operation = `${this.current}%`;
				this.current = this.current / 100;
				this.finished = true;
			}
		},
		inverse() {
			if (this.isNumber(this.current)) {
				this.operation = `1/(${this.current})`;
				this.current = 1 / this.current;
				this.finished = true;
			}
		},

		factorial() {
			if (this.isNumber(this.current)) {
				this.operation = `fact(${this.current})`;
				if (this.current == 0) {
					this.current = "1";
				} else if (this.current < 0) {
					this.current = NaN;
				} else {
					let number = 1;
					for (var i = this.current; i > 0; i--) {
						number *= i;
					}
					this.current = number;
				}
				this.finished = true;
			}
		},
		abs() {
			if (this.isNumber(this.current)) {
				this.operation = `abs(${this.current})`;
				this.current = Math.abs(this.current);
				this.finished = true;
			}
		},
		pi() {
			this.operation = 'pi';
			this.current = Math.PI;
			this.finished = true;
		},

		sin() {
			if (this.isNumber(this.current)) {
				this.operation = `sin${this.is_snd ? 'h' : ''}(${this.current} ${this.is_deg ? '°' : 'rad'})`;
				const current = this.is_deg ? this.toRadians(this.current) : this.current;
				this.current = this.is_snd ? Math.sinh(current) : Math.sin(current);
				this.finished = true;
			}
		},
		cos() {
			if (this.isNumber(this.current)) {
				this.operation = `cos${this.is_snd ? 'h' : ''}(${this.current} ${this.is_deg ? '°' : 'rad'})`;
				const current = this.is_deg ? this.toRadians(this.current) : this.current;
				this.current = this.is_snd ? Math.cosh(current) : Math.cos(current);
				this.finished = true;
			}
		},
		tan() {
			if (this.isNumber(this.current)) {
				this.operation = `tan${this.is_snd ? 'h' : ''}(${this.current} ${this.is_deg ? '°' : 'rad'})`;
				const current = this.is_deg ? this.toRadians(this.current) : this.current;
				this.current = this.is_snd ? Math.tanh(current) : Math.tan(current);
				this.finished = true;
			}
		},
		toRadians(x) {
			return x * (Math.PI / 180);
		},
		toDegrees(x) {
			return x / (Math.PI / 180);
		},

		log() {
			if (this.isNumber(this.current)) {
				this.operation = `log(${this.current})`;
				this.current = Math.log10(this.current);
				this.finished = true;
			}
		},
		ln() {
			if (this.isNumber(this.current)) {
				this.operation = `ln(${this.current})`;
				this.current = Math.log(this.current);
				this.finished = true;
			}
		},
		exp() {
			if (this.isNumber(this.current)) {
				this.current = Math.exp(this.current);
				this.finished = true;
			}
		},
		power10() {
			if (this.isNumber(this.current)) {
				const operation = `10^(${this.current})`;
				this.current = `10^${this.current}`;
				this.equals();
				this.operation = operation;
			}
		}
	}
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_calculator__ = __webpack_require__(5);
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
	mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_calculator__["a" /* default */]]
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Calculator_vue__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VueAdvancedCalculator", function() { return __WEBPACK_IMPORTED_MODULE_0__Calculator_vue__["a"]; });

const Calculator = {
  install(Vue) {
    Vue.component('vue-advanced-calculator', __WEBPACK_IMPORTED_MODULE_0__Calculator_vue__["a" /* default */]);
  }
};
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Calculator);
}

/* harmony default export */ __webpack_exports__["default"] = (Calculator);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Calculator_vue__ = __webpack_require__(2);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_27a701dd_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Calculator_vue__ = __webpack_require__(18);
function injectStyle (ssrContext) {
  __webpack_require__(9)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-27a701dd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Calculator_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_27a701dd_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Calculator_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DateCalculation_vue__ = __webpack_require__(3);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ca6694bc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DateCalculation_vue__ = __webpack_require__(13);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DateCalculation_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ca6694bc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DateCalculation_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fr__ = __webpack_require__(12);


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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	about: 'A propos',
	add: 'Ajouter',
	add_or_substract_dayjs: 'Ajouter ou soustraire des jours',
	area: 'Surface',
	calculator: "Calculatrice",
	converter: "Convertisseur",
	currency: "Devise",
	data: 'Données',
	date: 'Date',
	date_calculation: 'Calcul de la date',
	day: 'Jour',
	days: 'Jours',
	difference: 'Différence',
	difference_between_date: 'Différence entre les dates',
	from: 'De',
	hour: 'Heure',
	identics_dates: 'Dates identiques',
	length: 'Longueur',
	month: 'Mois',
	months: 'Mois',
	scientific: 'Scientifique',
	standard: "Standard",
	substract: 'Soustraire',
	to: 'A',
	week: 'Semaine',
	weeks: 'Semaines',
	weight_and_mass: 'Poids et masse',
	year: 'Année',
	years: 'Années'

});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-3"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.type),expression:"type"}],staticClass:"custom-select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.type=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"difference"}},[_vm._v(_vm._s(_vm.__vac_translate('difference_between_date')))]),_vm._v(" "),_c('option',{attrs:{"value":"operations"}},[_vm._v(_vm._s(_vm.__vac_translate('add_or_substract_dayjs')))])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{staticClass:"form-group mt-3"},[_c('label',[_vm._v(_vm._s(_vm.__vac_translate('from')))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.from),expression:"from"}],staticClass:"form-control",attrs:{"type":"date"},domProps:{"value":(_vm.from)},on:{"input":function($event){if($event.target.composing){ return; }_vm.from=$event.target.value}}})]),_vm._v(" "),(_vm.type == 'difference')?_c('div',[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v(_vm._s(_vm.__vac_translate('to')))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.to),expression:"to"}],staticClass:"form-control",attrs:{"type":"date"},domProps:{"value":(_vm.to)},on:{"input":function($event){if($event.target.composing){ return; }_vm.to=$event.target.value}}})]),_vm._v(" "),_c('br'),_vm._v(" "),_c('h6',[_vm._v(_vm._s(_vm.__vac_translate('difference')))]),_vm._v(" "),_c('h5',{staticClass:"font-weight-bold"},[_vm._v(_vm._s(_vm.difference))]),_vm._v(" "),_c('h5',[_vm._v(_vm._s(_vm.displayed_difference))])]):_vm._e(),_vm._v(" "),(_vm.type == 'operations')?_c('div',[_c('div',{staticClass:"row justify-content-around mb-2"},[_c('div',{staticClass:"col-5"},[_c('div',{staticClass:"custom-control custom-radio custom-control-inline"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.operation.type),expression:"operation.type"}],staticClass:"custom-control-input",attrs:{"type":"radio","id":(_vm.id + "_date_calculation_operation_1"),"value":"add"},domProps:{"checked":_vm._q(_vm.operation.type,"add")},on:{"change":function($event){return _vm.$set(_vm.operation, "type", "add")}}}),_vm._v(" "),_c('label',{staticClass:"custom-control-label",attrs:{"for":(_vm.id + "_date_calculation_operation_1")}},[_vm._v(_vm._s(_vm.__vac_translate('add')))])])]),_vm._v(" "),_c('div',{staticClass:"col-5"},[_c('div',{staticClass:"custom-control custom-radio custom-control-inline"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.operation.type),expression:"operation.type"}],staticClass:"custom-control-input",attrs:{"type":"radio","id":(_vm.id + "_date_calculation_operation_2"),"value":"substract"},domProps:{"checked":_vm._q(_vm.operation.type,"substract")},on:{"change":function($event){return _vm.$set(_vm.operation, "type", "substract")}}}),_vm._v(" "),_c('label',{staticClass:"custom-control-label",attrs:{"for":(_vm.id + "_date_calculation_operation_2")}},[_vm._v(_vm._s(_vm.__vac_translate('substract')))])])])]),_vm._v(" "),_c('div',{staticClass:"row mt-2"},[_c('div',{staticClass:"col-4"},[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v(_vm._s(_vm.__vac_translate('years')))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.operation.years),expression:"operation.years"}],staticClass:"form-control",attrs:{"type":"number","min":"0"},domProps:{"value":(_vm.operation.years)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.operation, "years", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v(_vm._s(_vm.__vac_translate('months')))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.operation.months),expression:"operation.months"}],staticClass:"form-control",attrs:{"type":"number","min":"0"},domProps:{"value":(_vm.operation.months)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.operation, "months", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v(_vm._s(_vm.__vac_translate('days')))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.operation.days),expression:"operation.days"}],staticClass:"form-control",attrs:{"type":"number","min":"0"},domProps:{"value":(_vm.operation.days)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.operation, "days", $event.target.value)}}})])])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('h6',[_vm._v(_vm._s(_vm.__vac_translate('date')))]),_vm._v(" "),_c('h5',{staticClass:"font-weight-bold"},[_vm._v(_vm._s(_vm.date_result))]),_vm._v(" "),_c('h5',[_vm._v(_vm._s(_vm.displayed_date_result))])]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Scientific_vue__ = __webpack_require__(4);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34b11c1d_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Scientific_vue__ = __webpack_require__(15);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Scientific_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34b11c1d_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Scientific_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"vac-screen"},[_c('div',{staticClass:"w-100 text-right vac-screen-operation"},[_vm._v(_vm._s(_vm.operation))]),_vm._v(" "),_c('div',{staticClass:"w-100 text-right vac-screen-result"},[_vm._v(_vm._s(_vm.result))])]),_vm._v(" "),_c('div',{staticClass:"p-0"},[_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.percent()}}},[_vm._v("%")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.clear()}}},[_vm._v("CE")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.clear()}}},[_vm._v("C")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.backspace()}}},[_vm._v("← Backspace")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){_vm.is_deg = !_vm.is_deg}}},[_vm._v(_vm._s(_vm.is_deg ? 'DEG' : 'RAD'))]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",class:{active: _vm.is_snd},on:{"click":function($event){_vm.is_snd = !_vm.is_snd}}},[_vm._v("2"),_c('sup',[_vm._v("nd")])]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.sin()}}},[_vm._v("sin"+_vm._s(_vm.is_snd ? 'h' : ''))]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.cos()}}},[_vm._v("cos"+_vm._s(_vm.is_snd ? 'h' : ''))]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.tan()}}},[_vm._v("tan"+_vm._s(_vm.is_snd ? 'h' : ''))])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.log()}}},[_vm._v("log")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.ln()}}},[_vm._v("ln")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)}},[_vm._v("e")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.exp()}}},[_vm._v("exp")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.pi()}}},[_vm._v("π")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.factorial()}}},[_vm._v("n!")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.abs()}}},[_vm._v("|x|")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.addElement('MOD')}}},[_vm._v("mod")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement('^')}}},[_vm._v("x"),_c('sup',[_vm._v("y")])]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.power10()}}},[_vm._v("10"),_c('sup',[_vm._v("x")])])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.inverse()}}},[_vm._v("1/x")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.sqr()}}},[_vm._v("x²")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.sqrt()}}},[_vm._v("√")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement('(')}}},[_vm._v("(")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){_vm.addElement(')')}}},[_vm._v(")")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(7)}}},[_vm._v("7")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(8)}}},[_vm._v("8")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(9)}}},[_vm._v("9")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('/')}}},[_vm._v("/")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":""}},[_vm._v("M+")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(4)}}},[_vm._v("4")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(5)}}},[_vm._v("5")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(6)}}},[_vm._v("6")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('*')}}},[_vm._v("*")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":""}},[_vm._v("M-")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(1)}}},[_vm._v("1")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(2)}}},[_vm._v("2")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(3)}}},[_vm._v("3")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('-')}}},[_vm._v("-")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":""}},[_vm._v("MS")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.plusMinus()}}},[_vm._v("±")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(0)}}},[_vm._v("0")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement('.')}}},[_vm._v(".")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('+')}}},[_vm._v("+")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light equals",on:{"click":function($event){return _vm.equals()}}},[_vm._v("=")])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Standard_vue__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f0c610c2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Standard_vue__ = __webpack_require__(17);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Standard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f0c610c2_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Standard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"vac-screen"},[_c('div',{staticClass:"w-100 text-right vac-screen-operation"},[_vm._v(_vm._s(_vm.operation))]),_vm._v(" "),_c('div',{staticClass:"w-100 text-right vac-screen-result"},[_vm._v(_vm._s(_vm.result))])]),_vm._v(" "),_c('div',[_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.percent()}}},[_vm._v("%")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.clear()}}},[_vm._v("CE")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.clear()}}},[_vm._v("C")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.backspace()}}},[_vm._v("← Backspace")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.inverse()}}},[_vm._v("1/x")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.sqr()}}},[_vm._v("x²")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.sqrt()}}},[_vm._v("√")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement('(')}}},[_vm._v("(")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){_vm.addElement(')')}}},[_vm._v(")")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(7)}}},[_vm._v("7")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(8)}}},[_vm._v("8")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(9)}}},[_vm._v("9")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('/')}}},[_vm._v("/")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":""}},[_vm._v("M+")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(4)}}},[_vm._v("4")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(5)}}},[_vm._v("5")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(6)}}},[_vm._v("6")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('*')}}},[_vm._v("*")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":""}},[_vm._v("M-")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(1)}}},[_vm._v("1")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(2)}}},[_vm._v("2")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(3)}}},[_vm._v("3")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('-')}}},[_vm._v("-")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":""}},[_vm._v("MS")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.plusMinus()}}},[_vm._v("±")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(0)}}},[_vm._v("0")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement('.')}}},[_vm._v(".")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('+')}}},[_vm._v("+")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light equals",on:{"click":function($event){return _vm.equals()}}},[_vm._v("=")])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vac-container position-relative w-100 border rounded",attrs:{"id":_vm.id,"tabindex":"-1"}},[_c('div',{staticClass:"vac-overlay",class:{'active': _vm.open_sidebar},on:{"click":function($event){_vm.open_sidebar = !_vm.open_sidebar}}}),_vm._v(" "),_c('nav',{staticClass:"vac-sidebar d-flex flex-column justify-content-between",class:{'active': _vm.open_sidebar}},[_c('div',{staticClass:"vac-dismiss-btn text-center rounded-circle position-absolute",on:{"click":function($event){_vm.open_sidebar = !_vm.open_sidebar}}},[_c('i',{staticClass:"fas fa-times"})]),_vm._v(" "),_c('div',{staticClass:"vac-sidebar-header px-1 pt-1 text-center"},[_c('h4',{staticClass:"h5 font-weight-bold vac-sidebar-title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('h5',{staticClass:"h6 text-muted"},[_vm._v(_vm._s(_vm.description))])]),_vm._v(" "),_c('div',{staticClass:"vac-sidebar-menu container"},[_c('ul',{staticClass:"list-unstyled w-100"},[_c('h5',{staticClass:"font-weight-bold text-muted h6"},[_vm._v(_vm._s(_vm.__vac_translate('calculator')))]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'standard'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('standard')}}},[_c('i',{staticClass:"fa fa-calculator"}),_vm._v(" "+_vm._s(_vm.__vac_translate('standard')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'scientific'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('scientific')}}},[_c('i',{staticClass:"fa fa-flask"}),_vm._v(" "+_vm._s(_vm.__vac_translate('scientific')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'date_calculation'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('date_calculation')}}},[_c('i',{staticClass:"fa fa-calendar-alt"}),_vm._v(" "+_vm._s(_vm.__vac_translate('date_calculation')))])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('h5',{staticClass:"font-weight-bold text-muted h6"},[_vm._v(_vm._s(_vm.__vac_translate('converter')))]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'currency'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('currency')}}},[_c('i',{staticClass:"fa fa-dollar-sign"}),_vm._v(" "+_vm._s(_vm.__vac_translate('currency')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'length'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('length')}}},[_c('i',{staticClass:"fa fa-ruler-combined"}),_vm._v(" "+_vm._s(_vm.__vac_translate('length')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'area'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('area')}}},[_c('i',{staticClass:"fa fa-th"}),_vm._v(" "+_vm._s(_vm.__vac_translate('area')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'weight_and_mass'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('weight_and_mass')}}},[_c('i',{staticClass:"fa fa-weight-hanging"}),_vm._v(" "+_vm._s(_vm.__vac_translate('weight_and_mass')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'hour'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('hour')}}},[_c('i',{staticClass:"fa fa-clock"}),_vm._v(" "+_vm._s(_vm.__vac_translate('hour')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'data'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('data')}}},[_c('i',{staticClass:"fa fa-hdd"}),_vm._v(" "+_vm._s(_vm.__vac_translate('data')))])])])]),_vm._v(" "),_c('div',{staticClass:"vac-sidebar-footer p-1 w-100"},[_c('div',{staticClass:"btn-group w-100 btn-group-block"},[_c('button',{staticClass:"btn btn-sm btn-light btn-block",attrs:{"type":"button"}},[_vm._v(_vm._s(_vm.__vac_translate('about')))])])])]),_vm._v(" "),_c('div',{staticClass:"vac-content w-100 p-1"},[_c('div',{staticClass:"d-flex justify-content-between mb-1"},[_c('button',{staticClass:"btn btn-sm btn-secondary",on:{"click":function($event){_vm.open_sidebar = !_vm.open_sidebar}}},[_c('i',{staticClass:"fa fa-bars"})]),_vm._v(" "),_c('div',{staticClass:"text-center"},[_c('h4',{staticClass:"font-weight-bold h5"},[_vm._v(_vm._s(_vm.__vac_translate(_vm.mode)))]),_vm._v(" "),_c('h5',{staticClass:"font-weight-bold text-muted small m-0"},[_vm._v(_vm._s(_vm.title))])]),_vm._v(" "),_vm._m(0)]),_vm._v(" "),(_vm.mode == 'standard')?_c('standard',{attrs:{"locale":_vm.locale,"id":_vm.id}}):_vm._e(),_vm._v(" "),(_vm.mode == 'scientific')?_c('scientific',{attrs:{"locale":_vm.locale,"id":_vm.id}}):_vm._e(),_vm._v(" "),(_vm.mode == 'date_calculation')?_c('date-calculation',{attrs:{"locale":_vm.locale,"id":_vm.id}}):_vm._e()],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn btn-sm btn-light"},[_c('i',{staticClass:"fa fa-undo"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});
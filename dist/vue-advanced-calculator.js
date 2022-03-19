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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_translations_translator__ = __webpack_require__(12);


/* harmony default export */ __webpack_exports__["a"] = ({
	props: {
		locale: { type: String, required: true },
		id: { type: String, required: true }
	},
	data: () => ({
		current: '0',
		finished: false,
		operation: null
	}),
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

		clear(all = false) {
			if (all) {
				this.operation = null;
			}
			this.current = '0';
			this.finished = false;
		},
		backspace() {
			if (this.isNumber(this.current) || typeof this.current != 'string') {
				// this.clear()
				// return
			}
			this.current = this.current.substring(0, this.current.length - 1);
			if (this.current == '') {
				this.current = '0';
			}
			this.finished = false;
		}

	}
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_calculators_DateCalculation_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_calculators_Scientific_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_calculators_Standard_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_converters_Data_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_vac__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
		DateCalculation: __WEBPACK_IMPORTED_MODULE_0__components_calculators_DateCalculation_vue__["a" /* default */],
		DataConverter: __WEBPACK_IMPORTED_MODULE_3__components_converters_Data_vue__["a" /* default */]
	},
	mixins: [__WEBPACK_IMPORTED_MODULE_4__mixins_vac__["a" /* default */]],
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
		type: 'difference',
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
						this.clear(true);
					}
				});
			});
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


/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'Data',
	mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_vac__["a" /* default */]],
	data: () => ({
		initial_unit: null,
		final_unit: null,
		units: [{ value: 'b', text: 'Bits' }, { value: 'o', text: 'Octet(s)' }, { value: 'kb', text: 'Kilobit(s)' }, { value: 'kbb', text: 'Kibibit(s)' }, { value: 'ko', text: 'Kilooctet(s)' }, { value: 'kbo', text: 'Kibioctet(s)' }, { value: 'mb', text: 'Mégabit(s)' }, { value: 'mbb', text: 'Mébibit(s)' }, { value: 'mo', text: 'Mégaoctet(s)' }, { value: 'mbo', text: 'Mébioctet(s)' }, { value: 'gb', text: 'Gigabit(s)' }, { value: 'gbb', text: 'Gibibit(s)' }, { value: 'go', text: 'Gigaoctet(s)' }, { value: 'gbo', text: 'Gibioctet(s)' }, { value: 'tb', text: 'Térabit(s)' }, { value: 'tbb', text: 'Tébibit(s)' }, { value: 'to', text: 'Téraoctet(s)' }, { value: 'tbo', text: 'Tébioctet(s)' }, { value: 'pb', text: 'Pétabit(s)' }, { value: 'pbb', text: 'Pébibit(s)' }, { value: 'po', text: 'Pétaoctet(s)' }, { value: 'pbo', text: 'Pébioctet(s)' }, { value: 'eb', text: 'Exabit(s)' }, { value: 'ebb', text: 'Exbibit(s)' }, { value: 'eo', text: 'Exaoctet(s)' }, { value: 'ebo', text: 'Exbioctet(s)' }, { value: 'zb', text: 'Zettabit(s)' }, { value: 'zbb', text: 'Zébibit(s)' }, { value: 'zo', text: 'Zettaoctet(s)' }, { value: 'zbo', text: 'Zébioctet(s)' }, { value: 'yb', text: 'Yocbit(s)' }, { value: 'ybb', text: 'Yobibit(s)' }, { value: 'ybo', text: 'Yottabytes' }, { value: 'yo', text: 'Yobioctet(s)' }],
		equivalence: {
			b: 8,
			o: 1,
			kb: 0.008,
			kbb: 0.007812,
			ko: 0.001,
			kbo: 0.000977,
			mb: 0.000008,
			mbb: 0.000008,
			mo: 0.000001,
			mbo: 0.000000953674316,
			gb: 0.000000008,
			gbb: 0.000000007450581,
			go: 0.000000001,
			gbo: 0.000000000931323,
			tb: 0.000000000008,
			tbb: 0.000000000007276,
			to: 0.000000000001,
			tbo: 0.000000000000909,
			pb: 8.000000e-15,
			pbb: 7.105427e-15,
			po: 1.000000e-15,
			pbo: 8.881784e-16,
			eb: 8.000000e-18,
			ebb: 6.938894e-18,
			eo: 1.000000e-18,
			ebo: 8.673617e-19,
			zb: 8.000000e-21,
			zbb: 6.776264e-21,
			zo: 1.000000e-21,
			zbo: 8.470329e-22,
			yb: 8.000000e-24,
			ybb: 6.617445e-24,
			ybo: 1.000000e-24,
			yo: 8.271806e-25
		}
	}),
	computed: {
		displayed_initial_unit() {
			if (this.initial_unit == null) {
				return '';
			}
			return this.units.find(elt => elt.value == this.initial_unit).text;
		},
		displayed_final_unit() {
			if (this.final_unit == null) {
				return '';
			}
			return this.units.find(elt => elt.value == this.final_unit).text;
		},
		result() {
			const result = this.convert(this.current, this.initial_unit, this.final_unit);
			if (!this.isNumber(result)) {
				return 0;
			}
			return result;
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
					if (this.isNumber(key) || ['.'].includes(key)) {
						this.addElement(key);
					}
					if (key == 'Backspace') {
						this.backspace();
					}
					if (key.toLowerCase() == 'c') {
						this.clear(true);
					}
				});
			});
		},

		convert(number, from, to) {
			return parseFloat(number) * this.equivalence[to] / this.equivalence[from];
		}
	}
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Calculator_vue__ = __webpack_require__(9);
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Calculator_vue__ = __webpack_require__(2);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d31feb2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Calculator_vue__ = __webpack_require__(21);
function injectStyle (ssrContext) {
  __webpack_require__(10)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0d31feb2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Calculator_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d31feb2_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Calculator_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DateCalculation_vue__ = __webpack_require__(3);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9a9b5296_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DateCalculation_vue__ = __webpack_require__(14);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9a9b5296_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DateCalculation_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fr__ = __webpack_require__(13);


const data = {
	fr: __WEBPACK_IMPORTED_MODULE_0__fr__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = (function (key, locale = 'fr') {
	if (!(locale in data)) {
		locale = 'fr';
	}
	return data[locale][key] || key;
});

/***/ }),
/* 13 */
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
	final_unit: 'Unité finale',
	from: 'De',
	hour: 'Heure',
	identics_dates: 'Dates identiques',
	initial_unit: 'Unité initiale',
	length: 'Longueur',
	month: 'Mois',
	months: 'Mois',
	select_the_final_unit: 'Sélectionnez l\'unité finale',
	select_the_initial_unit: 'Sélectionnez l\'unité initiale',
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-1"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.type),expression:"type"}],staticClass:"custom-select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.type=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"difference"}},[_vm._v(_vm._s(_vm.__vac_translate('difference_between_date')))]),_vm._v(" "),_c('option',{attrs:{"value":"operations"}},[_vm._v(_vm._s(_vm.__vac_translate('add_or_substract_dayjs')))])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{staticClass:"form-group mt-3"},[_c('label',[_vm._v(_vm._s(_vm.__vac_translate('from')))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.from),expression:"from"}],staticClass:"form-control",attrs:{"type":"date"},domProps:{"value":(_vm.from)},on:{"input":function($event){if($event.target.composing){ return; }_vm.from=$event.target.value}}})]),_vm._v(" "),(_vm.type == 'difference')?_c('div',[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v(_vm._s(_vm.__vac_translate('to')))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.to),expression:"to"}],staticClass:"form-control",attrs:{"type":"date"},domProps:{"value":(_vm.to)},on:{"input":function($event){if($event.target.composing){ return; }_vm.to=$event.target.value}}})]),_vm._v(" "),_c('br'),_vm._v(" "),_c('h6',[_vm._v(_vm._s(_vm.__vac_translate('difference')))]),_vm._v(" "),_c('h5',{staticClass:"font-weight-bold"},[_vm._v(_vm._s(_vm.difference))]),_vm._v(" "),_c('h5',[_vm._v(_vm._s(_vm.displayed_difference))])]):_vm._e(),_vm._v(" "),(_vm.type == 'operations')?_c('div',[_c('div',{staticClass:"row justify-content-around mb-2"},[_c('div',{staticClass:"col-5"},[_c('div',{staticClass:"custom-control custom-radio custom-control-inline"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.operation.type),expression:"operation.type"}],staticClass:"custom-control-input",attrs:{"type":"radio","id":(_vm.id + "_date_calculation_operation_1"),"value":"add"},domProps:{"checked":_vm._q(_vm.operation.type,"add")},on:{"change":function($event){return _vm.$set(_vm.operation, "type", "add")}}}),_vm._v(" "),_c('label',{staticClass:"custom-control-label",attrs:{"for":(_vm.id + "_date_calculation_operation_1")}},[_vm._v(_vm._s(_vm.__vac_translate('add')))])])]),_vm._v(" "),_c('div',{staticClass:"col-5"},[_c('div',{staticClass:"custom-control custom-radio custom-control-inline"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.operation.type),expression:"operation.type"}],staticClass:"custom-control-input",attrs:{"type":"radio","id":(_vm.id + "_date_calculation_operation_2"),"value":"substract"},domProps:{"checked":_vm._q(_vm.operation.type,"substract")},on:{"change":function($event){return _vm.$set(_vm.operation, "type", "substract")}}}),_vm._v(" "),_c('label',{staticClass:"custom-control-label",attrs:{"for":(_vm.id + "_date_calculation_operation_2")}},[_vm._v(_vm._s(_vm.__vac_translate('substract')))])])])]),_vm._v(" "),_c('div',{staticClass:"row mt-2"},[_c('div',{staticClass:"col-4"},[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v(_vm._s(_vm.__vac_translate('years')))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.operation.years),expression:"operation.years"}],staticClass:"form-control",attrs:{"type":"number","min":"0"},domProps:{"value":(_vm.operation.years)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.operation, "years", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v(_vm._s(_vm.__vac_translate('months')))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.operation.months),expression:"operation.months"}],staticClass:"form-control",attrs:{"type":"number","min":"0"},domProps:{"value":(_vm.operation.months)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.operation, "months", $event.target.value)}}})])]),_vm._v(" "),_c('div',{staticClass:"col-4"},[_c('div',{staticClass:"form-group"},[_c('label',[_vm._v(_vm._s(_vm.__vac_translate('days')))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.operation.days),expression:"operation.days"}],staticClass:"form-control",attrs:{"type":"number","min":"0"},domProps:{"value":(_vm.operation.days)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.operation, "days", $event.target.value)}}})])])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('h6',[_vm._v(_vm._s(_vm.__vac_translate('date')))]),_vm._v(" "),_c('h5',{staticClass:"font-weight-bold"},[_vm._v(_vm._s(_vm.date_result))]),_vm._v(" "),_c('h5',[_vm._v(_vm._s(_vm.displayed_date_result))])]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Scientific_vue__ = __webpack_require__(4);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62ce4eaa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Scientific_vue__ = __webpack_require__(16);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62ce4eaa_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Scientific_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"vac-screen"},[_c('div',{staticClass:"w-100 text-right vac-screen-operation"},[_vm._v(_vm._s(_vm.operation))]),_vm._v(" "),_c('div',{staticClass:"w-100 text-right vac-screen-result"},[_vm._v(_vm._s(_vm.result))])]),_vm._v(" "),_c('div',{staticClass:"p-0"},[_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.percent()}}},[_vm._v("%")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.clear()}}},[_vm._v("CE")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.clear(true)}}},[_vm._v("C")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.backspace()}}},[_vm._v("← Backspace")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){_vm.is_deg = !_vm.is_deg}}},[_vm._v(_vm._s(_vm.is_deg ? 'DEG' : 'RAD'))]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",class:{active: _vm.is_snd},on:{"click":function($event){_vm.is_snd = !_vm.is_snd}}},[_vm._v("2"),_c('sup',[_vm._v("nd")])]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.sin()}}},[_vm._v("sin"+_vm._s(_vm.is_snd ? 'h' : ''))]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.cos()}}},[_vm._v("cos"+_vm._s(_vm.is_snd ? 'h' : ''))]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.tan()}}},[_vm._v("tan"+_vm._s(_vm.is_snd ? 'h' : ''))])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.log()}}},[_vm._v("log")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.ln()}}},[_vm._v("ln")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)}},[_vm._v("e")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.exp()}}},[_vm._v("exp")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.pi()}}},[_vm._v("π")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.factorial()}}},[_vm._v("n!")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.abs()}}},[_vm._v("|x|")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.addElement('MOD')}}},[_vm._v("mod")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement('^')}}},[_vm._v("x"),_c('sup',[_vm._v("y")])]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.power10()}}},[_vm._v("10"),_c('sup',[_vm._v("x")])])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.inverse()}}},[_vm._v("1/x")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.sqr()}}},[_vm._v("x²")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.sqrt()}}},[_vm._v("√")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement('(')}}},[_vm._v("(")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){_vm.addElement(')')}}},[_vm._v(")")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(7)}}},[_vm._v("7")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(8)}}},[_vm._v("8")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(9)}}},[_vm._v("9")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('/')}}},[_vm._v("/")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":""}},[_vm._v("M+")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(4)}}},[_vm._v("4")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(5)}}},[_vm._v("5")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(6)}}},[_vm._v("6")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('*')}}},[_vm._v("*")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":""}},[_vm._v("M-")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(1)}}},[_vm._v("1")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(2)}}},[_vm._v("2")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(3)}}},[_vm._v("3")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('-')}}},[_vm._v("-")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":""}},[_vm._v("MS")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.plusMinus()}}},[_vm._v("±")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(0)}}},[_vm._v("0")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement('.')}}},[_vm._v(".")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('+')}}},[_vm._v("+")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light equals",on:{"click":function($event){return _vm.equals()}}},[_vm._v("=")])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Standard_vue__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8576ada6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Standard_vue__ = __webpack_require__(18);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8576ada6_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Standard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"vac-screen"},[_c('div',{staticClass:"w-100 text-right vac-screen-operation"},[_vm._v(_vm._s(_vm.operation))]),_vm._v(" "),_c('div',{staticClass:"w-100 text-right vac-screen-result"},[_vm._v(_vm._s(_vm.result))])]),_vm._v(" "),_c('div',[_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.percent()}}},[_vm._v("%")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.clear()}}},[_vm._v("CE")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.clear(true)}}},[_vm._v("C")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.backspace()}}},[_vm._v("← Backspace")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.inverse()}}},[_vm._v("1/x")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.sqr()}}},[_vm._v("x²")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":!_vm.isNumber(_vm.current)},on:{"click":function($event){return _vm.sqrt()}}},[_vm._v("√")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement('(')}}},[_vm._v("(")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){_vm.addElement(')')}}},[_vm._v(")")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(7)}}},[_vm._v("7")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(8)}}},[_vm._v("8")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(9)}}},[_vm._v("9")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('/')}}},[_vm._v("/")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":""}},[_vm._v("M+")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(4)}}},[_vm._v("4")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(5)}}},[_vm._v("5")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(6)}}},[_vm._v("6")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('*')}}},[_vm._v("*")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":""}},[_vm._v("M-")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(1)}}},[_vm._v("1")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(2)}}},[_vm._v("2")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(3)}}},[_vm._v("3")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('-')}}},[_vm._v("-")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",attrs:{"disabled":""}},[_vm._v("MS")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.plusMinus()}}},[_vm._v("±")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement(0)}}},[_vm._v("0")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addElement('.')}}},[_vm._v(".")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.addOperator('+')}}},[_vm._v("+")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light equals",on:{"click":function($event){return _vm.equals()}}},[_vm._v("=")])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Data_vue__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51000f40_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Data_vue__ = __webpack_require__(20);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Data_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51000f40_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Data_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-1"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-6"},[_c('div',{staticClass:"form-group mt-3"},[_c('label',[_vm._v(_vm._s(_vm.__vac_translate('initial_unit')))]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.initial_unit),expression:"initial_unit"}],staticClass:"custom-select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.initial_unit=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"disabled":"","selected":""}},[_vm._v(_vm._s(_vm.__vac_translate('select_the_initial_unit')))]),_vm._v(" "),_vm._l((_vm.units),function(unit,i){return _c('option',{key:i,domProps:{"value":unit.value}},[_vm._v(_vm._s(unit.text))])})],2)])]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('div',{staticClass:"form-group mt-3"},[_c('label',[_vm._v(_vm._s(_vm.__vac_translate('final_unit')))]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.final_unit),expression:"final_unit"}],staticClass:"custom-select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.final_unit=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"disabled":"","selected":""}},[_vm._v(_vm._s(_vm.__vac_translate('select_the_final_unit')))]),_vm._v(" "),_vm._l((_vm.units),function(unit,i){return _c('option',{key:i,domProps:{"value":unit.value}},[_vm._v(_vm._s(unit.text))])})],2)])])]),_vm._v(" "),_c('div',{staticClass:"vac-screen"},[_c('div',{staticClass:"w-100 text-right vac-screen-operation"},[_vm._v(_vm._s(_vm.displayed_initial_unit))]),_vm._v(" "),_c('div',{staticClass:"w-100 text-right vac-screen-result"},[_vm._v(_vm._s(_vm.current))])]),_vm._v(" "),_c('div',{staticClass:"vac-screen outset"},[_c('div',{staticClass:"w-100 text-right vac-screen-operation"},[_vm._v(_vm._s(_vm.displayed_final_unit))]),_vm._v(" "),_c('div',{staticClass:"w-100 text-right vac-screen-result"},[_vm._v(_vm._s(Math.round(_vm.result)))])]),_vm._v(" "),_c('div',{staticClass:"col-10 offset-1 px-0"},[_c('div',{staticClass:"d-flex justify-content-end vac-buttons"},[_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.clear()}}},[_vm._v("CE")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",on:{"click":function($event){return _vm.backspace()}}},[_vm._v("← Backspace")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",staticStyle:{"flex":"1"},on:{"click":function($event){return _vm.addElement(7)}}},[_vm._v("7")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",staticStyle:{"flex":"1"},on:{"click":function($event){return _vm.addElement(8)}}},[_vm._v("8")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",staticStyle:{"flex":"1"},on:{"click":function($event){return _vm.addElement(9)}}},[_vm._v("9")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",staticStyle:{"flex":"1"},on:{"click":function($event){return _vm.addElement(4)}}},[_vm._v("4")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",staticStyle:{"flex":"1"},on:{"click":function($event){return _vm.addElement(5)}}},[_vm._v("5")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",staticStyle:{"flex":"1"},on:{"click":function($event){return _vm.addElement(6)}}},[_vm._v("6")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-between vac-buttons"},[_c('button',{staticClass:"btn btn-light",staticStyle:{"flex":"1"},on:{"click":function($event){return _vm.addElement(1)}}},[_vm._v("1")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",staticStyle:{"flex":"1"},on:{"click":function($event){return _vm.addElement(2)}}},[_vm._v("2")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",staticStyle:{"flex":"1"},on:{"click":function($event){return _vm.addElement(3)}}},[_vm._v("3")])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-end vac-buttons"},[_c('div',{staticClass:"btn",staticStyle:{"flex":"1"}}),_vm._v(" "),_c('button',{staticClass:"btn btn-light",staticStyle:{"flex":"1"},on:{"click":function($event){return _vm.addElement(0)}}},[_vm._v("0")]),_vm._v(" "),_c('button',{staticClass:"btn btn-light",staticStyle:{"flex":"1"},on:{"click":function($event){return _vm.addElement('.')}}},[_vm._v(".")])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vac-container position-relative w-100 border rounded",attrs:{"id":_vm.id,"tabindex":"-1"}},[_c('div',{staticClass:"vac-overlay",class:{'active': _vm.open_sidebar},on:{"click":function($event){_vm.open_sidebar = !_vm.open_sidebar}}}),_vm._v(" "),_c('nav',{staticClass:"vac-sidebar d-flex flex-column justify-content-between",class:{'active': _vm.open_sidebar}},[_c('div',{staticClass:"vac-dismiss-btn text-center rounded-circle position-absolute",on:{"click":function($event){_vm.open_sidebar = !_vm.open_sidebar}}},[_c('i',{staticClass:"fas fa-times"})]),_vm._v(" "),_c('div',{staticClass:"vac-sidebar-header px-1 pt-1 text-center"},[_c('h4',{staticClass:"h5 font-weight-bold vac-sidebar-title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('h5',{staticClass:"h6 text-muted"},[_vm._v(_vm._s(_vm.description))])]),_vm._v(" "),_c('div',{staticClass:"vac-sidebar-menu container"},[_c('ul',{staticClass:"list-unstyled w-100"},[_c('h5',{staticClass:"font-weight-bold text-muted h6"},[_vm._v(_vm._s(_vm.__vac_translate('calculator')))]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'standard'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('standard')}}},[_c('i',{staticClass:"fa fa-calculator"}),_vm._v(" "+_vm._s(_vm.__vac_translate('standard')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'scientific'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('scientific')}}},[_c('i',{staticClass:"fa fa-flask"}),_vm._v(" "+_vm._s(_vm.__vac_translate('scientific')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'date_calculation'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('date_calculation')}}},[_c('i',{staticClass:"fa fa-calendar-alt"}),_vm._v(" "+_vm._s(_vm.__vac_translate('date_calculation')))])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('h5',{staticClass:"font-weight-bold text-muted h6"},[_vm._v(_vm._s(_vm.__vac_translate('converter')))]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'currency'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('currency')}}},[_c('i',{staticClass:"fa fa-dollar-sign"}),_vm._v(" "+_vm._s(_vm.__vac_translate('currency')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'length'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('length')}}},[_c('i',{staticClass:"fa fa-ruler-combined"}),_vm._v(" "+_vm._s(_vm.__vac_translate('length')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'area'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('area')}}},[_c('i',{staticClass:"fa fa-th"}),_vm._v(" "+_vm._s(_vm.__vac_translate('area')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'weight_and_mass'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('weight_and_mass')}}},[_c('i',{staticClass:"fa fa-weight-hanging"}),_vm._v(" "+_vm._s(_vm.__vac_translate('weight_and_mass')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'hour'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('hour')}}},[_c('i',{staticClass:"fa fa-clock"}),_vm._v(" "+_vm._s(_vm.__vac_translate('hour')))])]),_vm._v(" "),_c('li',[_c('a',{class:{active: _vm.mode == 'data'},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.changeMode('data')}}},[_c('i',{staticClass:"fa fa-hdd"}),_vm._v(" "+_vm._s(_vm.__vac_translate('data')))])])])]),_vm._v(" "),_c('div',{staticClass:"vac-sidebar-footer p-1 w-100"},[_c('div',{staticClass:"btn-group w-100 btn-group-block"},[_c('button',{staticClass:"btn btn-sm btn-light btn-block",attrs:{"type":"button"}},[_vm._v(_vm._s(_vm.__vac_translate('about')))])])])]),_vm._v(" "),_c('div',{staticClass:"vac-content w-100 p-1"},[_c('div',{staticClass:"d-flex justify-content-between mb-1"},[_c('button',{staticClass:"btn btn-sm btn-secondary",on:{"click":function($event){_vm.open_sidebar = !_vm.open_sidebar}}},[_c('i',{staticClass:"fa fa-bars"})]),_vm._v(" "),_c('div',{staticClass:"text-center"},[_c('h4',{staticClass:"font-weight-bold h5"},[_vm._v(_vm._s(_vm.__vac_translate(_vm.mode)))]),_vm._v(" "),_c('h5',{staticClass:"font-weight-bold text-muted small m-0"},[_vm._v(_vm._s(_vm.title))])]),_vm._v(" "),_vm._m(0)]),_vm._v(" "),(_vm.mode == 'standard')?_c('standard',{attrs:{"locale":_vm.locale,"id":_vm.id}}):_vm._e(),_vm._v(" "),(_vm.mode == 'scientific')?_c('scientific',{attrs:{"locale":_vm.locale,"id":_vm.id}}):_vm._e(),_vm._v(" "),(_vm.mode == 'date_calculation')?_c('date-calculation',{attrs:{"locale":_vm.locale,"id":_vm.id}}):_vm._e(),_vm._v(" "),(_vm.mode == 'data')?_c('data-converter',{attrs:{"locale":_vm.locale,"id":_vm.id}}):_vm._e()],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn btn-sm btn-light"},[_c('i',{staticClass:"fa fa-undo"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});
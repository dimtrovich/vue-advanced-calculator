<template>
    <div>
        <div class="vac-screen">
			<div class="w-100 text-right vac-screen-operation">{{ operation }}</div>
			<div class="w-100 text-right vac-screen-result">{{ current }}</div>
		</div>
		<div>				
			<div class="d-flex justify-content-between vac-buttons">
				<button class="btn btn-light" :disabled="!isNumber(current)" @click="percent()">%</button>
				<button class="btn btn-light" @click="clear()">CE</button>
				<button class="btn btn-light" @click="clear()">C</button>
				<button class="btn btn-light" @click="backspace()">&larr; Backspace</button>
			</div>
			<div class="d-flex justify-content-between vac-buttons">
				<button class="btn btn-light" :disabled="!isNumber(current)" @click="inverse()">1/x</button>
				<button class="btn btn-light" :disabled="!isNumber(current)" @click="sqr()">x²</button>
				<button class="btn btn-light" :disabled="!isNumber(current)" @click="sqrt()">√</button>
				<button class="btn btn-light" @click="addElement('(')">(</button>
				<button class="btn btn-light" @click="addElement(')')">)</button>
			</div>
			<div class="d-flex justify-content-between vac-buttons">
				<button class="btn btn-light" @click="addElement(7)">7</button>
				<button class="btn btn-light" @click="addElement(8)">8</button>
				<button class="btn btn-light" @click="addElement(9)">9</button>
				<button class="btn btn-light" @click="addOperator('/')">/</button>
				<button class="btn btn-light" disabled>M+</button>
			</div>
			<div class="d-flex justify-content-between vac-buttons">
				<button class="btn btn-light" @click="addElement(4)">4</button>
				<button class="btn btn-light" @click="addElement(5)">5</button>
				<button class="btn btn-light" @click="addElement(6)">6</button>
				<button class="btn btn-light" @click="addOperator('*')">*</button>
				<button class="btn btn-light" disabled>M-</button>
			</div>
			<div class="d-flex justify-content-between vac-buttons">
				<button class="btn btn-light" @click="addElement(1)">1</button>
				<button class="btn btn-light" @click="addElement(2)">2</button>
				<button class="btn btn-light" @click="addElement(3)">3</button>
				<button class="btn btn-light" @click="addOperator('-')">-</button>
				<button class="btn btn-light" disabled>MS</button>
			</div>
			<div class="d-flex justify-content-between vac-buttons">
				<button class="btn btn-light" @click="plusMinus()">±</button>
				<button class="btn btn-light" @click="addElement(0)">0</button>
				<button class="btn btn-light" @click="addElement('.')">.</button>
				<button class="btn btn-light" @click="addOperator('+')">+</button>
				<button class="btn btn-primary" @click="equals()">=</button>
			</div>
		</div>
    </div>
</template>

<script>
import translator from '../utils/translations/translator'
export default {
	name: 'StandardCalculator',
	props: {
		locale: { type: String, required: true },
	},
	data: () => ({
		current: '0',
		result: 0,
		operation: null,

		operators: ['/','*','-','+']
	}),
	computed: {
		current_last() {
			return this.current[this.current.length - 1]
		},
	},
	methods: {
		/**
		 * Effectue des traductions dans la langue choisie
		 * 
		 * @param {String} key 
		 * @return {String}
		 */
		__vac_translate(key) {
			return translator(key, this.locale)
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

		addElement(element) {
			if (this.current == '0' && element != '.') {
				this.current = ''
			}
			if (this.operation != null && this.operation != '' && !this.operators.includes(this.current_last)) {
				this.current = ''
				this.operation = null
			}
			this.current += ''+element
		},
		clear() {
			this.operation = null;
			this.current = '0';
		},
		backspace() {
			if (this.isNumber(this.current) || typeof this.current != 'string') {
				this.clear()
				return
			}
			this.current = this.current.substring(0, this.current.length - 1);
			if (this.current == '') {
				this.current = '0'
			}
		},
		addOperator(operator) {
			if (this.operators.includes(operator)) {
				if (this.operators.includes(this.current_last)) {
					this.backspace()
				}
				this.current += operator
			}
		},
		plusMinus() {
			this.current = ''+this.current
			if ( (this.current != '0') && this.current.charAt(0) === "-" )  {
				this.current = this.current.slice(1);
			} 
			else {
				this.current = "-" + this.current;
			}
		},

		equals() {
			this.operation = `${this.current} =`
			if ((this.current).indexOf("^") > -1) {
				var base = (this.current).slice(0, (this.current).indexOf("^"));
				var exponent = (this.current).slice((this.current).indexOf("^") + 1);
				this.current = eval("Math.pow(" + base + "," + exponent + ")");
			} 
			else {
				this.current = eval(this.current);
			}
		},

		sqr() {
			this.operation = `sqr(${this.current})`
			this.current = this.current * this.current
		},
		sqrt() {
			this.operation = `√(${this.current})`
			this.current = Math.sqrt(this.current);
		},
		percent() {
			this.operation = `${this.current}%`
		  	this.current = this.current / 100;
		},
		inverse() {
			this.operation = `1/(${this.current})`
		  	this.current = 1 / this.current;
		},
		
	}
}
</script>

<style>
.vac-buttons {
	width: 85%;
	margin: auto auto;
}
.vac-buttons .btn {
	margin: 2.5px;
	min-width: 57.5px;
}
</style>
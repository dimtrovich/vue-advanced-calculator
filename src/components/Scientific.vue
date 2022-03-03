<template>
    <div>
        <div class="vac-screen">
			<div class="w-100 text-right vac-screen-operation">{{ operation }}</div>
			<div class="w-100 text-right vac-screen-result">{{ current }}</div>
		</div>
		<div class="p-0">				
			<div class="d-flex justify-content-between vac-buttons">
				<button class="btn btn-light" :disabled="!isNumber(current)" @click="percent()">%</button>
				<button class="btn btn-light" @click="clear()">CE</button>
				<button class="btn btn-light" @click="clear()">C</button>
				<button class="btn btn-light" @click="backspace()">&larr; Backspace</button>
			</div>
			<div class="d-flex justify-content-between vac-buttons">
				<button class="btn btn-light" :disabled="!isNumber(current)" @click="sin()">sin</button>
				<button class="btn btn-light" :disabled="!isNumber(current)" @click="cos()">cos</button>
				<button class="btn btn-light" :disabled="!isNumber(current)" @click="tan()">tan</button>
				<button class="btn btn-light" :disabled="!isNumber(current)" @click="degrees()">∘</button>
				<button class="btn btn-light" :disabled="!isNumber(current)" @click="radians()">rad</button>
			</div>
			<div class="d-flex justify-content-between vac-buttons">
				<button class="btn btn-light" :disabled="!isNumber(current)" @click="log()">log</button>
				<button class="btn btn-light" :disabled="!isNumber(current)" @click="ln()">ln</button>
				<button class="btn btn-light" :disabled="!isNumber(current)">e</button>
				<button class="btn btn-light" :disabled="!isNumber(current)" @click="exp()">exp</button>
				<button class="btn btn-light" @click="pi()">&#x003C0;</button>
			</div>
			<div class="d-flex justify-content-between vac-buttons">
				<button class="btn btn-light" :disabled="!isNumber(current)" @click="factorial()">n!</button>
				<button class="btn btn-light" :disabled="!isNumber(current)" @click="abs()">|x|</button>
				<button class="btn btn-light" :disabled="!isNumber(current)">mod</button>
				<button class="btn btn-light" @click="addElement('^')">x<sup>y</sup></button>
				<button class="btn btn-light" :disabled="!isNumber(current)" @click="power10()">10<sup>x</sup></button>
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
				<button class="btn btn-light equals" @click="equals()">=</button>
			</div>
		</div>
    </div>
</template>

<script>
import translator from '../utils/translations/translator'
import calculator from '../mixins/calculator'
export default {
	name: 'ScientificCalculator',
	mixins: [calculator],
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
	}
}
</script>
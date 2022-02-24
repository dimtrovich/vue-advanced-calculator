<template>
    <div>
        <div class="w-100 vac-screen">
			<div class="w-100 text-right vac-screen-operation">{{ operation }}</div>
			<div class="w-100 text-right vac-screen-result">{{ current }}</div>
		</div>
		<div>				
			<div class="d-flex justify-content-between vac-buttons">
				<button class="btn btn-light">%</button>
				<button class="btn btn-light">CE</button>
				<button class="btn btn-light">C</button>
				<button class="btn btn-light">&larr; Backspace</button>
			</div>
			<div class="d-flex justify-content-between vac-buttons">
				<button class="btn btn-light">1/x</button>
				<button class="btn btn-light">x²</button>
				<button class="btn btn-light">√</button>
				<button class="btn btn-light" disabled>MC</button>
				<button class="btn btn-light" disabled>MR</button>
			</div>
			<div class="d-flex justify-content-between vac-buttons">
				<button class="btn btn-light">7</button>
				<button class="btn btn-light">8</button>
				<button class="btn btn-light">9</button>
				<button class="btn btn-light">/</button>
				<button class="btn btn-light" disabled>M+</button>
			</div>
			<div class="d-flex justify-content-between vac-buttons">
				<button class="btn btn-light">4</button>
				<button class="btn btn-light">5</button>
				<button class="btn btn-light">6</button>
				<button class="btn btn-light">*</button>
				<button class="btn btn-light" disabled>M-</button>
			</div>
			<div class="d-flex justify-content-between vac-buttons">
				<button class="btn btn-light">1</button>
				<button class="btn btn-light">2</button>
				<button class="btn btn-light">3</button>
				<button class="btn btn-light">-</button>
				<button class="btn btn-light" disabled>MS</button>
			</div>
			<div class="d-flex justify-content-between vac-buttons">
				<button class="btn btn-light">±</button>
				<button class="btn btn-light">0</button>
				<button class="btn btn-light">.</button>
				<button class="btn btn-light">+</button>
				<button class="btn btn-primary">=</button>
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
		current: '',
		result: null,
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
			return translator(key, this.locale)
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
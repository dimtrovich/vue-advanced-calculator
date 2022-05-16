<template>
	<div class="p-1">
		<div class="row">
			<div class="col-6">
				<div class="form-group mt-3">
					<label>{{ __vac_translate('initial_unit') }}</label>
					<select v-model="initial_unit" class="custom-select">
						<option disabled selected>{{ __vac_translate('select_the_initial_unit') }}</option>
						<option v-for="(unit, i) in units" :key="i" :value="unit.value">{{ unit.text }}</option>
					</select>
				</div>
			</div>
			<div class="col-6">
				<div class="form-group mt-3">
					<label>{{ __vac_translate('final_unit') }}</label>
					<select v-model="final_unit" class="custom-select">
						<option disabled selected>{{ __vac_translate('select_the_final_unit') }}</option>
						<option v-for="(unit, i) in units" :key="i" :value="unit.value">{{ unit.text }}</option>
					</select>
				</div>
			</div>
		</div>
		<div class="vac-screen">
			<div class="w-100 text-right vac-screen-operation">{{ displayed_initial_unit}}</div>
			<div class="w-100 text-right vac-screen-result">{{ current }}</div>
		</div>
		<div class="vac-screen outset">
			<div class="w-100 text-right vac-screen-operation">{{ displayed_final_unit }}</div>
			<div class="w-100 text-right vac-screen-result">{{ result }}</div>
		</div>
		<div class="col-10 offset-1 px-0">
			<div class="d-flex justify-content-end vac-buttons">
				<button class="btn btn-light" @click="clear()">CE</button>
				<button class="btn btn-light" @click="backspace()">&larr; Backspace</button>
			</div>
			<div class="d-flex justify-content-between vac-buttons">
				<button class="btn btn-light" style="flex: 1" @click="addElement(7)">7</button>
				<button class="btn btn-light" style="flex: 1" @click="addElement(8)">8</button>
				<button class="btn btn-light" style="flex: 1" @click="addElement(9)">9</button>
			</div>
			<div class="d-flex justify-content-between vac-buttons">
				<button class="btn btn-light" style="flex: 1" @click="addElement(4)">4</button>
				<button class="btn btn-light" style="flex: 1" @click="addElement(5)">5</button>
				<button class="btn btn-light" style="flex: 1" @click="addElement(6)">6</button>
			</div>
			<div class="d-flex justify-content-between vac-buttons">
				<button class="btn btn-light" style="flex: 1" @click="addElement(1)">1</button>
				<button class="btn btn-light" style="flex: 1" @click="addElement(2)">2</button>
				<button class="btn btn-light" style="flex: 1" @click="addElement(3)">3</button>
			</div>
			<div class="d-flex justify-content-end vac-buttons">
				<div style="flex: 1" class="btn"></div>
				<button class="btn btn-light" style="flex: 1" @click="addElement(0)">0</button>
				<button class="btn btn-light" style="flex: 1" @click="addElement('.')">.</button>
			</div>
		</div>
	</div>
</template>

<script>
import converter from '../../mixins/converter'
export default {
	name: 'ScreenConverver',
	mixins: [converter],
	props: {
		units: {type: Array, required: true},
		equivalence: {type: Object, required: true},
		converter: {type: Function}
	},
	methods: {
		convert(number, from, to) {
			if (!this.converter) {
				return (parseFloat(number) * this.equivalence[to]) / this.equivalence[from]
			}
			return this.converter(number, from, to)
		}
	}
}
</script>
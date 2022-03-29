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
			<div class="w-100 text-right vac-screen-result">{{ Math.round(result) }}</div>
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
	name: 'Data',
	mixins: [converter],
	data: () => ({
		units: [
			{ value: 'b', text: 'Bits' },
			{ value: 'o', text: 'Octet(s)' },
			{ value: 'kb', text: 'Kilobit(s)' },
			{ value: 'kbb', text: 'Kibibit(s)' },
			{ value: 'ko', text: 'Kilooctet(s)' },
			{ value: 'kbo', text: 'Kibioctet(s)' },
			{ value: 'mb', text: 'Mégabit(s)' },
			{ value: 'mbb', text: 'Mébibit(s)' },
			{ value: 'mo', text: 'Mégaoctet(s)' },
			{ value: 'mbo', text: 'Mébioctet(s)' },
			{ value: 'gb', text: 'Gigabit(s)' },
			{ value: 'gbb', text: 'Gibibit(s)' },
			{ value: 'go', text: 'Gigaoctet(s)' },
			{ value: 'gbo', text: 'Gibioctet(s)' },
			{ value: 'tb', text: 'Térabit(s)' },
			{ value: 'tbb', text: 'Tébibit(s)' },
			{ value: 'to', text: 'Téraoctet(s)' },
			{ value: 'tbo', text: 'Tébioctet(s)' },
			{ value: 'pb', text: 'Pétabit(s)' },
			{ value: 'pbb', text: 'Pébibit(s)' },
			{ value: 'po', text: 'Pétaoctet(s)' },
			{ value: 'pbo', text: 'Pébioctet(s)' },
			{ value: 'eb', text: 'Exabit(s)' },
			{ value: 'ebb', text: 'Exbibit(s)' },
			{ value: 'eo', text: 'Exaoctet(s)' },
			{ value: 'ebo', text: 'Exbioctet(s)' },
			{ value: 'zb', text: 'Zettabit(s)' },
			{ value: 'zbb', text: 'Zébibit(s)' },
			{ value: 'zo', text: 'Zettaoctet(s)' },
			{ value: 'zbo', text: 'Zébioctet(s)' },
			{ value: 'yb', text: 'Yocbit(s)' },
			{ value: 'ybb', text: 'Yobibit(s)' },
			{ value: 'ybo', text: 'Yottabytes' },
			{ value: 'yo', text: 'Yobioctet(s)' },
		],
		equivalence: {
			b  : 8,
			o  : 1,
			kb : 0.008,
			kbb: 0.007812,
			ko : 0.001,
			kbo: 0.000977,
			mb : 0.000008,
			mbb : 0.000008,
			mo : 0.000001,
			mbo: 0.000000953674316,
			gb : 0.000000008,
			gbb: 0.000000007450581,
			go : 0.000000001,
			gbo: 0.000000000931323,
			tb : 0.000000000008,
			tbb: 0.000000000007276,
			to : 0.000000000001,
			tbo: 0.000000000000909,
			pb : 8.000000e-15,
			pbb: 7.105427e-15,
			po : 1.000000e-15,
			pbo: 8.881784e-16,
			eb : 8.000000e-18,
			ebb: 6.938894e-18,
			eo : 1.000000e-18,
			ebo: 8.673617e-19,
			zb : 8.000000e-21,
			zbb: 6.776264e-21,
			zo : 1.000000e-21,
			zbo: 8.470329e-22,
			yb : 8.000000e-24,
			ybb: 6.617445e-24,
			ybo: 1.000000e-24,
			yo : 8.271806e-25,
		}
	}),
}
</script>
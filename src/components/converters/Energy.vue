<template>
	<screen :equivalence="equivalence" :units="units" :locale="locale" :id="id" />
</template>

<script>
import Screen from './Screen.vue'
import vac from '../../mixins/vac'

export default {
	name: 'Energy',
 	components: { Screen },
	mixins: [vac],
	data() {
		return {
			units: [
				{ value: 'ev',	text: this.__vac_translate('electron_volts') },
				{ value: 'j', 	text: this.__vac_translate('joules') },
				{ value: 'kj', 	text: this.__vac_translate('kilojoules') },
				{ value: 'ct', 	text: this.__vac_translate('thermal_calories') },
				{ value: 'ca', 	text: this.__vac_translate('food_calories') },
				{ value: 'pl', 	text: this.__vac_translate('foot_pounds') },
				{ value: 'utb',	text: this.__vac_translate('british_thermal_units') },
			],
			equivalence: {
				ev: 6.241509e+18,
				j: 1,
				kj: 0.001,
				ct: 0.239006,
				ca: 0.000239,
				pl: 0.737562,
				utb: 0.000948,
			}
		}
	},
}
</script>
<template>
	<screen :equivalence="equivalence" :units="units" :locale="locale" :id="id" />
</template>

<script>
import Screen from './Screen.vue'
import vac from '../../mixins/vac'

export default {
	name: 'Length',
 	components: { Screen },
	mixins: [vac],
	data() {
		return {
			units: [
				{ value: 'n', 		text: this.__vac_translate('nanometers') },
				{ value: 'mi', 		text: this.__vac_translate('microns') },
				{ value: 'mm', 		text: this.__vac_translate('millimeters') },
				{ value: 'cm', 		text: this.__vac_translate('centimeters') },
				{ value: 'm', 		text: this.__vac_translate('meters') },
				{ value: 'km', 		text: this.__vac_translate('kilometers') },
				{ value: 'po', 		text: this.__vac_translate('inches') },
				{ value: 'pi', 		text: this.__vac_translate('feet') },
				{ value: 'y', 		text: this.__vac_translate('yards') },
				{ value: 'mil', 	text: this.__vac_translate('miles') },
				{ value: 'milm', 	text: this.__vac_translate('nautical_miles') },
			],
			equivalence: {
				n   : 1000000000,
				mi  : 1000000,
				mm  : 1000,
				cm  : 100,
				m   : 1,
				km  : 0.001,
				po  : 39.37008,
				pi  : 3.28084,
				y   : 1.093613,
				mil : 0.000621,
				milm: 0.00054,
			}
		}
	},
}
</script>
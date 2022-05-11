<template>
	<screen :equivalence="equivalence" :units="units" :locale="locale" :id="id" />
</template>

<script>
import Screen from './Screen.vue'
import vac from '../../mixins/vac'

export default {
	name: 'Volume',
 	components: { Screen },
	mixins: [vac],
	data() {
		return {
			units: [
				{ value: 'ml', 		text: this.__vac_translate('milliliters') },
				{ value: 'cl', 		text: this.__vac_translate('cubic_centimeters') },
				{ value: 'l', 		text: this.__vac_translate('liters') },
				{ value: 'mc', 		text: this.__vac_translate('cubic_meters') },
				{ value: 'cc_eu', 	text: this.__vac_translate('coffee_spoons') + ' (E.-U)' },
				{ value: 'cs_eu', 	text: this.__vac_translate('soup_spoons') + ' (E.-U)' },
				{ value: 'ol_eu', 	text: this.__vac_translate('fluid_ounces') + ' (E.-U)' },
				{ value: 't_eu', 	text: this.__vac_translate('cups') + ' (E.-U)' },
				{ value: 'p_eu', 	text: this.__vac_translate('pints' ) + ' (E.-U)' },
				{ value: 'l_eu', 	text: this.__vac_translate('liters' ) + ' (E.-U)' },
				{ value: 'g_eu', 	text: this.__vac_translate('gallons') + ' (E.-U)' },
				{ value: 'poc', 	text: this.__vac_translate('cubic_inches') },
				{ value: 'pic', 	text: this.__vac_translate('cubic_feet') },
				{ value: 'yc', 		text: this.__vac_translate('cubic_yards') },
				{ value: 'cc_ru', 	text: this.__vac_translate('coffee_spoons') + ' (R.-U)' },
				{ value: 'cs_ru', 	text: this.__vac_translate('soup_spoons') + ' (R.-U)' },
				{ value: 'ol_ru', 	text: this.__vac_translate('fluid_ounces') + ' (R.-U)' },
				{ value: 'p_ru', 	text: this.__vac_translate('pints' ) + ' (R.-U)' },
				{ value: 'l_ru', 	text: this.__vac_translate('liters' ) + ' (R.-U)' },
				{ value: 'g_ru', 	text: this.__vac_translate('gallons') + ' (R.-U)' },
			],
			equivalence: {
				ml: 1000,
				cl: 1000,
				l: 1,
				mc: 0.001,
				cc_eu: 202.8841,
				cs_eu: 67.62805,
				ol_eu: 33.81402,
				t_eu: 4.226753,
				p_eu: 2.113376,
				l_eu: 1.056688,
				g_eu: 0.264172,
				poc: 61.02374,
				pic: 0.035315,
				yc: 0.001308,
				cc_ru: 168.9364,
				cs_ru: 56.31213,
				ol_ru: 35.19508,
				p_ru: 1.759754,
				l_ru: 0.879877,
				g_ru: 0.219969,
			}
		}
	},
}
</script>
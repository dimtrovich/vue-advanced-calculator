<template>
	<screen :equivalence="equivalence" :units="units" :locale="locale" :id="id" />
</template>

<script>
import Screen from './Screen.vue'
import vac from '../../mixins/vac'

export default {
	name: 'Area',
 	components: { Screen },
	mixins: [vac],
	data() {
		return {
			units: [
				{ value: 'mlc', text: this.__vac_translate('square_millimeters') },
				{ value: 'cc', text: this.__vac_translate('square_centimeters') },
				{ value: 'mc', text: this.__vac_translate('square_meters') },
				{ value: 'h', text: this.__vac_translate('hectares') },
				{ value: 'kmc', text: this.__vac_translate('square_kilometers') },
				{ value: 'poc', text: this.__vac_translate('square_inch') },
				{ value: 'pic', text: this.__vac_translate('square_foot') },
				{ value: 'yc', text: this.__vac_translate('square_yards') },
				{ value: 'a', text: 'Acres' },
				{ value: 'mic', text: this.__vac_translate('square_miles') },
			],
			equivalence: {
				mlc  : 1000000,
				cc : 10000,
				mc : 1,
				h : 0.0001,
				kmc  : 0.000001,
				poc: 1550.003,
				pic : 10.76391,
				yc : 1.19599,
				a  : 0.000247,
				mic : 0.000000386102159,
			}
		}
	},
}
</script>
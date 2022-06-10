<template>
	<screen :equivalence="equivalence" :units="units" :locale="locale" :id="id" />
</template>

<script>
import Screen from './Screen.vue'
import vac from '../../mixins/vac'

export default {
	name: 'Pressure',
 	components: { Screen },
	mixins: [vac],
	data() {
		return {
			units: [
				{ value: 'a',	text: this.__vac_translate('atmospheres') },
				{ value: 'b', 	text: this.__vac_translate('bars') },
				{ value: 'kp', 	text: this.__vac_translate('kilopascals') },
				{ value: 'mm', 	text: this.__vac_translate('millimeters_of_mercury') },
				{ value: 'p', 	text: 'Pascals' },
				{ value: 'l',	text: this.__vac_translate('pounds_per_square_inch') },
			],
			equivalence: {
				a: 0.986923,
				b: 1,
				kp: 100,
				mm: 750.1875,
				p: 100000,
				l: 14.50377,
			}
		}
	},
}
</script>
<template>
	<screen :equivalence="equivalence" :units="units" :locale="locale" :id="id" :converter="convert" />
</template>

<script>
import Screen from './Screen.vue'
import vac from '../../mixins/vac'

export default {
	name: 'Power',
 	components: { Screen },
	mixins: [vac],
	data() {
		return {
			units: [
				{ value: 'w', text: this.__vac_translate('watts') },
				{ value: 'kw', text: this.__vac_translate('kilowatts') },
				{ value: 'cv', text: this.__vac_translate('horsepower_usa') },
				{ value: 'pl', text: this.__vac_translate('foot_pounds_per_minute') },
				{ value: 'btu', text: this.__vac_translate('btu_per_minute') },
			],
			equivalence: {
				w: 1000,
				kw: 1,
				cv: 1.341022,
				pl: 44253.73,
				btu: 56.86902,
			}
		}
	},
}
</script>
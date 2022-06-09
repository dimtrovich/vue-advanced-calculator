<template>
	<screen :equivalence="equivalence" :units="units" :locale="locale" :id="id" />
</template>

<script>
import Screen from './Screen.vue'
import vac from '../../mixins/vac'

export default {
	name: 'Angle',
 	components: { Screen },
	mixins: [vac],
	data() {
		return {
			units: [
				{ value: 'deg',  text: this.__vac_translate('degrees') },
				{ value: 'rad',  text: this.__vac_translate('radians') },
				{ value: 'grad', text: this.__vac_translate('grades') },
			],
			equivalence: {
				deg : 1,
				rad : 0.017453,
				grad: 1.111111,
			}
		}
	},
}
</script>

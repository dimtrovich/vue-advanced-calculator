<template>
	<screen :equivalence="equivalence" :units="units" :locale="locale" :id="id" :converter="convert" />
</template>

<script>
import Screen from './Screen.vue'
import vac from '../../mixins/vac'

export default {
	name: 'Temperature',
 	components: { Screen },
	mixins: [vac],
	data() {
		return {
			units: [
				{ value: 'c', text: 'Celsius' },
				{ value: 'f', text: 'Fahrenheit' },
				{ value: 'k', text: 'Kelvin' },
			],
			equivalence: {
				c: 0,
				f: 32,
				k: 273.1,
			}
		}
	},
	methods: { 
		convert(number, from, to) {
			if (from == 'c') {
				if (to == 'f') {
					return (number * 1.8) + 32
				}
				return number + 273.15
			}
			if (to == 'c') {
				if (from == 'f') {
					return (number - 32) / 1.8
				}
				return number - 273.15
			}
			const tmp = this.convert(number, from, 'c')

			return this.convert(tmp, 'c', to)
		}
	}
}
</script>
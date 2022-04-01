<template>
	<screen :equivalence="equivalence" :units="units" :locale="locale" :id="id" />
</template>

<script>
import Screen from './Screen.vue'
import vac from '../../mixins/vac'

export default {
	name: 'Hour',
 	components: { Screen },
	mixins: [vac],
	data() {
		return {
			units: [
				{ value: 'ms', text: this.__vac_translate('microseconds') },
				{ value: 'mls', text: this.__vac_translate('milliseconds') },
				{ value: 's', text: this.__vac_translate('seconds') },
				{ value: 'm', text: this.__vac_translate('minutes') },
				{ value: 'h', text: this.__vac_translate('hours') },
				{ value: 'j', text: this.__vac_translate('days') },
				{ value: 'sm', text: this.__vac_translate('weeks') },
				{ value: 'a', text: this.__vac_translate('years') },
			],
			equivalence: {
				ms : 60000000,
				mls: 60000,
				s  : 60,
				m  : 1,
				h  : 0.016667,
				j  : 0.000694,
				sm : 0.000099,
				a  : 0.000002,
			}
		}
	},
}
</script>
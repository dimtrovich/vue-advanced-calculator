<template>
	<screen :equivalence="equivalence" :units="units" :locale="locale" :id="id" />
</template>

<script>
import Screen from './Screen.vue'
import vac from '../../mixins/vac'

export default {
	name: 'WeightAndMass',
 	components: { Screen },
	mixins: [vac],
	data() {
		return {
			units: [
				{ value: 'c', text: this.__vac_translate('carats') },
				{ value: 'mg', text: this.__vac_translate('milligrams') },
				{ value: 'cg', text: this.__vac_translate('centigrams') },
				{ value: 'dg', text: this.__vac_translate('decigrams') },
				{ value: 'g', text: this.__vac_translate('grams') },
				{ value: 'dcg', text: this.__vac_translate('decagrams') },
				{ value: 'hg', text: this.__vac_translate('hectograms') },
				{ value: 'kg', text: this.__vac_translate('kilograms') },
				{ value: 'tm', text: this.__vac_translate('metric_tons') },
				{ value: 'o', text: this.__vac_translate('ounces') },
				{ value: 'l', text: this.__vac_translate('pounds') },
				{ value: 's', text: 'Stone' },
				{ value: 'tc', text: this.__vac_translate('short_tons') },
				{ value: 'ta', text: this.__vac_translate('english_tons') },
			],
			equivalence: {
				c  : 5,
				mg : 1000,
				cg : 100,
				dg : 10,
				g  : 1,
				dcg: 0.1,
				hg : 0.01,
				kg : 0.001,
				tm : 0.000001,
				o  : 0.035274,
				l  : 0.002205,
				s  : 0.000157,
				tc : 0.000001,
				ta : 0.000000984206528,
			}
		}
	},
}
</script>
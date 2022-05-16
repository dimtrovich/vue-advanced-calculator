import vac from './vac'

export default {
	mixins: [vac],
	props: {
		converter: {type: Function}
	},
	data: () => ({
		initial_unit: null,
		final_unit: null,
	}),
	computed: {
		displayed_initial_unit() {
			if (this.initial_unit == null) {
				return ''
			}
			return this.units.find(elt => elt.value == this.initial_unit).text
		},
		displayed_final_unit() {
			if (this.final_unit == null) {
				return ''
			}
			return this.units.find(elt => elt.value == this.final_unit).text
		},
		result() {
			const result = this.convert(this.current, this.initial_unit, this.final_unit)
			if (!this.isNumber(result)) {
				return 0
			}
			return this.formatNumber(result, this.precision)
		}
	},
	mounted() {
		this.keyboardPatch()
	},
	methods: {
		/**
		 * Stimulation de l'utilisation du clavier
		 */
		keyboardPatch() {
			document.querySelectorAll('.vac-container[tabindex="-1"]').forEach((el) => {
				el.addEventListener('keydown', (e) => {
					const key = e.key
					if (this.isNumber(key) || ['.'].includes(key)) {
						this.addElement(key)
					}
					if (key == 'Backspace') {
						this.backspace()
					}
					if (key.toLowerCase() == 'c') {
						this.clear(true)
					}
				})
			})
		},

		convert(number, from, to) {
			number = parseFloat(number)
			if (from == null || from === undefined || to == null || to === undefined) {
				return 0
			}
			if (from == to) {
				return number
			}
			if (!this.converter) {
				return (number * this.equivalence[to]) / this.equivalence[from]
			}
			return this.converter(number, from, to)
		}
	}
}
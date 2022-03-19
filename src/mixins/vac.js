import translator from '../utils/translations/translator'

export default {
	props: {
		locale: { type: String, required: true },
		id: { type: String, required: true },
	},
	data: () => ({
		current: '0',
		finished: false,
		operation: null,
	}),
	methods: { 
		/**
		 * Effectue des traductions dans la langue choisie
		 * 
		 * @param {String} key 
		 * @return {String}
		 */
		 __vac_translate(key) {
			return translator(key, this.locale)
		},
		/**
		 * Verifie qu'un element est un nombre
		 * 
		 * @param {any} x
		 * @return {Boolean}
		 */
		isNumber(x) {
			return !isNaN(parseFloat(x)) && isFinite(x);
		},
		/**
		 * Formate un nombre pour etre plus facile à lire
		 * 
		 * @param {Number} x 
		 * @param {Integer} precision 
		 * @example 12345.67 ==> 12 345.67
		 */
        formatNumber(x, precision = 5) {
			const parts = x.toString().split('.')
			const result = []
			result.push(parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " "))
			if (parts[1]) {
				result.push(parts[1].substring(0, precision))
			}
			return result.join('.')
		},

		addElement(element) {
			if (this.current == '0' && element != '.') {
				this.current = ''
			}
			if (['-Infinity', 'NaN', 'Infinity'].includes(this.current.toString())) {
				this.operation = null
				this.current = ''
			}
			if (this.operation != null && this.operation != '' && this.isNumber(this.current)) {
				this.current = ''
				this.operation = null
			}
			this.finished = false;
			this.current += ''+element
		},
		
		clear(all = false) {
			if (all) {
				this.operation = null;
			}
			this.current = '0';
			this.finished = false;
		},
		backspace() {
			if (this.isNumber(this.current) || typeof this.current != 'string') {
				// this.clear()
				// return
			}
			this.current = this.current.substring(0, this.current.length - 1);
			if (this.current == '') {
				this.current = '0'
			}
			this.finished = false;
		},
		
	}
}
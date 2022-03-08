import translator from '../utils/translations/translator'

export default {
	props: {
		locale: { type: String, required: true },
	},
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
	}
}
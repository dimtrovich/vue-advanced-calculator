export default {
	props: {
		locale: { type: String, required: true },
	},
	data: () => ({
		current: '0',
		result: 0,
		operation: null,

		operators: ['/','*','-','+']
	}),
	computed: {
		current_last() {
			return this.current[this.current.length - 1]
		},
	},
	mounted() {
		this.keyboardPatch()
	},
	methods: { 
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
		 * Stimulation de l'utilisation du clavier
		 */
		keyboardPatch() {
			document.querySelectorAll('.vac-container[tabindex="-1"]').forEach((el) => {
				el.addEventListener('keydown', (e) => {
					const key = e.key
					if (this.isNumber(key) || ['(', ')', '.', '^'].includes(key)) {
						this.addElement(key)
					}
					if (this.operators.includes(key)) {
						this.addOperator(key)
					}
					if (key == 'Backspace') {
						this.backspace()
					}
					if (key == 'Enter') {
						this.equals()
					}
					if (key == '²') {
						this.sqr()
					}
					if (key == '%') {
						this.percent()
					}
					if (key.toLowerCase() == 'c') {
						this.clear()
					}
				})
			})
		},

		addElement(element) {
			if (this.current == '0' && element != '.') {
				this.current = ''
			}
			if (this.operation != null && this.operation != '' && this.isNumber(this.current)) {
				this.current = ''
				this.operation = null
			}
			this.current += ''+element
		},
		clear() {
			this.operation = null;
			this.current = '0';
		},
		backspace() {
			if (this.isNumber(this.current) || typeof this.current != 'string') {
				this.clear()
				return
			}
			this.current = this.current.substring(0, this.current.length - 1);
			if (this.current == '') {
				this.current = '0'
			}
		},
		addOperator(operator) {
			if (this.operators.includes(operator)) {
				if (this.operators.includes(this.current_last)) {
					this.backspace()
				}
				this.current += operator
			}
		},
		plusMinus() {
			this.current = ''+this.current
			if ( (this.current != '0') && this.current.charAt(0) === "-" )  {
				this.current = this.current.slice(1);
			} 
			else {
				this.current = "-" + this.current;
			}
		},

		equals() {
			this.operation = `${this.current} =`
			if ((this.current).indexOf("^") > -1) {
				var base = (this.current).slice(0, (this.current).indexOf("^"));
				var exponent = (this.current).slice((this.current).indexOf("^") + 1);
				this.current = eval("Math.pow(" + base + "," + exponent + ")");
			} 
			else {
				this.current = eval(this.current);
			}
		},

		sqr() {
			if (this.isNumber(this.current)) {
				this.operation = `sqr(${this.current})`
				this.current = this.current * this.current
			}
		},
		sqrt() {
			if (this.isNumber(this.current)) {
				this.operation = `√(${this.current})`
				this.current = Math.sqrt(this.current);
			}
		},
		percent() {
			if (this.isNumber(this.current)) {
				this.operation = `${this.current}%`
		  		this.current = this.current / 100;
			}
		},
		inverse() {
			if (this.isNumber(this.current)) {
				this.operation = `1/(${this.current})`
		  		this.current = 1 / this.current;
			}
		},

		factorial() {
			if (this.isNumber(this.current)) {
				this.operation = `fact(${this.current})`
				if (this.current == 0) {
					this.current = "1";
				} 
				else if (this.current < 0) {
					this.current = NaN;
				} 
				else {
					let number = 1;
					for (var i = this.current; i > 0; i--) {
					  	number *=  i;
					}
					this.current = number;
				}
			}
		},
		abs() {
			if (this.isNumber(this.current)) {
				this.operation = `abs(${this.current})`
				this.current = Math.abs(this.current);
			}
		},	  
		pi() {
			this.operation = 'pi';
			this.current = (this.current * Math.PI);
		},

		sin() {
			if (this.isNumber(this.current)) {
				this.operation = `sin(${this.current})`
				this.current = Math.sin(this.current);
			}
		},	  
		cos() {
			if (this.isNumber(this.current)) {
				this.operation = `cos(${this.current})`
				this.current = Math.cos(this.current);
			}
		}, 
		tan() {
			if (this.isNumber(this.current)) {
				this.operation = `tan(${this.current})`
				this.current = Math.tan(this.current);
			}
		},
		radians() {
			if (this.isNumber(this.current)) {
				this.operation = `rad(${this.current})`
				this.current = this.current * (Math.PI / 180);
			}
		},
		degrees() {
			if (this.isNumber(this.current)) {
				this.operation = `deg(${this.current})`
				this.current = this.current * (180 / Math.PI);
			}
		},

		log() {
			if (this.isNumber(this.current)) {
				this.operation = `log(${this.current})`
				this.current = Math.log10(this.current);
			}
		}, 
		ln() {
			if (this.isNumber(this.current)) {
				this.operation = `ln(${this.current})`
				this.current = Math.log(this.current);
			}
		},  
		exp() {
			if (this.isNumber(this.current)) {
				this.current = Math.exp(this.current);
			}
		},
		power10() {
			if (this.isNumber(this.current)) {
				const operation = `10^(${this.current})`;
				this.current = `10^${this.current}`;
				this.equals()
				this.operation = operation;
			}
		}
	}
}
import vac from './vac'

export default {
	mixins: [vac],
	props: {
		locale: { type: String, required: true },
		precision: { type: Number, default: 15}
	},
	data: () => ({
		operators: ['/','*','-','+'],
		is_deg: false,
		is_snd: false,
	}),
	computed: {
		current_last() {
			return this.current[this.current.length - 1]
		},
		result() {
			if (!this.finished || !this.isNumber(this.current)) {
				return this.current;
			}
			return this.formatNumber(this.current, this.precision)
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
						this.clear(true)
					}
				})
			})
		},

		addOperator(operator) {
			if (['-Infinity', 'NaN', 'Infinity'].includes(this.current.toString())) {
				this.operation = null
				this.current = ''
			}
			if (this.operators.includes(operator)) {
				if (this.operators.includes(this.current_last)) {
					this.backspace()
				}
				this.current += operator
			}
			this.finished = false;
		},
		
		plusMinus() {
			this.current = ''+this.current
			if ( (this.current != '0') && this.current.charAt(0) === "-" )  {
				this.current = this.current.slice(1);
			} 
			else {
				this.current = "-" + this.current;
			}
			this.finished = false;
		},

		equals() {
			this.operation = `${this.current} =`
			if (this.current.toString().indexOf("^") > -1) {
				var base = (this.current).slice(0, (this.current).indexOf("^"));
				var exponent = (this.current).slice((this.current).indexOf("^") + 1);
				this.current = eval("Math.pow(" + base + "," + exponent + ")");
			} 
			else if (this.current.toString().indexOf('MOD') > -1) {
				const parts = this.current.split('MOD');
				if (parts.length != 2) {
					this.current = NaN;
				}
				else {
					this.current = parts[0] % parts[1]
				}
			}
			else {
				this.current = eval(this.current);
			}
			this.finished = true;
		},

		sqr() {
			if (this.isNumber(this.current)) {
				this.operation = `sqr(${this.current})`;
				this.current *= this.current;
				this.finished = true;
			}
		},
		sqrt() {
			if (this.isNumber(this.current)) {
				this.operation = `√(${this.current})`;
				this.current = Math.sqrt(this.current);
				this.finished = true;
			}
		},
		percent() {
			if (this.isNumber(this.current)) {
				this.operation = `${this.current}%`;
		  		this.current = this.current / 100;
				this.finished = true;
			}
		},
		inverse() {
			if (this.isNumber(this.current)) {
				this.operation = `1/(${this.current})`;
		  		this.current = 1 / this.current;
				this.finished = true;
			}
		},

		factorial() {
			if (this.isNumber(this.current)) {
				this.operation = `fact(${this.current})`;
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
				this.finished = true;
			}
		},
		abs() {
			if (this.isNumber(this.current)) {
				this.operation = `abs(${this.current})`;
				this.current = Math.abs(this.current);
				this.finished = true;
			}
		},	  
		pi() {
			this.operation = 'pi';
			this.current = Math.PI;
			this.finished = true;
		},

		sin() {
			if (this.isNumber(this.current)) {
				this.operation = `sin${this.is_snd ? 'h' : ''}(${this.current} ${this.is_deg ? '°' : 'rad'})`;
				const current = this.is_deg ? this.toRadians(this.current) : this.current
				this.current = this.is_snd ? Math.sinh(current) : Math.sin(current);
				this.finished = true;
			}
		},	  
		cos() {
			if (this.isNumber(this.current)) {
				this.operation = `cos${this.is_snd ? 'h' : ''}(${this.current} ${this.is_deg ? '°' : 'rad'})`;
				const current = this.is_deg ? this.toRadians(this.current) : this.current
				this.current = this.is_snd ? Math.cosh(current) : Math.cos(current);
				this.finished = true;
			}
		}, 
		tan() {
			if (this.isNumber(this.current)) {
				this.operation = `tan${this.is_snd ? 'h' : ''}(${this.current} ${this.is_deg ? '°' : 'rad'})`;
				const current = this.is_deg ? this.toRadians(this.current) : this.current
				this.current = this.is_snd ? Math.tanh(current) : Math.tan(current);
				this.finished = true;
			}
		},
		toRadians(x) {
			return x * (Math.PI / 180);
		},
		toDegrees(x) {
			return x / (Math.PI / 180);
		},

		log() {
			if (this.isNumber(this.current)) {
				this.operation = `log(${this.current})`;
				this.current = Math.log10(this.current);
				this.finished = true;
			}
		}, 
		ln() {
			if (this.isNumber(this.current)) {
				this.operation = `ln(${this.current})`;
				this.current = Math.log(this.current);
				this.finished = true;
			}
		},  
		exp() {
			if (this.isNumber(this.current)) {
				this.current = Math.exp(this.current);
				this.finished = true;
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
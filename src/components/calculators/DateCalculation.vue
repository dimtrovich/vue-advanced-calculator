<template>
	<div class="p-3">
		<select v-model="type" class="custom-select">
			<option value="difference">{{ __vac_translate('difference_between_date') }}</option>
			<option value="operations">{{ __vac_translate('add_or_substract_dayjs') }}</option>
		</select>
		<br />
		<div class="form-group mt-3">
    		<label>{{ __vac_translate('from') }}</label>
    		<input type="date" v-model="from" class="form-control" />
  		</div>
		<div v-if="type == 'difference'">
			<div class="form-group">
				<label>{{ __vac_translate('to') }}</label>
				<input type="date" v-model="to" class="form-control" />
			</div>
			<br>
			<h6>{{ __vac_translate('difference') }}</h6>
			<h5 class="font-weight-bold">{{ difference }}</h5>
			<h5 class="">{{ displayed_difference }}</h5>
		</div>
	</div>
</template>

<script>
import vac from '../../mixins/vac'
export default {
	name: 'DateCalculation',
	mixins: [vac],
	data: () => ({
		type: 'difference',
		from: currentDate(),
		to: currentDate()
	}),
	computed: {
		/**
		 * Difference en heure
		 */
		difference_dates() {
			const date1 = (new Date(this.from)).getTime();
         	const date2 = (new Date(this.to)).getTime();
         
		 	if (date1 > date2) {
				return date1 - date2;
			 }
		 	return date2 - date1;
        },
		/**
		 * Difference en jours
		 */
		difference_days() {
			return this.difference_dates / (1000 * 3600 * 24);
		},
		/**
		 * Difference global
		 */
		difference() {
			let diff = this.difference_days;

			let result = [];

			let diffYear = parseInt(diff / 365);
			diff = diff % 365;
			if (diffYear > 0) {
				let res = `${diffYear} `;
				res += (diffYear > 1) ? this.__vac_translate('years') :  this.__vac_translate('year');
				result.push(res);
			}

			let diffMonth = parseInt(diff / 30);
			diff = diff % 30;
			if (diffMonth > 0) {
				let res = `${diffMonth} `;
				res += (diffMonth > 1) ? this.__vac_translate('months') :  this.__vac_translate('month');
				result.push(res);
			}

			let diffWeek = parseInt(diff / 7);
			diff = diff % 7;
			if (diffWeek > 0) {
				let res = `${diffWeek} `;
				res += (diffWeek > 1) ? this.__vac_translate('weeks') :  this.__vac_translate('week');
				result.push(res);
			}

			if (diff > 0) {
				let res = `${diff} `;
				res += (diff > 1) ? this.__vac_translate('days') :  this.__vac_translate('day');
				result.push(res);
			}

			return result.join('; ').toLowerCase();
		},
		displayed_difference() {
			if (this.difference_days == 0) {
				return this.__vac_translate('identics_dates');
			}
			if (this.difference_days == 1) {
				return `1 ${this.__vac_translate('day').toLowerCase()}`;
			}
			return `${this.difference_days} ${this.__vac_translate('days').toLowerCase()}`;
		}
	}
}

const currentDate = () => {
	const today = new Date();

	let month = today.getMonth() + 1;
	if (month < 10) {
		month = `0${month}`;
	}

	let day = today.getDate();
	if (day < 10) {
		day = `0${day}`;
	}

	return `${today.getFullYear()}-${month}-${day}`;
}
</script>
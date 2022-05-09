<template>
	<div :id="id" class="vac-container position-relative w-100 border rounded" tabindex="-1">
		<div class="vac-overlay" :class="{'active': open_sidebar}" @click="open_sidebar = !open_sidebar"></div>
		<nav class="vac-sidebar d-flex flex-column justify-content-between" :class="{'active': open_sidebar}">
			<div class="vac-dismiss-btn text-center rounded-circle position-absolute" @click="open_sidebar = !open_sidebar"><i class="fas fa-times"></i></div>
			<div class="vac-sidebar-header px-1 pt-1 text-center">
				<h4 class="h5 font-weight-bold vac-sidebar-title">{{ title }}</h4>
				<h5 class="h6 text-muted">{{ description }}</h5>
			</div>
			<div class="vac-sidebar-menu container">
				<ul class="list-unstyled w-100">
					<h5 class="font-weight-bold text-muted h6">{{ __vac_translate('calculator') }}</h5>
					<li><a href="#" :class="{active: mode == 'standard'}" @click.prevent="changeMode('standard')"><i class="fa fa-calculator"></i> {{ __vac_translate('standard') }}</a></li>
					<li><a href="#" :class="{active: mode == 'scientific'}" @click.prevent="changeMode('scientific')"><i class="fa fa-flask"></i> {{ __vac_translate('scientific') }}</a></li>
					<li><a href="#" :class="{active: mode == 'date_calculation'}" @click.prevent="changeMode('date_calculation')"><i class="fa fa-calendar-alt"></i> {{ __vac_translate('date_calculation') }}</a></li>
					<br>
					<h5 class="font-weight-bold text-muted h6">{{ __vac_translate('converter') }}</h5>
					<li><a href="#" :class="{active: mode == 'currency'}" @click.prevent="changeMode('currency')"><i class="fa fa-dollar-sign"></i> {{ __vac_translate('currency') }}</a></li>
					<li><a href="#" :class="{active: mode == 'length'}" @click.prevent="changeMode('length')"><i class="fa fa-ruler-combined"></i> {{ __vac_translate('length') }}</a></li>
					<li><a href="#" :class="{active: mode == 'area'}" @click.prevent="changeMode('area')"><i class="fa fa-th"></i> {{ __vac_translate('area') }}</a></li>
					<li><a href="#" :class="{active: mode == 'weight_and_mass'}" @click.prevent="changeMode('weight_and_mass')"><i class="fa fa-weight-hanging"></i> {{ __vac_translate('weight_and_mass') }}</a></li>
					<li><a href="#" :class="{active: mode == 'hour'}" @click.prevent="changeMode('hour')"><i class="fa fa-clock"></i> {{ __vac_translate('hour') }}</a></li>
					<li><a href="#" :class="{active: mode == 'data'}" @click.prevent="changeMode('data')"><i class="fa fa-hdd"></i> {{ __vac_translate('data') }}</a></li>
				</ul>
			</div>
			<div class="vac-sidebar-footer p-1 w-100">
				<div class="btn-group w-100 btn-group-block">
					<button class="btn btn-sm btn-light btn-block" type="button">{{ __vac_translate('about') }}</button>
				</div>
			</div>
		</nav>

		<!-- Page Content  -->
		<div class="vac-content w-100 p-1">
			<div class="d-flex justify-content-between mb-1">
				<button class="btn btn-sm btn-secondary" @click="open_sidebar = !open_sidebar"><i class="fa fa-bars"></i></button>
				<div class="text-center">
					<h4 class="font-weight-bold h5">{{ __vac_translate(mode) }}</h4>
					<h5 class="font-weight-bold text-muted small m-0">{{ title }}</h5>
				</div>
				<button class="btn btn-sm btn-light"><i class="fa fa-undo"></i></button>
			</div>

			<standard :locale="locale" :id="id" v-if="mode == 'standard'" />
			<scientific :locale="locale" :id="id" v-if="mode == 'scientific'" />
			<date-calculation :locale="locale" :id="id" v-if="mode == 'date_calculation'" />
			<data-converter :locale="locale" :id="id" v-if="mode == 'data'" />
			<hour :locale="locale" :id="id" v-if="mode == 'hour'" />
			<weight-and-mass :locale="locale" :id="id" v-if="mode == 'weight_and_mass'" />
			<area-converter :locale="locale" :id="id" v-if="mode == 'area'" />
			<length :locale="locale" :id="id" v-if="mode == 'length'" />
		</div>
	</div>
</template>

<script>
import DateCalculation from './components/calculators/DateCalculation.vue'
import Scientific from './components/calculators/Scientific.vue'
import Standard from './components/calculators/Standard.vue'
import Area from './components/converters/Area.vue'
import Data from './components/converters/Data.vue'
import Hour from './components/converters/Hour.vue'
import Length from './components/converters/Length.vue'
import WeightAndMass from './components/converters/WeightAndMass.vue'

import vac from './mixins/vac'
export default {
	name: "VueAdvancedCalculator",
  	components: { 
		Standard,
    	Scientific,
    	DateCalculation,
    	DataConverter: Data,
    	Hour,
    	WeightAndMass,
    	AreaConverter: Area,
    	Length 
	},
	mixins: [vac],
	props: {
		id: {type: String, default: 'vac-' + (new Date).getTime() },
		title: {type: String, default: 'Vue Advanced Calculator'},
		description: {type: String, default: 'An advanced scientific calculator for Vue.js'},
		defaultMode: {type: String, default: 'standard'},
		locale: {type: String, default: 'fr'}
	},
	data: () => ({
		open_sidebar: false,
		mode: '',
	}),

	mounted() {
		this.mode = this.defaultMode
	},

	methods: {
		/**
		 * Change le type de calculatrice
		 * 
		 * @param {String} mode
		 */
		changeMode(mode) {
			this.mode = mode 
			this.open_sidebar = false
		}
	}
}
</script>

<style scoped>
@import url('./assets/styles/core.css');
</style>

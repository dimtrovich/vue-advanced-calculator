import VueAdvancedCalculator from './Calculator.vue'
const Calculator = {
  install (Vue) {
    Vue.component('vue-advanced-calculator', VueAdvancedCalculator)
  }
}
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Calculator)
}

export default Calculator
export {
	VueAdvancedCalculator
}
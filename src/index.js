import Calculator from './Calculator.vue'
const VueAdvancedCalcultator = {
  install (Vue) {
    Vue.component('vue-advanced-calcultator', Calculator)
  }
}
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueAdvancedCalcultator)
}

export default VueAdvancedCalcultator
<template>
  <div id="app">
    <div class="row mt-4">
		<div class="col-3 offset-2">
			<calculator />
		</div>
	</div>
  </div>
</template>

<script>
import Calculator from './Calculator.vue'

export default {
  name: 'App',
  components: {
    Calculator
  }
}
</script>


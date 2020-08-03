<template>
	<component :is="layout"></component>	
</template>

<script>
	import ErrorSystem from './components/layout/Error.vue'
	import layoutInicio from './components/layout/layoutInicio.vue'
	import layoutPractica from './components/layout/layoutPractica.vue' 
	import {mapState} from 'vuex'
	export default{
	  components:{
	  	'ErrorSystem':ErrorSystem,
	    'layoutInicio':layoutInicio,
	    'layoutPractica':layoutPractica
	  },
	  computed:mapState(['layout'])
	}

</script>

<style lang="scss">

</style>

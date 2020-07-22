<template>
	<component :is="layout"></component>	
</template>

<script>
	import layoutInicio from './components/layout/layoutInicio.vue'
	import layoutPractica from './components/layout/layoutPractica.vue' 
	import {mapState} from 'vuex'
	export default{
	  components:{
	    'layoutInicio':layoutInicio,
	    'layoutPractica':layoutPractica
	  },
	  computed:mapState(['layout'])
	}

</script>

<style lang="scss">

</style>

<template>
  <section class="content">
    <div class="row">
      <h1>Error de conexion</h1>
    </div>
    <div class="row">
      <div class="content">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h3>Se perdio conexion con el servidor</h3>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
	export default{
		created(){
			this.$store.commit('SET_LAYOUT','ErrorSystem')  
		}
	}
</script>
<style>
	
</style>
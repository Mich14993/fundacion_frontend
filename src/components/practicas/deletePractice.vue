<template>
	<div>
		<a href="#" v-on:click.prevent="dePractice" class="colorde"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
	</div>
</template>
<script>

	export default{
		name:'deletePractice',
		props:['practice'],
		data(){
			return{

			}
		},
		methods:{
			dePractice:function(){
				let confirmDelete=confirm(`¿Desea eliminar la práctica?`)
				if (confirmDelete) {
					this.$api.delete(`/deletePractica/${this.practice}`)
					 .then(response=>{
					 	if (response.status==200) {
					 		this.$eventbus.$emit('deletepractice')
					 		toastr.error('Eliminado Correctamente')
					 	}	
					 }).catch(error=>{
					 	if (error.response.status==500) {
					 		toastr.error(error.response.data.message)
					 	}
					 })
					}	
				}
				
				
		}
	}
</script>
<style>
	/*@import "~vuejs-dialog/dist/vuejs-dialog.min.css";*/
	@import "~toastr/build/toastr.css";
</style>
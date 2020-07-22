<template>
	<div>
		<a href="#" v-on:click.prevent="dePractice" class="colorde"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
	</div>
</template>
<script>
//import Vue from 'vue'
//import VuejsDialog from "vuejs-dialog"
Vue.use(VuejsDialog,{
	html: true, 
    loader: true,
    okText: 'Eliminar',
    cancelText: 'Cancelar',
    animation: 'bounce',
    reverse:true 
})
	export default{
		name:'deletePractice',
		props:['practice'],
		data(){
			return{

			}
		},
		methods:{
			dePractice:function(){
				
				/*this.$dialog.confirm("¿Esta seguro de eliminar la practica?", {
	    			loader: true 
				})	.then((dialog) => {

	        	setTimeout(() => {
	        	this.$api.delete(`/deletePractica/${this.practice}`)
					 .then(response=>{
					 	if (response.status==200) {
					 		this.$eventbus.$emit('deletepractice')
					 		dialog.close()
	     					toastr.error('Eliminado Correctamente')
					 	}	
					 }).catch(error=>{
					 	if (error.status==500) {
					 		dialog.close()
	     					toastr.error(response.data.message)
					 	}
					 })
				})
	 			})*/
			}
		}
	}
</script>
<style>
	/*@import "~vuejs-dialog/dist/vuejs-dialog.min.css";*/
	@import "~toastr/build/toastr.css";
</style>
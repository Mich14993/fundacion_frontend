<template>
	<div>
		<button class="btn btn-primary btn-md" data-toggle="modal" data-target="#myModal">Crear práctica <i class="fa fa-plus" aria-hidden="true"></i></button>
		<div class="modal fade" id="myModal" role="dialog">
		    <div class="modal-dialog">
		      <div class="modal-content">
		        <div class="modal-header">
		          <button type="button" class="close" data-dismiss="modal">&times;</button>
		          <h4 class="modal-title">Crear práctica</h4>
		        </div>
		        <form v-on:submit.prevent="PostPractica()">
					<div class="modal-body">
			            <div class="form-group">
						    <h4>Se añadirá la práctica {{pracount + 1}} a la materia {{materia.nombre}}</h4>
						  </div>
					</div>
			        <div class="modal-footer">
			       	  <button type="submit" class="btn btn-primary">Agregar</button>
			          <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
			        </div>
		    	</form>
		      </div>
		    </div>
		  </div>	
	</div>
	
</template>
<script>
	
	export default{
		name:'createPractice',
		props:['materia',"pracount"],
		created(){
		},
		methods:{
			PostPractica:function(){
				this.$api.post(`/postPractica`,{
					number_practice:this.pracount+1,
					title:'Práctica ',
					materia_id:this.materia,
				}).then(response=>{
					if(response.status==200){
						this.$eventbus.$emit('createpractice')
						$('#myModal').modal('hide');
						toastr.success(response.data.message)
					}
				}).catch(error=>{
					if (error.status==500) {
						toastr.error(error.data.message)
					}
				})
			}
		}
	}
</script>
<style>
	@import "~toastr/build/toastr.css";
</style>
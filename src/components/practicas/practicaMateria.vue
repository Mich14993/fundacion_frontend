<template>
	<div>
	 	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
	 		<div class="col-lg-4 col-md-4 col-sm-6 col-xs-8 col-xs-offset-2">
	 			<h3 class="colortitle">ASIGNATURAs:</h3>
	 			
	 			<h2>{{materia.nombre}}</h2>
	 		</div>
	 		<div class="col-lg-4 col-md-4 col-sm-6 col-xs-8 col-xs-offset-2">
	 			<h3 class="colortitle">SIGLA:</h3>
	 			<h2>{{materia.sigla}}</h2>
	 		</div>
	 	</div>
	 	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
	 		<h1 class="alineaciontexto colortitle">LISTA DE PRACTICAS</h1>
	 	</div>
	 	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
	 		<createPractice :materia='materia' :pracount="practicas_count"/>
	 	</div>
	 	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
	 		<div v-for="pra in practicas">
	 		<div class="panel panel-default">
			  <div class="panel-body">
			  	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			  	<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11">
			  		<h3>{{pra.title}}{{pra.number_practice}}</h3>
			  	</div>
			  	<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
			  		<deletePractice :practice="pra._id"/>
			  	</div>
			  	</div>
			  	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			  		<router-link :to="'/test/'+pra._id" class="btn btn-success btn-md">ver mas >></router-link>
			  		
			  	</div>
			  </div>
			</div>
			</div>
	 	</div>
	</div>
</template>
<script>
	  export default {
	  	name:'practicas',
	  	components:{
	  		createPractice:()=>import('./createPractice'),
	  		deletePractice:()=>import('./deletePractice')
	  	},
        data(){
        	return{
        		materia:{},
        		practicas:[],
        		practicas_count:Number,
        		errors:[]
        	}
        },
        created () {
            this.$store.commit('SET_LAYOUT', 'layoutPractica')
            this.getPracticas();
            this.$eventbus.$on('createpractice',()=>{
	         this.getPracticas();  
	       });
            this.$eventbus.$on('deletepractice',()=>{
	         this.getPracticas();  
	       });
        },
        methods:{
        	getPracticas:function(){
        		this.$api.get(`/getPractica/${this.$route.params.id}`)
        		.then(response=>{
        			this.materia=response.data.materia,
        			this.practicas=response.data.practicas,
        			this.practicas_count=response.data.practicas_count
        		}).catch(error=>{
        			this.errors=error
        		})
        	}	
        }
    }
</script>
<style scope>
	.alineaciontexto{
		text-align: center;
	}
	.colortitle{
		color:#06830A ;  
	}
	.colorde{
		color:red;
		font-size: 20px;
	}
</style>
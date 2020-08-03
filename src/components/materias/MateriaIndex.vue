<template>
  <section class="content">
    <div class="row">
      <h1 class="titleMaterias">LISTA DE MATERIAS</h1>
    </div>
    <div class="row">
      <div class="content">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div v-for="ma in materias">
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 spaciofinal" >
              <li>
                <router-link :to="{path:`/practicas/${ma._id}`}">{{ma.nombre}}</router-link>
              </li>   
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name:'listado',
  data(){
    return{
      materias:[],
    }
  },
  created(){
    this.getMaterias()
  },
  mounted(){
    this.$store.commit('SET_LAYOUT','layoutInicio')  
  },
  methods:{
    getMaterias(){
      this.$api.get('/materia')
      .then(response=>{
        this.materias=response.data.materia
      })
      .catch(error=>{
         
      })  
    }
  }
}
</script>
<style lang="scss">
  .titleMaterias{
    text-align: center;
    color: #4366A2;
  }
</style>
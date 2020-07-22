import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */'./components/materias/MateriaIndex.vue')
    },
    {
      path:'/practicas/:id',
      name:'practicas',
      component:()=>import(/* webpackChunkName: "practicas" */'./components/practicas/practicaMateria.vue'),
      //props: (route) => ({ query: route.query.prueba })
    },
    //{
    //  path:'/test/:id',
    //  name:'test',
    //  component:()=>import(/* webpackChunkName: "test" */'./components/cuestionario/cuestionarioindex.vue')
    //}

    /*,
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ /*'./views/About.vue')
    },
    {
      path:'/practicas/:id',
      name:'practicas',
      component:()=>import(/* webpackChunkName: "about" *//*'./components/practicas/practicaMateria.vue')
    }*/
  ]
})

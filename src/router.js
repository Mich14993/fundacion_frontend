import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  
  routes: [
    {
      path:'/connectionerror',
      name:'connectionerror',
      component:()=>import(/* webpackChunkName: "home" */'./components/errors/errorconnection.vue')
    },
    {
      path:'/error500',
      name:'error500',
      component:()=>import(/* webpackChunkName: "home" */'./components/errors/error500.vue')
    },
    {
      path:'/error404',
      name:'error404',
      component:()=>import(/* webpackChunkName: "home" */'./components/errors/error404.vue')
    },
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

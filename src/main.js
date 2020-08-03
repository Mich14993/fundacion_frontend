import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'


import api from './api'

window.toastr=require('toastr');
window.toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$eventbus = new Vue()
api.interceptors.response.use(
  response => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
error => {
  if (!error.response) {
      router.replace({
        path: "/connectionerror",
        query: { redirect: router.currentRoute.fullPath }
      })
    }
    else{
      if (error.response.status) {
        switch (error.response.status) {
          
          case 404:
            router.replace({
              path: "/error404",
              query: { redirect: router.currentRoute.fullPath }
            })
            break         
        }
        return Promise.reject(error);
      }
    }
  }
)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

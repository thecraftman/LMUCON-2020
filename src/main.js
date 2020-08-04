import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import VueSweetalert2 from 'vue-sweetalert2'
import carousel from 'vue-owl-carousel'
import VueFirestore from 'vue-firestore'
import Multiselect from 'vue-multiselect'
import { VueTypedJs } from 'vue-typed-js'

// register globally
import LoadScript from 'vue-plugin-load-script'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.component('vue-typed-js', VueTypedJs)
Vue.use(LoadScript)
Vue.use(Vuelidate)
Vue.use(VueFirestore)
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674'
}

Vue.use(VueSweetalert2, options)
// vue global component initialization
Vue.component('carousel', carousel)
Vue.component('multiselect', Multiselect)

// vue global component initialization
Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    Vue.loadScript('public/assets/js/jquery.min.js')
  },
  render: h => h(App)
}).$mount('#app')

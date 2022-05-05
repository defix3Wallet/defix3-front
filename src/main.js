// =========================================================
// * Vuetify Material Dashboard - v2.1.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vuetify-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueAnimateOnScroll from 'vue-animate-onscroll'
// import GAuth from 'vue-google-oauth2'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import VueQRCodeComponent from 'vue-qr-generator'

// const gauthOption = {
//   clientId: 'CLIENT_ID.apps.googleusercontent.com',
//   scope: 'profile email',
//   prompt: 'select_account',
// }

// Vue.use(GAuth, gauthOption)
Vue.use(Viewer, { defaultOptions: { zIndex: 9999 } })
Vue.config.productionTip = false
Vue.use(VueSweetalert2)
Vue.use(VueAnimateOnScroll)
Vue.component('qr-code', VueQRCodeComponent)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')

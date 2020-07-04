import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import "jquery";
import "popper.js";
import "bootstrap";
import VueResource from "vue-resource"
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

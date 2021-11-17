import Vue from "vue";
import App from "./App";
import router from "./router";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

/*
ACLARACIONES
- Por cuestiones de simplicidad intalé BootstrapVue pero hice el código conforme Bootstrap.
- Importé todos los css de Bootstrap, y es por eso que modifiqué los css para que se parezcan,
pero lo que se debe hacer es modificar los datos de primary, secondary, etc y utilizarlos.
- Los colores de los botones dejé los correspondiente a primary, secondary.
- Para la validación, usé el correspondiente a una documentación de vue, pero suelo usar otras validaciones
como vee-validate por ejemplo.
- Sólo realicé Login, los demás está incompleto.
*/

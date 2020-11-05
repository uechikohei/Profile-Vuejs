import Vue from 'vue'
import App from './App.vue'
import router from './router';
import vuetify from './plugins/vuetify';
import AOS from "aos";
import "aos/dist/aos.css";
//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far, faGithub);
Vue.component('v-fa', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router: router,
  vuetify,
  created() {
    AOS.init();
  },
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import './registerServiceWorker';
// import Notifications from 'vue-notification';
import router from './router';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.css';
import 'mdbvue/lib/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import vuetimeline from "@growthbunker/vuetimeline";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import SequentialEntrance from 'vue-sequential-entrance';
import 'vue-sequential-entrance/vue-sequential-entrance.css';

Vue.use(vuetimeline);

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

Vue.use(SequentialEntrance);
// Vue.use(Notifications);

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Store from './store';

const store = new Store();

Vue.config.productionTip = false;

new Vue({
  data: { store },
  router,
  render: (h: any) => h(App),
  beforeMount() {
    this.$router.replace('/');
  },
}).$mount('#app');

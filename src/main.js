import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './vuex.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import $ from "jquery";
import axios from 'axios';
const app=createApp(App)
app.use(store)
app.use(router)
app.config.globalProperties.$=$
const vm =app.mount('#app')
// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router.js';
// import store from './vuex.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';
// import $ from "jquery";
// Vue.prototype.$ = $;
// import axios from 'axios';
// const app =createApp(App);
// axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
// axios.defaults.withCredentials = true;
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// app.config.globalProperties.$axios = axios;

// app.use(store(axios));
// app.use(router);
// app.config.globalProperties.$=$;
// const vm =app.mount('#app'); 
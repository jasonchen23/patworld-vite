import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './vuex.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import $ from "jquery";
import axios from 'axios';
const app =createApp(App);
axios.defaults.baseURL = import.meta.env.VITE_APP_API_BASE_URL;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$=$;

app.use(store);
app.use(router);
app.use(VueSweetalert2);

const vm =app.mount('#app');

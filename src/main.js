import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './vuex.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import $ from "jquery";

const app=createApp(App)
app.use(store)
app.use(router)
app.config.globalProperties.$=$
const vm =app.mount('#app')

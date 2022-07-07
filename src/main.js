import * as Vue from 'vue';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/main.js'
import axios from 'axios';
import VueAxios from 'vue-axios'

const app = Vue.createApp()
app.use(VueAxios, axios)

createApp(App).use(router).mount('#app')

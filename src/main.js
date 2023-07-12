import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from 'axios'

createApp.config.productionTip = false
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

createApp(App)
  .use(router)
  .mount('#app')
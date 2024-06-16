import './assets/main.css'
import 'aos/dist/aos.css'; // Import the CSS file
import AOS from 'aos'; // Import AOS
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// Mount the app
const vm = app.mount('#app');

// Initialize AOS after the app is mounted
vm.$nextTick(() => {
  AOS.init();
});
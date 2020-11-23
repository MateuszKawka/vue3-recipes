import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "uikit/dist/css/uikit.min.css"
import "uikit/dist/js/uikit-icons.min.js"
import "uikit/dist/js/uikit.min.js"

createApp(App).use(store).use(router).mount('#app')

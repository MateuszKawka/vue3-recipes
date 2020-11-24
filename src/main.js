import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "uikit/dist/css/uikit.min.css"
import "uikit/dist/js/uikit.min.js"
import "uikit/dist/js/uikit-icons.min.js"
import "material-design-icons"

createApp(App).use(router).mount('#app')

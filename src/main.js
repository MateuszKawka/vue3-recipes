import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";
import "material-design-icons";

createApp(App)
  .use(router)
  .use(Toast, {
    timeout: 1500,
    icon: false,
    closeButton: false,
    hideProgressBar: true,
    position: "bottom-center",
    pauseOnHover: false,
    pauseOnFocusLoss: false
  })
  .mount("#app");

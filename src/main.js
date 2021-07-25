import {
    createApp
} from "vue";
import App from "./App.vue";
import store from "./store";

// import {
//     BootstrapVue,
//     IconsPlugin
// } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/main.css";
import 'remixicon/fonts/remixicon.css'

createApp(App).use(store).mount("#app");
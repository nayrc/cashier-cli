import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/main.css";
import "remixicon/fonts/remixicon.css";

createApp(App).use(store).use(router).mount("#app");

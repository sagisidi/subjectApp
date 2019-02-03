require("./bootstrap");
import App from "./App.vue";
import router from "./router";
import "@progress/kendo-theme-default/dist/all.css";
import "@progress/kendo-ui";
import "@mdi/font/css/materialdesignicons.css";
import {
    Button,
    ButtonsInstaller
} from "@progress/kendo-buttons-vue-wrapper";
import "@progress/kendo-ui";
import Vuetify from "vuetify";
import ECharts from "vue-echarts/components/ECharts";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts-gl";
import "vuetify/dist/vuetify.min.css";
import axios from "axios";
import VueAxios from "vue-axios";

window.Vue = require("vue");

var Vue = require("vue");

Vue.use(require("vue-resource"));
Vue.use(ButtonsInstaller);
Vue.use(ECharts);
Vue.use(Vuetify, {
    iconfont: "mdi" // 'md' || 'mdi' || 'fa' || 'fa4'
});
Vue.use(VueAxios, axios);

export const serverBus = new Vue();
/* eslint-disable no-new */
const app = new Vue({
    router,
    components: {
        Button,
        "v-chart": ECharts
    },
    render: h => h(App)
}).$mount("#app");

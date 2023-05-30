import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap"
import "jquery"

let Bootstrap = require('bootstrap')
let jQuery = require('bootstrap')

import './assets/vendor/jquery/jquery.js';
import './assets/vendor/jquery/jquery.min.js';
import './assets/vendor/jquery/jquery.slim.js';
import './assets/vendor/jquery/jquery.slim.min.js';
import './assets/vendor/jquery-easing/jquery.easing.js';
import './assets/vendor/jquery-easing/jquery.easing.min.js';
import './assets/vendor/fontawesome-free/css/all.min.css';
import './assets/css/sb-admin-2.min.css';
import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
import './assets/js/sb-admin-2.min.js';
import './assets/vendor/chart.js/Chart.min.js';
import './assets/js/demo/chart-area-demo.js';
import './assets/js/demo/chart-pie-demo.js';
import "./assets/styles/style.css";

createApp(App).use(store).use(router).mount("#app");

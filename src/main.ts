import { createApp } from 'vue';
import App from './App.vue';
// @ts-ignore
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';

import './assets/main.css';

const app = createApp(App);

app.use(Donut);

app.mount('#app');

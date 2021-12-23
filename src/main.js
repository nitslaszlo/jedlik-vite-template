import { createApp } from 'vue';

import vuetify from './plugins/vuetify';
import routes from './routes';
import store from './store';
import App from './app.vue';

const app = createApp(App);
app.config.productionTip = true;
app.config.devtools = true;
app.use(routes);
app.use(store);
app.use(vuetify);

app.mount('#app');

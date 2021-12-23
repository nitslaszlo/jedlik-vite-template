import { createApp } from "vue";

import vuetify from "./plugins/vuetify";
import routes from "./routes";
import App from "./app.vue";

const app = createApp(App);

app.use(routes);
app.use(vuetify);

app.mount("#app");

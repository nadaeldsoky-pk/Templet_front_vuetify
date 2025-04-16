import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "@/assets/styles.css"
import "@/assets/main.css"

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        primary: '#673AB7',
        secondary: '#9C27B0',
        accent: '#E91E63',
        error: '#F44336',
        warning: '#FF9800',
        info: '#2196F3',
        success: '#4CAF50'
      }
    }
  },
  icons: {
    iconfont: 'mdi'
    
  }

});
createApp(App).use(vuetify).use(router).mount("#app");

// src/plugins/vuetify.js
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
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
})

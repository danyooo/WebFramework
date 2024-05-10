import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import './assets/main.css'

// Components
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).mount('#app')
// colors
Vue.use(vuetify, {
  theme: {
    redcardbg: '#f49156',
    secondary: '#29B6F6',
    anyColor: '#0000'
}})
import { createApp } from 'vue'
import App from './App.vue'
//import the created and configured router (see router/index.ts)
import router from './router'

//create the app instance
const app = createApp(App)

//allow our app to use the router instance
app.use(router)

//render the App.vue page
app.mount('#app')

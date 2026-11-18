import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css'
import router from './router' // 引入路由

const app = createApp(App)
app.use(createPinia())
app.use(router) // 2. 注册路由
app.mount('#app')

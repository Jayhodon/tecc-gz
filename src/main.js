import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router/index'
import 'element-plus/dist/index.css'
import "swiper/swiper.min.css"
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')

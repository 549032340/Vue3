import { createApp } from 'vue'
import App from './App.vue'
import SvgIcon from './components/SvgIcon/index.vue'
import router,{setupRouter} from './router'
import { setupStore } from './store' // 状态管理
// 完整引入element-plus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
const app = createApp(App)
app.component('svg-icon',SvgIcon)

setupRouter(app) // 引入路由
setupStore(app) // 引入状态管理
// app.use(ElementPlus)  // 完整引入element-plus



router.isReady().then(()=>{
  app.mount('#app')
})

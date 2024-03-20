import { createRouter, createWebHistory } from 'vue-router/auto'
import { RouterView } from 'vue-router/auto'

import 'virtual:uno.css'

const app = createApp(RouterView)
const router = createRouter({ history: createWebHistory() })

app.use(createPinia())
app.use(router)

app.mount('#app')

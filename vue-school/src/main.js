//import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Class from './components/Class.vue'
import Registration from './components/Registration.vue'
import Team from './components/Team.vue'
import Testimon from './components/Testimon.vue'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/class', component: Class },
        { path: '/registration', component: Registration },
        { path: '/team', component: Team },
        { path: '/testimon', component: Testimon },
    ]
});

const app = createApp(App)

app.use(router)

app.mount('#app')

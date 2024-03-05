import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import BirdsComp from './components/Birds.vue'
import FlowerComp from './components/Flower.vue'
import AboutUs from './components/About.vue'
import ContactUs from './components/Contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/about', component: AboutUs },
        { path: '/contact', component: ContactUs },
    ]
});

const app = createApp(App)

app.use(router)

app.component('food-item', FoodItem)
app.component('birds-comp', BirdsComp)
app.component('flower-comp', FlowerComp)


app.mount('#app')

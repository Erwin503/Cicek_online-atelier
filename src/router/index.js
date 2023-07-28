// import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Cart from '@/components/Atelier/Cart.vue'
import Constructor from '@/components/Atelier/Constructor.vue'
import Parametr from '@/components/Atelier/Parametr.vue'
import Login from '@/components/Auth/Login.vue'
import Registration from '@/components/Auth/Registration.vue'
import Reviews from '@/components/Auth/Reviews.vue'
import Clothes from '@/components/Atelier/Clothes.vue'


const routes = [
{
path: '/',
name: 'home',
component: Home
},
{
path: '/cart',
name: 'cart',
component: Cart
},
{
path: '/parametr',
name: 'parametr',
component: Parametr
},
{
path: '/reviews',
name: 'reviews',
component: Reviews
},
{
path: '/login',
name: 'login',
component: Login
},
{
path: '/registration',
name: 'registration',
component: Registration
},
{
path: '/constructor',
name: 'constructor',
component: Constructor
},
{
path: '/clothes',
name: 'clothes',
component: Clothes
},
]


const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})

export default router

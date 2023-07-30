// import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Cart from '@/components/Atelier/Cart.vue'
import ConstructorDress from '@/components/Atelier/Constructor/ConstructorDress.vue'
import ConstructorHudi from '@/components/Atelier/Constructor/ConstructorHudi.vue'
import ConstructorPants from '@/components/Atelier/Constructor/ConstructorPants.vue'
import ConstructorShirt from '@/components/Atelier/Constructor/ConstructorShirt.vue'
import ConstructorSkirt from '@/components/Atelier/Constructor/ConstructorSkirt.vue'
import Parametr from '@/components/Atelier/Parametr.vue'
import Login from '@/components/Auth/Login.vue'
import Registration from '@/components/Auth/Registration.vue'
import Reviews from '@/components/Auth/Reviews.vue'
import Profile from '@/components/Auth/Profile.vue'
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
path: '/constructorDress',
name: 'constructorDress',
component: ConstructorDress
},
{
path: '/constructorHudi',
name: 'constructorHudi',
component: ConstructorHudi
},
{
path: '/constructorPants',
name: 'constructorPants',
component: ConstructorPants
},
{
path: '/constructorShirt',
name: 'constructorShirt',
component: ConstructorShirt
},
{
path: '/constructorSkirt',
name: 'constructorSkirt',
component: ConstructorSkirt
},
{
path: '/clothes',
name: 'clothes',
component: Clothes
},
{
path: '/profile',
name: 'profile',
component: Profile
},
]


const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})

export default router

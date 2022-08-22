import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import Cadastro from '../views/Cadastro' 
import Parametro from '../views/Parametro'

//Aqui define todas as rotas
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/leonardo',
    name: 'leonardo',
    component: Cadastro
  },
  //Parametro
  {
    path: '/leonardo/:dado',
    name: 'leonardo',
    component: Parametro
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

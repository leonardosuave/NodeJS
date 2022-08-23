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
    //Rota pai
    path: '/leonardo',
    name: 'leonardo',
    component: Cadastro,
    children: [
      //Rota filho
      {
        path: 'suave',
        name: 'suave',
        component: AboutView
      }
    ]
  },
  //Parametro
  {
    path: '/parametro/:dado',
    name: 'parametro',
    component: Parametro
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

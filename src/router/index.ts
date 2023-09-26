import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import PaymentSelector from '../views/PaymentSelector.vue'
import HistoryView from '../views/HistoryView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/history',
    name: 'HistoryView',
    component: HistoryView
  },
  {
    path: '/payment/:id',
    name: 'PaymentSelector',
    component: PaymentSelector
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('authToken');
  if (!token && to.name !== 'LoginView') {
    // Si no hay token y no estás en la página de inicio de sesión,
    // redirige a la página de inicio de sesión
    next({ name: 'LoginView' });
  } else {
    // Si hay token o estás en la página de inicio de sesión, permite la navegación
    next();
  }
});

export default router

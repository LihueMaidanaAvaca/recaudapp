import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import PaymentSelector from '../views/PaymentSelector.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/payment/:id',
    name: 'payment',
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
  if (!token && to.name !== 'Login') {
    // Si no hay token y no estás en la página de inicio de sesión,
    // redirige a la página de inicio de sesión
    next({ name: 'Login' });
  } else {
    // Si hay token o estás en la página de inicio de sesión, permite la navegación
    next();
  }
});

export default router

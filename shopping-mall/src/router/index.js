import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [{
  path: '/',
  name: 'Home',
  component: () => import('../views/home/Home')
}, {
  path: '/shop/:id',
  name: 'Shop',
  component: () => import('../views/shop/Shop')
}, {
  path: '/cartlist',
  name: 'CartList',
  component: () => import('../views/cartList/CartList')
}, {
  path: '/orderConfirmation/:id',
  name: 'OrderConfirmation',
  component: () => import('../views/orderConfirmation/OrderConfirmation')
}, {
  path: '/login',
  name: 'Login',
  component: () => import('../views/login/Login'),
  beforeEnter (to, from, next) {
    const { isLogin } = localStorage
    isLogin ? next({ name: 'Home' }) : next()
  }
}, {
  path: '/register',
  name: 'Register',
  component: () => import('../views/register/Register'),
  beforeEnter (to, from, next) {
    const { isLogin } = localStorage
    isLogin ? next({ name: 'Home' }) : next()
  }
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  const { name } = to
  const isLoginOrRegister = (name === 'Login' || name === 'Register');
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login' })
})

export default router

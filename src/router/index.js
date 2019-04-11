import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/pages/Home'
import Classify from '@/components/pages/classify'
import ShoppingCart from '@/components/pages/ShoppingCart'
import My from '@/components/pages/My'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/classify',
          name: 'Classify',
          component: Classify
        },
        {
          path: '/shoppingcart',
          name: 'ShoppingCart',
          component: ShoppingCart
        },
        {
          path: '/my',
          name: 'My',
          component: My
        }
      ]
    }
  ]
})

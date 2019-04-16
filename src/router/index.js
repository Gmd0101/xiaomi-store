import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/pages/Home'
import Classify from '@/components/pages/classify'
import ShoppingCart from '@/components/pages/ShoppingCart'
import My from '@/components/pages/My'
import Discover from '@/components/pages/discover'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/home',
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
        },
        {
          path: '/discover',
          name: 'Discover',
          component: Discover
        }
      ]
    }
  ]
})

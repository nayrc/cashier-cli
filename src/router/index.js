import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Home from "../view/Home.vue"
import Items from "../view/Items.vue"

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/items',
    name: 'Items',
    component: Items
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
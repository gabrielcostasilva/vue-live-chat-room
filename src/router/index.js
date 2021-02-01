import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome'
import Chatroom from '../views/Chatroom'
import { projectAuth } from '../firebase/config'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: (to, from, next) => {
      let user = projectAuth.currentUser

      if (user) {
        next({ name: 'Chatroom'})

      } else {
        next()
      }
    }
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: (to, from, next) => {
      let user = projectAuth.currentUser
      console.log(`Current user in auth guard: ${user}`)

      if (!user) {
        next({ name: 'Welcome' })

      } else {
        next()
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

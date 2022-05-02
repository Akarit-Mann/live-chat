import { createRouter, createWebHistory } from 'vue-router'
import WelcomE from "../views/WelcomE.vue"
import ChatRoom from "../views/ChatRoom.vue"
import {auth} from "../firebase/config"

const routes = [
  {
    path:"/",
    name:"WelcomE",
    component:WelcomE,
    beforeEnter: (to, from, next) => {
      let user = auth.currentUser;
      if (!user) {
        next();
      } else{
        next({name:"ChatRoom"})
      }
    }
  },
  {
    path:"/chatroom",
    name:"ChatRoom",
    component:ChatRoom,
    beforeEnter: (to, from, next) => {
      let user = auth.currentUser;
      if (user) {
        next();
      } else{
        next({name:"WelcomE"})
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

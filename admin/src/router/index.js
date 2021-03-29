import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import CategotryEdit from '../views/CategotryEdit.vue'
import CategotryList from '../views/CategotryList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {path:'/categories/create',component:CategotryEdit},
      {path:'/categories/list',component:CategotryList}
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router

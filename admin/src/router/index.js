import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import CategotryEdit from '../views/CategotryEdit.vue'
import CategotryList from '../views/CategotryList.vue'


import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'

import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'

import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'

import AdEdit from '../views/AdEdit.vue'
import AdList from '../views/AdList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {path:'/categories/create',component:CategotryEdit},
      {path:'/categories/edit/:id',component:CategotryEdit,props:true},
      {path:'/categories/list',component:CategotryList},

      {path:'/items/create',component:ItemEdit},
      {path:'/items/edit/:id',component:ItemEdit,props:true},
      {path:'/items/list',component:ItemList},

      { path: '/heroes/create', component: HeroEdit },
      { path: '/heroes/edit/:id', component: HeroEdit, props: true },
      { path: '/heroes/list', component: HeroList },

      { path: '/articles/create', component: ArticleEdit },
      { path: '/articles/edit/:id', component: ArticleEdit, props: true },
      { path: '/articles/list', component: ArticleList },

      { path: '/ads/create', component: AdEdit },
      { path: '/ads/edit/:id', component: AdEdit, props: true },
      { path: '/ads/list', component: AdList }
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router

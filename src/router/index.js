import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Case  from '@/pages/Case'
import Curpartner from '@/pages/Curpartner'
import News from '@/pages/News'
import ServicePage from '@/pages/ServicePage'
import About from '@/pages/About'
import NewsDetail from '@/pages/NewsDetail'
import CaseDetail from '@/pages/CaseDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/case',
      name: 'Case',
      component: Case 
    },
    {
      path: '/curpartner',
      name: 'Curpartner',
      component: Curpartner 
    },
    {
      path: '/news',
      name: 'News',
      component: News 
    },
    {
      path: '/service',
      name: 'ServicePage',
      component: ServicePage 
    },
    {
      path: '/about',
      name: 'About',
      component: About 
    },
    {
      path: '/newsDetail',
      name: 'NewsDetail',
      component: NewsDetail 
    },
    {
      path: '/caseDetail',
      name: 'CaseDetail',
      component: CaseDetail 
    }
  ]
})

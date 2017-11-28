import Vue from 'vue'
import Router from 'vue-router'
import Main from 'pages/main'
import HomeLeftMenu from 'components/home-left-menu'
import SysmagerLeftMenu from 'components/sysmager-left-menu'
import Home from 'pages/home/home'
import Home2 from 'pages/home/home2'
import Sysmager1 from 'pages/sysmager/sysmager-page1'
import Sysmager2 from 'pages/sysmager/sysmager-page2'

import page1 from 'pages/page1/page1'
import page2 from 'pages/page2/page2'
import page3 from 'pages/page3/page3'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      component: Main,
      children: [
        {
          path: '',
          redirect: 'home1'
        },
        {
          path: 'home1',
          components: {
            leftMenu: HomeLeftMenu,
            body: Home
          }
        },
        {
          path: 'home2',
          components: {
            leftMenu: HomeLeftMenu,
            body: Home2
          }
        }
      ]
    },
    {
      path: '/sysmager',
      component: Main,
      children: [
        {
          path: '',
          redirect: 'sysmager1'
        },
        {
          path: 'sysmager1',
          components: {
            leftMenu: SysmagerLeftMenu,
            body: Sysmager1
          }
        },
        {
          path: 'sysmager2',
          components: {
            leftMenu: SysmagerLeftMenu,
            body: Sysmager2
          }
        }
      ]
    },
    {
      path: '/page1',
      name: 'page1',
      component: page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    },
    {
      path: '/page3',
      name: 'page3',
      component: page3
    }
  ],
  linkActiveClass: 'active'
})

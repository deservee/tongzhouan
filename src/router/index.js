import Vue from 'vue'
import Router from 'vue-router'
import HomeRouter from '../pages/home'
// import HomeRouter from 'pages/home'
import BriefRouter from '../pages/brief'
import NoticeRouter from '../pages/notice'
import NewsRouter from '../pages/news'
//import TestRouter from '../pages/news/test.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      //首页路由
      path: '/',
      name: 'HomeRouter',
      component: HomeRouter
    },
    {
      //相关简介路由
      path: '/brief',
      name: 'BriefRouter',
      component: BriefRouter
    },
    {
      //公告路由
      path: '/notice',
      name: 'NoticeRouter',
      component: NoticeRouter
    },
    {
      //新闻中心路由
      path: '/news',
      name: 'NewsRouter',
      component: NewsRouter,
      // children:[
      //   {
      //     path:'/news',
      //     name:'TestRouter',
      //     component:TestRouter,
      //   },
      // ]
    },
    // {
    //   //新闻中心子路由
    //   path: '/news/:userId',
    //   name: 'NewsRouter',
    //   component: NewsRouter
    // }
  ]
})

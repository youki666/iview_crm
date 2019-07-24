import Vue from 'vue'
import Router from 'vue-router'
import HomeSideBar from './components/Home/HomeSideBar.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeSideBar,
      children: [
        { path: '/home/index', component: () => import(/* webpackChunkName: "about" */ './components/Home/HomeIndex.vue') },
        { path: '/home/customerList', component: () => import(/* webpackChunkName: "about" */ './components/Home/CustomerList.vue') },
        { path: '/home/manage', component: () => import(/* webpackChunkName: "about" */ './components/Home/manage.vue') },
        { path: '/home/saleinfo', component: () => import(/* webpackChunkName: "about" */ './components/Home/saleInfo.vue') },
        { path: '/home/newcustomer', component: () => import(/* webpackChunkName: "about" */ './components/Home/newCustomer.vue') },
        { path: '/home/allOpp', component: () => import(/* webpackChunkName: "about" */ './components/Home/allOpp.vue') },
        { path: '/home/allOrder', component: () => import(/* webpackChunkName: "about" */ './components/Home/allOrder.vue') },
        { path: '/home/newclue', component: () => import(/* webpackChunkName: "about" */ './components/Home/newclue.vue') },
        { path: '/home/newbussiness', component: () => import(/* webpackChunkName: "about" */ './components/Home/newbussiness.vue') }
      ],
      redirect: '/home/index'
    },
    {
      path: '/customer',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/Customer/CustomerSideBar.vue'),
      children: [
        { path: '/customer/index', component: () => import(/* webpackChunkName: "about" */ './components/Customer/CustomerIndex.vue') },
        { path: '/customer/customerList', component: () => import(/* webpackChunkName: "about" */ './components/Customer/CustomerList.vue') }
      ],
      redirect: '/customer/index'
    },
    {
      path: '/bussiness',
      name: 'bussiness',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/BussinessSideBar.vue')
    },
    {
      path: '/order',
      name: 'order',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/OrderSideBar.vue')
    }
  ]
})

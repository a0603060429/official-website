import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/view/Login'], resolve),
    }, {
      path: '/register',
      name: 'Register',
      component: resolve => require(['@/view/Register'], resolve),
    }, {
      path: '/home*',
      name: 'Home',
      component: resolve => require(['@/view/HomePage'], resolve),
    }, {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/view/PageView'], resolve),
      children: [
        {
          path: '/index',
          redirect: '/housecard1'
        }, {
          path: '/housecard1',
          name: 'housecard1',
          component: resolve => require(['@/view/HouseCard'], resolve),
          meta: {
            title: '区分マンション'
          }
        }, {
          path: '/housecard2',
          name: 'housecard2',
          component: resolve => require(['@/view/HouseCard2'], resolve),
          meta: {
            title: '区分店舗'
          }
        }, {
          path: '/housecard3',
          name: 'housecard3',
          component: resolve => require(['@/view/HouseCard3'], resolve),
          meta: {
            title: '区分事務所'
          }
        }, {
          path: '/housecard4',
          name: 'housecard4',
          component: resolve => require(['@/view/HouseCard4'], resolve),
          meta: {
            title: '一棟収益ビル'
          }
        }, {
          path: '/housecard5',
          name: 'housecard5',
          component: resolve => require(['@/view/HouseCard5'], resolve),
          meta: {
            title: '売土地'
          }
        }, {
          path: '/contactus',
          name: 'contactus',
          component: resolve => require(['@/view/ContactUs'], resolve),
          meta: {
            title: '联系我们'
          }
        },
        // {
        //   path: '/servicedetail',
        //   name: 'servicedetail',
        //   component: resolve => require(['@/view/ServiceDetail'],resolve),
        //   meta: {
        //     title: '相关服务'
        //   }
        // },
      ],
    }
  ]
})

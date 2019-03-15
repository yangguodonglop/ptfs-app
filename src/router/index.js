import Vue from 'vue'
//import Router from 'vue-router'
import index from '@/pages/index'
import description from '@/pages/description'
import device from '@/pages/device'
import devicedetails from '@/pages/devicedetails'
import mining from '@/pages/mining'
import management from '@/pages/management'
import user from '@/pages/user'
import ceshi from '@/pages/ceshi'
import ceshinext from '@/pages/ceshinext'
import saomiao from '@/pages/saomiao'
import login from '@/pages/login'
import VueRouter from 'vue-router'
import store from '@/store'



Vue.use(VueRouter)
  const routes= [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/description',
      name:'description',
      component:description,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    },
    {
      path:'/device',
      name:'device',
      component:device,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    },
    {
      path:'/devicedetails',
      name:'devicedetails',
      component:devicedetails,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    },
    {
      path:'/mining',
      name:'mining',
      component:mining
    },
    {
      path:'/management',
      name:'management',
      component:management
    },
    {
      path:"/user",
      name:'user',
      component:user
    },
    {
      path:"/ceshi",
      name:'ceshi',
      component:ceshi
    },
    {
      path:"/ceshinext",
      name:'ceshinext',
      component:ceshinext
    },
    {
      path:"/saomiao",
      name:'saomiao',
      component:saomiao
    },{
      path:'/login',
      name:'login',
      component:login
    }
  ]
  
const router = new VueRouter({
  routes: routes
})


// 全局路由守卫
router.beforeEach((to, from, next) => {
 
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  const nextRoute = ['user','device'];
  // let isLogin = global.isLogin;  // 是否登录

  let isLogin = store.state.Authorization

  // 未登录状态；当路由到nextRoute指定页时，跳转至login
  if (nextRoute.indexOf(to.name) >= 0) {  
    if (!isLogin) {
      console.log('what fuck');
      router.push({ name: 'login' ,query: {redirect: to.path}})
    }else{
      next({
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
  // 已登录状态；当路由到login时，跳转至home 
  if (to.name === 'login') {
    if (isLogin) {
      router.push({ name: 'home' });
    }
  }
  next({
    query: {
      redirect: to.fullPath
    }
  });
});


// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {     // 哪些需要验证
//     if (!sessionStorage.getItem("token")) {                      // token存在条件   
//       next({
//         path: '/saomiao',                                               // 验证失败要跳转的页面
//         query: {
//            redirect: to.fullPath                                 // 要传的参数
//          }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next()                                                       // 确保一定要调用 next()
//   }
// })

// export default router
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     let token = sessionStorage.getItem('Authorization');
 
//     if (token === 'null' || token === '') {
//       next('/saomiao');
//     } else {
//       next();
//     }
//   }
// });
 
export default router;

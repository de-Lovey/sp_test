import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Detail from '@/pages/Detail'
import Price from '@/pages/components/Price'
import Evaluate from '@/pages/components/evaluate'
import Compile from '@/pages/compile'
import Succ from '@/pages/Succ'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // 页面详情页
    {
      path: '/detail',
      name: 'detail',
      component: Detail,
      // 二级菜单
      children:[{
        path: 'price',component: Price
      },{
        path: 'evaluate',component: Evaluate
      }],redirect:'/detail/price'
    },
    // 页面 编辑页
    {
      path: '/compile',
      name: 'compile',
      component: Compile
    },
    // 编辑完成页面
    {
      path: 'Succ',
      name: 'succ',
      component: Succ
    }
  ]
})

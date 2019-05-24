import Vue from 'vue'
import Router from 'vue-router'
// 引用自定义组件
import Home from '@/components/HelloFromVux'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    }
  ]
})

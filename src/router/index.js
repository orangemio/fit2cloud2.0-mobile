import Vue from 'vue'
import Router from 'vue-router'
// 引用自定义组件
import Home from '@/components/HelloFromVux'
import tagOne from '@/components/tagOne'
import tagThree from '@/components/tagThree'
import tagTwo from '@/components/tagTwo'
import me from '@/components/me'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path: '/tagOne',
      name: 'tagOne',
      component: tagOne
    },
    {
      path: '/tagTwo',
      name: 'tagTwo',
      component: tagTwo
    },
    {
      path: '/tagThree',
      name: 'tagThree',
      component: tagThree
    },
    {
      path: '/me',
      name: 'me',
      component: me
    }
  ]
})

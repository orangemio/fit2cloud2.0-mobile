import Vue from 'vue'
import Router from 'vue-router'
// 引用自定义组件
import Home from '@/components/HelloFromVux'
import Tasks from '@/components/Tasks'
import Apply from '@/components/Apply'
import me from '@/components/me'
import ServiceMenu from '@/components/ServiceMenu'
import about from '@/components/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path: '/Tasks',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/ServiceMenu',
      name: 'ServiceMenu',
      component: ServiceMenu
    },
    {
      path: '/Apply',
      name: 'Apply',
      component: Apply
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
// 引用自定义组件
import Home from '@/components/HelloFromVux'
import Tasks from '@/components/Tasks/Tasks'
import Apply from '@/components/Apply/Apply'
import me from '@/components/Me/me'
import ServiceMenu from '@/components/Services/ServiceMenu'
import about from '@/components/Me/about'
import overview from '@/components/Me/overview'
import InstanceList from '@/components/Me/InstanceList'

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
    },
    {
      path: '/overview',
      name: 'overview',
      component: overview
    },
    {
      path: '/InstanceList',
      name: 'InstanceList',
      component: InstanceList
    }
  ]
})

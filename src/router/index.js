import Vue from 'vue'
import Router from 'vue-router'
// 引用自定义组件
import Home from '@/components/HelloFromVux'
import Tasks from '@/components/Tasks'
import Services from '@/components/Services'
import Apply from '@/components/Apply'
import me from '@/components/me'
import about from '@/components/about'
import overview from '@/components/overview'
import InstanceList from '@/components/InstanceList'

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
      path: '/Services',
      name: 'Services',
      component: Services
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

import Vue from 'vue'
import Router from 'vue-router'
// 引用自定义组件
import Tasks from '@/components/Tasks/Tasks'
import Apply from '@/components/Apply/Apply'
import me from '@/components/Me/me'
import Service from '@/components/Services/Service'
import about from '@/components/Me/about'
import overview from '@/components/Me/overview'
import InstanceList from '@/components/Me/InstanceList'
import login from '@/components/Login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: login
    },
    {
      path: '/Tasks',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/Service',
      name: 'Service',
      component: Service
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

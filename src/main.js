// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import { AjaxPlugin } from 'vux' // load AjaxPlugin module
import vuexI18n from 'vuex-i18n' // load vuex i18n module

Vue.use(Vuex)
const store = new Vuex.Store()
Vue.use(AjaxPlugin)
Vue.use(VueRouter)
Vue.use(vuexI18n.plugin, store)

const translationsEn = {
  'content': 'This is some {type} content'
}
const translationsDe = {
  'My nice title': 'Ein schöner Titel',
  'content': 'Dies ist ein toller Inhalt'
}

// add translations directly to the application
Vue.i18n.add('en', translationsEn)
Vue.i18n.add('de', translationsDe)
// set the start locale to use
Vue.i18n.set('en')

const routes = [{
  path: '/',
  component: Home
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')

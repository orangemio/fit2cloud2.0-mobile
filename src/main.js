// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import App from './App'
import router from './router' // 引入自定义路由
import { AjaxPlugin } from 'vux' // load AjaxPlugin module
import vuexI18n from 'vuex-i18n' // load vuex i18n module
import translationsEn from './i18n/translationsEn'
import translationsCn from './i18n/translationsCn'

Vue.use(Vuex)
const store = new Vuex.Store()
Vue.use(AjaxPlugin)
Vue.use(vuexI18n.plugin, store)

// add translations directly to the application
Vue.i18n.add('en', translationsEn)
Vue.i18n.add('cn', translationsCn)
// set the start locale to use
Vue.i18n.set('en')

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')

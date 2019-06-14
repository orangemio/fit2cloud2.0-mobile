import objectAssign from 'object-assign'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'
import FastClick from 'fastclick'
import App from './App'
import router from './router' // 引入自定义路由
import { LocalePlugin } from 'vux' // load AjaxPlugin module
import vuexI18n from 'vuex-i18n' // load vuex i18n module
import vuxLocales from './locales/all.yml'
import componentsLocales from './locales/components.yml'
// 公用组件
import global from '@/components/common.vue'
import store from '@/store/index'
Vue.prototype.COMMON = global

// require('es6-promise').polyfill()
// const store = new Vuex.Store()
Vue.use(LocalePlugin)
store.registerModule('user_key_data', {
  state: {
    ak: '',
    sk: ''
  },
  mutations: {
    switchkey (state) {
    }
  }
})
Vue.use(vuexI18n.plugin, store, {
  moduleName: 'i18n'
  // 找不到翻译文件回调
  // onTranslationNotFound (locale, key) {
  //   console.warn(`i18n :: Key '${key}' not found for locale '${locale}'`)
  // }
})
const finalLocales = {
  'en': objectAssign(vuxLocales['en'], componentsLocales['en']),
  'zh-CN': objectAssign(vuxLocales['zh-CN'], componentsLocales['zh-CN'])
}

for (let i in finalLocales) {
  Vue.i18n.add(i, finalLocales[i])
}

const nowLocale = Vue.locale.get()
if (/zh/.test(nowLocale)) {
  Vue.i18n.set('zh-CN')
} else {
  Vue.i18n.set('en')
}

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App),
  methods: {
  }
}).$mount('#app-box')

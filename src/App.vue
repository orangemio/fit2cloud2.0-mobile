<template>
  <div id="app">
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">ACloud</x-header>
    <router-view></router-view>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" @on-click-menu="changeLocale" show-cancel></actionsheet>
    </div>
  </div>
</template>


<script>
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem
  },
  methods: {
    changeLocale (locale) {
      this.$i18n.set(locale)
      this.$locale.set(locale)
    }
  },
  data () {
    return {
      menus: {
        'zh-CN': '中文',
        'en': 'English'
      },
      showMenus: false
    }
  },
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
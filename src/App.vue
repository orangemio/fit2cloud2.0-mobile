<template>
  <div id="app">
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">ACloud</x-header>
    <router-view></router-view>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" @on-click-menu="changeLocale"></actionsheet>
    </div>
        <tabbar>
      <tabbar-item selected link="/component/demo">
        <img slot="icon" src="./assets/demo/icon_nav_article.png">
        <span slot="label">{{ $t('index') }}</span>
      </tabbar-item>
      <tabbar-item link="/login">
        <img slot="icon" src="./assets/demo/icon_nav_cell.png">
        <span slot="label">{{ $t('Demo') }}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<i18n>
index:
  zh-CN: 首页
Demo:
  zh-CN: 演示页
</i18n>

<script>
import { Tabbar, TabbarItem, XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    Tabbar,
    TabbarItem,
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
        'language.noop': '<span class="menu-title">Language</span>',
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
.menu-title {
  color: #888;
}
</style>
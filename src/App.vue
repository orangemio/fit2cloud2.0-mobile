<template>
  <div id="app">
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" >Acloud</x-header>
    <router-view></router-view>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" @on-click-menu="changeLocale"></actionsheet>
    </div>
        <tabbar>
      <tabbar-item selected link="/Tasks">
        <img slot="icon" src="./assets/images/icon_nav_article.png">
        <span slot="label">{{ $t('Tasks') }}</span>
      </tabbar-item>
      <tabbar-item link="/ServiceMenu">
        <img slot="icon" src="./assets/images/icon_nav_cell.png">
        <span slot="label">{{ $t('ServiceMenu') }}</span>
      </tabbar-item>
      <tabbar-item link="/Apply">
        <img slot="icon" src="./assets/images/icon_nav_msg.png">
        <span slot="label">{{ $t('Apply') }}</span>
      </tabbar-item>
      <tabbar-item link="/me">
        <img slot="icon" src="./assets/images/icon_nav_me.png">
        <span slot="label">{{ $t('me') }}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<i18n>
Tasks:
  zh-CN: 待办事项
ServiceMenu:
  zh-CN: 服务目录
Apply:
  zh-CN: 申请资源
me:
  zh-CN: 我
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
@font-face {
  font-family: 'iconfont';  /* project id 1230044 */
  src: url('//at.alicdn.com/t/font_1230044_5dkn8ij48jy.eot');
  src: url('//at.alicdn.com/t/font_1230044_5dkn8ij48jy.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1230044_5dkn8ij48jy.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1230044_5dkn8ij48jy.woff') format('woff'),
  url('//at.alicdn.com/t/font_1230044_5dkn8ij48jy.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1230044_5dkn8ij48jy.svg#iconfont') format('svg');
}
.demo-icon {
  font-family: 'iconfont';
  font-size: 18px;
  color: #333333;;
}
.demo-icon-big {
  font-size: 28px;
}
.demo-icon:before {
  content: attr(icon);
}

body {
  background-color: #fbf9fe;
  font-family :'BMW Group Condensed'
}
.menu-title {
  color: #888;
}
</style>

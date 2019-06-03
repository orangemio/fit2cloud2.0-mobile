<template>
  <div>
    <group>
      <cell is-link :title="$t('About me')" link="/component/tabbar-simple"></cell>
    </group>   
    <group>
      <cell is-link :title="$t('Instance List')" link="/component/tabbar-simple"></cell>
      <cell is-link :title="$t('Overview Of Resource')"  link="/component/tabbar-icon"></cell>
      <cell is-link :title="$t('About')" link="/component/tabbar-icon"></cell>
    </group>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>

<i18n>
About me:
  zh-CN: 关于
Instance List:
  zh-CN: 实例列表
Overview Of Resource:
  zh-CN: 总览
About:
  zh-CN: 关于
</i18n>




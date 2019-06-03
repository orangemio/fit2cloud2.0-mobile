<template>
  <div>
    <group>
     <cell icon="./assets/demo/user.svg" is-link :title="$t('About me')" link="http://www.baidu.com"></cell>
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
  zh-CN: 虚拟机列表
Overview Of Resource:
  zh-CN: 资源概况
About:
  zh-CN: 关于
</i18n>




<template>
  <div >
     <tab>
         <tab-item v-for="n in list2" :key="n" :selected="n==='Tiexi'" @on-item-click="onItemClick">{{ n }}</tab-item>
     </tab>
     <br/>

  </div>
</template>


<i18n>
Tiexi:
  zh-CN: 铁西
Dadong:
  zh-CN: 大东
Beijing:
  zh-CN: 北京
Azure:
  zh-CN: Azure
Lab:
  zh-CN: Lab
Aws:
  zh-CN: Aws
</i18n>

<script>
import { Tab, TabItem } from 'vux'
const list = () => ['Tiexi', 'Dadong', 'Beijing', 'Azure', 'Lab', 'Aws']

export default {
  components: {
    Tab,
    TabItem
  },
  data () {
    return {
      list2: list()
    }
  },
  methods: {
    onItemClick (index) {
      console.log('on item click:', index)
    }
  }
}
</script>


<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';

</style>


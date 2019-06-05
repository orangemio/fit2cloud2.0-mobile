<template>
  <div >
     <tab>
         <tab-item v-for="n in list2" :key="n" :selected="n==='Tiexi'" @on-item-click="onItemClick">{{ n }}</tab-item>
     </tab>

     <div style="margin-top:10px;">
         <form-preview :header-label="$t('platform')" header-value="plugin" :body-items="list" :footer-buttons="buttons2" name="demo"></form-preview>
     </div>
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
platform:
  zh-CN: 平台
apply:
  zh-CN: 申请
</i18n>

<script>
import { Tab, TabItem, FormPreview } from 'vux'
const list = () => ['Tiexi', 'Dadong', 'Beijing', 'Azure', 'Lab', 'Aws']

export default {
  components: {
    Tab,
    TabItem,
    FormPreview
  },
  data () {
    return {
      list: [{
        label: '',
        value: 'CentOS 7.3'
      }, {
        label: '',
        value: 'for CL3'
      }, {
        label: '标题标题',
        value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'
      }],
      buttons2: [{
        style: 'primary',
        text: this.$t('apply'),
        onButtonClick: (name) => {
          alert(`clicking ${name}`)
        }
      }],
      list2: list()
    }
  },
  created () {
    this.$http.get('/http://103.235.232.207/vm-service/catalog-product/list').then(({data}) => {
      console.log(data)
    })
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


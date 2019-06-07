<template>
    <div>
    </div>
</template>

<i18n>
付款金额:
  en: Total
标题标题:
  en: Item Title
商品:
  en: Product
很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字:
  en: Long Long Long Long Long Long Long Long Long Long Long Long Content
名字名字名字:
  en: Name Name
电动打蛋机:
  en: Item title
辅助操作:
  en: Info
操作:
  en: Action
点击事件:
  en: Click Event
跳转到首页:
  en: Homepage
</i18n>

<script>
// import http from '@/utils/http'

export default {
  data () {
    return {
      list: [{
        label: '商品',
        value: '电动打蛋机'
      }, {
        label: '标题标题',
        value: '名字名字名字'
      }, {
        label: '标题标题',
        value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'
      }],
      buttons1: [{
        style: 'default',
        text: '辅助操作'
      }, {
        style: 'primary',
        text: this.$t('跳转到首页'),
        link: '/'
      }]
    }
  },
  components: {

  },
  methods: {

  }
}
</script>

<style lang="less">
    
</style>

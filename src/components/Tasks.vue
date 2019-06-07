<template>
    <div class="widget-task">
      <br>
      <form-preview  :body-items="list" :footer-buttons="buttons1"></form-preview>
      <br>
      <form-preview  :body-items="list" :footer-buttons="buttons1"></form-preview>
    </div>
</template>

<i18n>
  申请人:
    en : Applicant
  开始时间:
    en : Start Time
  拒绝:
    en : Reject
  查看:
    en : Process
</i18n>

<script>
// import http from '@/utils/http'
import { FormPreview } from 'vux'
export default {
  data () {
    return {
      list: [{
        label: this.$t('申请人'),
        value: ''
      }, {
        label: this.$t('开始时间'),
        value: ''
      }],
      buttons1: [{
        style: 'default',
        text: this.$t('拒绝')
      }, {
        style: 'primary',
        text: this.$t('查看'),
        onButtonClick: (name) => {
          alert(`clicking ${name}`)
        }
      }]
    }
  },
  Created () {
  },
  components: {
    FormPreview
  },
  methods: {
  }
}
</script>

<style lang="less">
    .weui-form-preview__hd{
      display:none;
    }
</style>

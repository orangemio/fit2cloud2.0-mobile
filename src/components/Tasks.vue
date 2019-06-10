<template>
    <div class="widget-task">
    <br>
      <button-tab>
        <button-tab-item @on-item-click="changetask()" selected>{{ $t('待审批') }}</button-tab-item>
        <button-tab-item @on-item-click="changetask()">{{ $t('已审批') }}</button-tab-item>
      </button-tab>
      <div v-if="taskstats" >
        <br>
        <form-preview   :body-items="list" :footer-buttons="buttons"></form-preview>
      </div>
      <div v-if="!taskstats">
        <br>
        <form-preview  :body-items="list" :footer-buttons="buttons"></form-preview>
      </div>
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
import { FormPreview, ButtonTab, ButtonTabItem } from 'vux'
import http from '@/utils/httpAxios.js'
// import apiSetting from '@/utils/apiSetting.js'
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
      buttons: [{
        style: 'default',
        text: this.$t('拒绝')
      }, {
        style: 'primary',
        text: this.$t('查看'),
        onButtonClick: (name) => {
          alert(`clicking ${name}`)
        }
      }],
      taskstats: true
    }
  },
  mounted () {
    http({
      url: '/api/dashboard/flow/runtime/task/end/1/10',
      method: 'post'
    }, {}).then((res) => {
      console.log(res)
      if (res.data.success === true) {
        this.taskList = res.data.data
        console.log('taskList:', res.data.data)
      }
    })
  },
  components: {
    FormPreview,
    ButtonTab,
    ButtonTabItem
  },
  methods: {
    changetask () {
      if (this.taskstats === true) {
        this.taskstats = false
      } else {
        this.taskstats = true
      }
    }
  }
}
</script>

<style lang="less">
    .weui-form-preview__hd{
      display:none;
    }
</style>

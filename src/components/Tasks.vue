<template>
    <div class="widget-task">
      <br>
      <button-tab>
        <button-tab-item @on-item-click="changetask()" selected>{{ $t('待审批') }}</button-tab-item>
        <button-tab-item @on-item-click="changetask()">{{ $t('已审批') }}</button-tab-item>
      </button-tab>
      <div v-if="taskstats&&(unfinishTaskListCount!=0)" v-for="unfinishlist in unfinishlists" >
        <br>
        <form-preview :body-items="unfinishlist" :footer-buttons="buttons"></form-preview>
      </div>
      <div v-if="(!taskstats)&&(finishTaskListCount!=0)" v-for="finishlist in finishlists">
        <br>
        <form-preview  :body-items="finishlist" :footer-buttons="buttons"></form-preview>
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
      unfinishlists: [],
      finishlists: [],
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
      if (res.data.success === true) {
        this.finishTaskListCount = res.data.data.itemCount
        this.finishTaskListPage = res.data.data.pageCount
        this.finishTaskList = res.data.data.listObject
        for (var i = 0; i < this.finishTaskList.length; i++) {
          var detail = [{
            label: this.$t('申请人'),
            value: ''
          }, {
            label: this.$t('开始时间'),
            value: ''
          }]
          detail[0].value = this.finishTaskList[i].processCreator
          // detail[1].value = this.taskList[i].taskStartTime
          var formatdate = new Date(this.finishTaskList[i].taskStartTime)
          detail[1].value = formatdate.toLocaleString()
          this.finishlists.push(detail)
        }
      }
    }).then(() => {
      http({
        url: '/api/dashboard/flow/runtime/task/pending/1/10',
        method: 'post'
      }, {}).then((res) => {
        if (res.data.success === true) {
          this.unfinishTaskListCount = res.data.data.itemCount
          this.unfinishTaskListPage = res.data.data.pageCount
          this.unfinishTaskList = res.data.data.listObject
          for (var i = 0; i < this.unfinishTaskList.length; i++) {
            let detail = [{
              label: this.$t('申请人'),
              value: ''
            }, {
              label: this.$t('开始时间'),
              value: ''
            }]
            detail[0].value = this.unfinishTaskList[i].processCreator
            var formatdate = new Date(this.unfinishTaskList[i].taskStartTime)
            detail[1].value = formatdate.toLocaleString()
            this.unfinishlists.push(detail)
          }
        }
      })
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

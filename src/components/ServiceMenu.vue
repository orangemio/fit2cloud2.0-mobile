<template>
  <div>
    <form-preview :header-label="$t('申请虚拟机')"  header-value="已完成" :body-items="list"
                  :footer-buttons="button">

    </form-preview>
  </div>
</template>

<i18n>
申请虚拟机:
  en: Application for Virtual Machine
</i18n>

<script>
  import {FormPreview, Icon} from 'vux'

  export default {
    components: {
      FormPreview,
      Icon
    },
    data () {
      return {
        list: [],
        button: [{
          style: 'primary',
          text: this.$t('查看订单'),
          onButtonClick: () => {
            alert(`clicking 查看订单`)
          }
        }, {
          style: 'primary',
          text: this.$t('查看资源日志'),
          onButtonClick: () => {
            this.$http.post('/vm-service/order/list/1/10', {
              applyUser: null,
              cloudServerName: null,
              createTimeEnd: null,
              createTimeStart: null,
              description: null,
              id: null,
              organizationId: null,
              processId: null,
              status: null,
              type: null,
              workspaceId: null
            }).then(function (response) {
              console.log(response)
            }).catch(function (error) {
              console.log(error)
            })
          }
        }]
      }
    }
  }
</script>

<template>
  <div>
    <form-preview :header-label="$t('申请虚拟机')" header-value="已完成" :body-items="list"
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
        list: [{
          label: '商品',
          value: '电动打蛋机'
        }],
        button: [{
          style: 'default',
          text: this.$t('点击事件'),
          onButtonClick: (name) => {
            alert(`clicking ${name}`)
          }
        }]
      }
    }
  }
</script>

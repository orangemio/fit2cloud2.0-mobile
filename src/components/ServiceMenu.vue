<template>
  <div>

    <div class="repeat">

      <group>
        <cell :title="$t('申请虚拟机')" value="已审批" >
          <span class="demo-icon" slot="icon">&#xe623;&nbsp;&nbsp;</span>
        </cell>
        <cell-form-preview :list="list"></cell-form-preview>
      </group>
      <flexbox>
        <flexbox-item>
          <x-button type="primary" plain>查看订单</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="primary" plain>查看资源日志</x-button>
        </flexbox-item>
      </flexbox>
    </div>

  </div>
</template>

<i18n>
申请虚拟机:
  en: Application for Virtual Machine
</i18n>

<script>
  import {FormPreview, Icon, Group, Cell, Grid, GridItem, XInput, Flexbox, FlexboxItem, CellFormPreview, XButton, Divider} from 'vux'
  import http from '@/utils/httpAxios.js'
  import apiSetting from '@/utils/apiSetting.js'

  export default {
    components: {
      FormPreview,
      Icon,
      Group,
      Cell,
      XInput,
      CellFormPreview,
      XButton,
      Divider,
      Flexbox,
      FlexboxItem,
      Grid,
      GridItem
    },
    data () {
      return {
        list: [{
          label: '<span class="demo-icon" slot="icon">&#xe613;&nbsp;&nbsp;</span>' + '申请人',
          value: '3.29'
        }, {
          label: '<span class="demo-icon" slot="icon">&#xe7a4;&nbsp;&nbsp;</span>' + '开始时间',
          value: '8.00'
        }, {
          label: '<span class="demo-icon" slot="icon">&#xe602;&nbsp;&nbsp;</span>' + '相关资源',
          value: '8.00'
        }],
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

          }
        }]
      }
    },
    created () {
      // 初始化标签
      http.post(apiSetting.vm_service.getOrderList, {}).then(({data}) => {
        console.log(data)
      })
    }
  }
</script>
<style>
  .weui-cell__ft {
  }
</style>

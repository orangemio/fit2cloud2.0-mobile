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
      this.$http.post('/api/vm-service/order/list/1/10', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'accept': 'application/json',
          'accessKey': 'SwsP3P2hTM3L0wmR',
          'signature': this.COMMON.gethashkey('1SOqvay6T55u6mFN', 'SwsP3P2hTM3L0wmR')
        },
        // URL参数
        // 必须是一个纯对象或者 URL参数对象
        params: {
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
        }
      }).then(({data}) => {
        console.log(data)
      })
    }
  }
</script>
<style>
  .weui-cell__ft {
  }
</style>

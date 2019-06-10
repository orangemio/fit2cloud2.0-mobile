<template>
  <div>

    <div class="repeat" v-for="order in orderList">
      <group>
        <cell :title="$t('申请虚拟机')" :value=order[2].status >
          <span class="demo-icon" slot="icon">&#xe623;&nbsp;&nbsp;</span>
        </cell>
        <cell-form-preview :list="order"></cell-form-preview>
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
  import {
    FormPreview,
    Icon,
    Group,
    Cell,
    Grid,
    GridItem,
    XInput,
    Flexbox,
    FlexboxItem,
    CellFormPreview,
    XButton,
    Divider
  } from 'vux'
  import http from '@/utils/httpAxios.js'
  import apiSetting from '@/utils/apiSetting.js'
  import moment from 'moment'
  //  分页所有订单
  let _orderList = []

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
        orderList: _orderList,
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
      // 马彦祖的实现方式
      http(apiSetting.vm_service.getOrderList).then((res) => {
        if (res.data.success === true) {
          var orderList = res.data.data.listObject
          this.selectPage(orderList)
        }
      })
    },
    methods: {
      selectPage (orderList) {
        orderList.forEach(function (order) {
          switch (order.status) {
            case 'FINISHED' : order.status = '已完成'
              break
            case 'ERROR' : order.status = '异常'
              break
            case 'REJECTED' : order.status = '已拒绝'
              break
            case 'UNCHECKED' : order.status = '审批中'
              break
            case 'APPROVED' : order.status = '已审批'
              break
            case 'TERMINATED' : order.status = '已终止'
              break
            case 'CANCELED' : order.status = '已取消'
              break
            case 'PROCESSING' : order.status = '正在处理'
              break
            case 'WARNING' : order.status = '警告'
              break
          }

          let orderJson = [{
            'label': '<span class="demo-icon" slot="icon">&#xe7a4;&nbsp;&nbsp;</span>申请时间',
            'value': moment(order.createTime).format('YYYY-MM-DD HH:mm:ss')
          }, {
            'label': '<span class="demo-icon" slot="icon">&#xe613;&nbsp;&nbsp;</span>申请人',
            'value': order.applyUser
          }, {
            'status': order.status
          }]
          _orderList.push(orderJson)
        })
      }
    }
  }
</script>
<style>

</style>

<template>
  <div class="background">

    <!--<div class="widget">-->
      <!--<div class="widget-head">-->
        <!--<div class="widget-icons pull-right content-title-btn orderContentFont-rewrite">-->

        <!--</div>-->
      <!--</div>-->

      <!--<div id="search" class="widget-content">-->
          <!--<form class="form-horizontal">-->
              <!--<group :title="$t('订单状态')">-->
                <!--<selector :options="orderStatusList" v-model="value">-->
                <!--</selector>-->
              <!--</group>-->
          <!--</form>-->
      <!--</div>-->
    <!--</div>-->

    <div class="repeat" v-for="order in orderList">
      <group>
        <cell :title="$t('申请虚拟机')"  >
          <span class="demo-icon" slot="icon">&#xe623;&nbsp;&nbsp;</span>
          <!--<span style="background-color: #d9534f;color: white;">{{order[2].status}}</span>-->
          <span v-if="order[2].status==='已完成'">
              <x-button mini type="primary"> {{order[2].status}}</x-button>
          </span>
          <span v-if="order[2].status==='异常'">
              <x-button mini type="warn"> {{order[2].status}}</x-button>
          </span>
          <span v-if="order[2].status==='已拒绝'">
              <x-button mini type="warn"> {{order[2].status}}</x-button>
          </span>
          <span v-if="order[2].status==='审批中'">
              <x-button mini type="warn"> {{order[2].status}}</x-button>
          </span>
          <span v-if="order[2].status==='已审批'">
              <x-button mini type="warn"> {{order[2].status}}</x-button>
          </span>
        </cell>
        <cell-form-preview :list="order"></cell-form-preview>
      </group>
      <flexbox>
        <flexbox-item>
          <x-button class="btn_sevice">查看订单</x-button>
        </flexbox-item>
        <flexbox-item style="margin-left: 0px;">
          <x-button class="btn_sevice">查看资源日志</x-button>
        </flexbox-item>
      </flexbox>
    </div>

  </div>
</template>

<i18n>
  申请虚拟机:
en : Apply VM
  订单状态:
en : Order Status
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
    Divider,
    Selector
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
      GridItem,
      Selector
    },
    data () {
      return {
        orderStatusList: [{key: 'UNCHECKED', value: 'Processing'},
                          {key: 'APPROVED', value: 'Approved'},
                          {key: 'TERMINATED', value: 'Terminated'},
                          {key: 'CANCELED', value: 'Canceled'},
                          {key: 'REJECTED', value: 'Rejected'},
                          {key: 'PROCESSING', value: 'Processing'},
                          {key: 'FINISHED', value: 'Finished'},
                          {key: 'WARNING', value: 'Warning'},
                          {key: 'ERROR', value: 'Error'}],
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

  .background{
    background-color: #fbf9f3;
  }

  .repeat {
    margin-top: -10px;
  }

  .btn_sevice{
    border-radius: 0px !important;
    background-color: #ffffff !important;
  }

  .widget .widget-content {
    position: relative;
    background-color: #FFFFFF;
    height: 100%;
  }

  button.weui-btn, input.weui-btn{
    font-size: 14px !important;
    /*color: #0D6FD1 !important;*/
  }

  .vux-label{
    font-size: 15px;
  }

  .weui-form-preview__bd{
    color: black !important;
  }

  .weui-form-preview__label{
    color: black !important;
  }

  .weui-cell__ft{
    color: black !important;
  }

  /*!* Widget *!*/
  .widget {
    position: relative;
    border: 1px solid #DFDFDF;
    border-radius: 2px;
    margin-bottom: 10px;
  }

  .widget .widget-head {
    position: relative;
    color: #2B415C;
    font-size: 14px;
    font-weight: bold;
    padding: 8px 15px;
    background-color: #FCFCFC;
    border-bottom: 1px solid #E7E7E7;
  }

  .text-center {
    text-align: center;
    /* margin: 0px; */
    margin-block: 10px;
  }

  .widget .widget-head .widget-icons i {
    font-size: 14px;
    margin: 0 4px;
  }

  .widget .widget-head .widget-icons a {
    color: #aaa;
  }

  .widget .widget-head .widget-icons a:hover {
    color: #999;
  }

  .pull-right { float: right; }

  .content-title-btn{
    margin-top: -26px;
    position: relative;
  }
</style>

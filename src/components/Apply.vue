<template>
  <div >
     <tab>
         <tab-item v-for="n in list2" :key="n" :selected="n==='Tiexi'" @on-item-click="onItemClick">{{ n }}</tab-item>
     </tab>

     <div class="widget-content">
       <div class="fa-border">
         <img class="col-3" width="80px" height="80px" src="resource/img/windows.png">
         <div class="col-7">
           <img class="col-2-img" src="resource/static/icon/vmware.ico">
           <h4 class="col-h4" title="Windows Server 2016">Windows Server 2016</h4>
           <div class="col-div" title="for CL1 / CL2 in Dadong">
             for CL1 / CL2 in Dadong
           </div>
           <x-button mini plain class='col-btn' @click.native='submit()'>Apply</x-button>
         </div>
       </div>
     </div>
  </div>
</template>


<i18n>
Tiexi:
  zh-CN: 铁西
Dadong:
  zh-CN: 大东
Beijing:
  zh-CN: 北京
Azure:
  zh-CN: Azure
Lab:
  zh-CN: Lab
Aws:
  zh-CN: Aws
platform:
  zh-CN: 平台
Apply:
  zh-CN: 申请
</i18n>

<script>
import { Tab, TabItem, FormPreview, XButton, Alert } from 'vux'
const list = () => ['Tiexi', 'Dadong', 'Beijing', 'Azure', 'Lab', 'Aws']

export default {
  components: {
    Tab,
    TabItem,
    FormPreview,
    XButton,
    Alert
  },
  data () {
    return {
      list2: list()
    }
  },
  created () {
    // 初始化标签
    this.$http.get('/api/vm-service/tag/product/list', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'accept': 'application/json',
        'accessKey': '7fGeaovhswFRcWfc',
        'signature': this.COMMON.gethashkey('u82P9DsxIwxOG8ZC', '7fGeaovhswFRcWfc')
      }
    }).then(({data}) => {
      if (data.success === true) {
        console.log('tags: ', data)
      } else {
        this.showPlugin()
        setTimeout(() => {
          this.$vux.alert.hide()
        }, 3000)
      }
    })
    // 初始化产品列表
    this.$http.get('/api/vm-service/catalog-product/list', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'accept': 'application/json',
        'accessKey': 'u21A14T9EXdGUVRS',
        'signature': this.COMMON.gethashkey('I9P3PEMaiq2zm2Wu', 'u21A14T9EXdGUVRS')
      }
    }).then(({data}) => {
      console.log('products:', data)
    })
  },
  methods: {
    onItemClick (index) {
    },
    submit () {
    }
  }
}
</script>


<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';

.fa-border {
  padding: .2em .25em .15em;
  border: solid 0.08em #eeeeee;
  border-radius: .1em;
}
.widget-content {
    position: relative;
    background-color: #FFFFFF;
    height: 100%;
    margin-top:10px;
}
.col-3{
    width: 80px;
    height: 80px;
    text-align: center;
    padding: 0px;
    margin: 10px 5px;
}
.col-7 {
    width: 72%;
    padding-top: 10px;
    float: right;
    margin: 10px 0 0 5px;
    font-size: 14px;
}
.col-h4{
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    margin: 5px 0;
}
.col-div{
    width:80%;
}
.col-2-img{
    float: right;
    margin: -10px 20px 0 0;
}
.col-2-a{
    float: right;
    position: absolute;
    bottom: 5px;
    right: 5px;
    color: rgba(28, 105, 212, 1);
    border-radius: 5px;
}
.btn-default{
    text-shadow: 0 -1px 0 rgba(0, 0, 0, .2);
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 1px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 1px rgba(0, 0, 0, .075);
}
.col-btn{
    float: right;
    margin: 0 10px 10% 0;
}

</style>


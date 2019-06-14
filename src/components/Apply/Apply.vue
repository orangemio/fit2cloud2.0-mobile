<template>
  <div >
     <tab>
         <tab-item v-for="tag in tagList" :key="tag.tagKey" :selected="tag.tagName==='Tiexi'" @on-item-click="onItemClick(tag.tagKey)">{{ tag.tagName }}</tab-item>
     </tab>

     <div class="widget-content" v-for="product in productList">
       <div class="fa-border">
         <img class="col-3" width="80px" height="80px" :src= product.iconUrl >
         <div class="col-7">
           <img class="col-2-img" :src= product.pluginIcon >
           <h4 class="col-h4" title="Windows Server 2016">{{ product.name }}</h4>
           <div class="col-div" title="product.description">
             {{ product.description }}
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
import { Tab, TabItem, FormPreview, XButton, Alert, AlertModule } from 'vux'
import http from '@/utils/httpAxios.js'
import apiSetting from '@/utils/apiSetting.js'

const tagList = () => []
const allProducts = () => []
const tags = () => []
let productList = []

export default {
  components: {
    Tab,
    TabItem,
    FormPreview,
    XButton,
    Alert,
    AlertModule
  },
  data () {
    return {
      tagList: tagList(),
      productList: productList,
      allProducts: allProducts(),
      tags: tags()
    }
  },
  // 初始化方法，刚进页面调用
  created () {
    // 初始化所有标签
    http(apiSetting.vm_service.getProductTagList).then((res) => {
      if (res.data.success === true) {
        this.tagList = res.data.data
        console.log('tagList:', res.data.data)
        // 调动标签过滤方法，默认调用第一个标签过滤
        this.selectSingleTag(this.tagList[0].tagKey)
      } else {
        this.showModule('Error', res.data.message)
        setTimeout(() => {
          AlertModule.hide()
        }, 3000)
      }
    })
  },
  // 所有方法存放位置
  methods: {
    // 标签方法点击事件
    onItemClick (tagKey) {
      console.log('onItemClick: ', tagKey)
      // 调动标签过滤方法，默认调用第一个标签过滤
      this.selectSingleTag(tagKey)
    },
    // alert 弹框
    showModule (title, content) {
      AlertModule.show({
        title: title,
        content: content,
        onShow () {
        },
        onHide () {
        }
      })
    },
    // 申请按钮点击事件
    submit () {
      this.showModule('error', 'http client is timeout')
      setTimeout(() => {
        AlertModule.hide()
      }, 3000)
    },
    // 查询产品列表，默认查询所有产品
    queryProducts: async function () {
      http(apiSetting.vm_service.getCatalogProduct).then((res) => {
        if (res.data.success === true) {
          this.allProducts = res.data.data
          this.productList = []
        } else {
          this.showModule('Error', res.data.message)
          setTimeout(() => {
            AlertModule.hide()
          }, 3000)
        }
      })
    },
    // 按标签过滤产品，默认显示第一个标签下的产品并且标签属于选中状态
    selectSingleTag (tagKey) {
      // 获取所有产品列表
      this.queryProducts()
      setTimeout(() => {
        console.log('tagKey: ', tagKey)
        let productList = []
        // 循环所有产品，进行过滤
        this.allProducts.forEach(function (data) {
          console.log('allProducts forEach:', data)
          console.log('allProducts tags', data.tags)
          // 循环每个产品的所有标签
          data.tags.forEach(function (tag) {
            // 过滤，每个产品可以有多个标签
            if (tagKey === tag) {
              productList.push(data)
              console.log('productList', productList)
            }
          })
        })
        // 将过滤后的产品列表赋值给全局参数，在页面上显示
        this.productList = productList
        console.log('this.productList', this.productList)
      }, 500)
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
    height: 50px;
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


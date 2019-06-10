<template>
    <div>
    <!-- <group> -->
        <div class="text-center ng-binding widget-head ">
        Instance List 
        <span class="ins-icon text-right demo-icon" slot="icon">&#xe614;</span>

        </div>
    <!-- </group>        -->
    <div class="element.style content-list-item " style="padding-top: 0 !important;">
        <table class="table">
            <tbody>
                <tr>
                    <td class="table-left-title " style="min-width: 40%;width: 40%;">
                    <i> VM Name </i>
                    </td>
                    <td class="table-left-title fa" style="min-width: 40%;width: 60%;">
                        vm-demo-test
                    </td>
                </tr>
                 <tr>
                    <td class="table-left-title " style="min-width: 40%;width: 40%;">
                    <i> Product </i>
                    </td>
                    <td class="table-left-title fa" style="min-width: 40%;width: 60%;">
                        CentOS 7.4
                    </td>
                </tr>
                <tr>
                    <td class="table-left-title " style="min-width: 40%;width: 40%;">
                    <i> OS </i>
                    </td>
                    <td class="table-left-title fa" style="min-width: 40%;width: 60%;">
                        CentOS 7.4
                    </td>
                </tr> 
                <tr>
                    <td class="table-left-title " style="min-width: 40%;width: 40%;">
                    <i> Instance Type </i>
                    </td>
                    <td class="table-left-title fa" style="min-width: 40%;width: 60%;">
                        1Core2G
                    </td>
                </tr>
                 <tr>
                    <td class="table-left-title " style="min-width: 40%;width: 40%;">
                    <i> IP Adress </i>
                    </td>
                    <td class="table-left-title fa" style="min-width: 40%;width: 60%;">
                        10.188.125.233(Internal)
                    </td>
                </tr>
                <tr>
                    <td class="table-left-title " style="min-width: 40%;width: 40%;">
                    <i> Create Time </i>
                    </td>
                    <td class="table-left-title fa" style="min-width: 40%;width: 60%;">
                        2019-04-12 13:21
                    </td>
                </tr>   
                 <tr>
                    <td class="table-left-title " style="min-width: 40%;width: 40%;">
                    <i> Expriation Date </i>
                    </td>
                    <td class="table-left-title fa" style="min-width: 40%;width: 60%;">
                        Never Expired
                    </td>
                </tr>   
                <tr>
                    <td class="table-left-title " style="min-width: 40%;width: 40%;">
                    <i> State </i>
                    </td>
                    <td class="table-left-title fa" style="min-width: 40%;width: 60%;">
                        Running
                    </td>
                </tr>     
                <tr>
                    <td colspan="2" style="border-top: 0.017rem solid rgba(229, 229, 229, 1) !important;padding-top: 0px !important;padding-bottom: 0px !important;">
                        <button class="btn-left-rewrite" style="width:49%">
                        <a>   
                            <span class="demo-icon" slot="icon" style="color: #1C69D4;">&#xe617;</span>
                            Log
                        </a>
                        </button>
                    </td>
                    <td class="element-style" colspan="2" style="border-top: 0.017rem solid rgba(229, 229, 229, 1) !important;padding-top: 0px !important;padding-bottom: 0px !important;">
                        <button class="btn-left-rewrite" style="width:52%">
                           <span class="demo-icon" slot="icon" style="color: #1C69D4; font-size:11px;" >&#xe61a;</span>
 Renewal
                        </button>
                    </td>
                </tr>                                                          
            </tbody>
        </table>
    </div>   
    </div>
</template>



<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
//   data () {
//     return {
//       tagList: tagList(),
//       productList: productList,
//       allProducts: allProducts(),
//       tags: tags()
//     }
//   },
// //   初始化
//   created () {
//     http(apiSetting.dashboard.getUserInfo).then((res) => {
//       if (res.data.success === true) {
//         this.tagList = res.data.data
//         console.log('tagList:', res.data.data)
//         // 调动标签过滤方法，默认调用第一个标签过滤
//         this.selectSingleTag(this.tagList[0].tagKey)
//       } else {
//         // 默认方式有错误
//         this.showPlugin()
//         setTimeout(() => {
//           this.$vux.alert.hide()
//         }, 3000)
//       }
//     })
// }

//   首页-end
}
</script>


<style>
.col-xs-12 {
    width: 100%;
}
.text-center {
    text-align: center;
}
.ng-binding {
    font-size: 14px;
    color: #505050 ;
}
.widget-head {
    /* position: relative; */
    color: #2B415C;
    font-size: 14px;
    font-weight: bold;
    padding: 8px 15px;
    background-color: #FCFCFC; 
    border-bottom: 5px solid #E7E7E7;
}
/* .weui-cells{
  margin-top:0  !important;
} */
.ins-icon{
    font-family: 'iconfont';
    font-size: 17px;
    color: #333333;;
    /* right: 0; */
    }
.text-right{
    float: right !important;
}
.element-style {
    border-left: 1px solid rgba(229, 229, 229, 1) !important;
    width: 49% !important;
}
.content-list-item {
    padding: 5px 0px 0px 0px;
    /* margin-left: 2px; */
    margin-right: 2px;
    background-color: white;
}
.table-left-title {
    text-align: left;
    font-weight: 600;
    /* padding-left: 30px !important; */
    padding: 2px 5px 2px 20px;
}
.table {
    border-radius: 0;
    border: 0;
    font-size: 12px;
}
.fa {
    padding-right: 60%;
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.btn-left-rewrite{
    width: 32%;
    padding: 12px 0px !important;
    color: rgba(28, 105, 212, 1) !important;
    text-decoration: none;
    background-color: inherit;
    border: 0px;

}

</style>

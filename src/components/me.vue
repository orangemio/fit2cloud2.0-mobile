<template>
  <div>
    <group>  
      <img src="src/assets/demo/user.svg" class="pull-left pull-img" width="60" height="60">
      <div class=" pull-left pull-div ng-binding ">
            <span ng-bind="user.name" class="font-left" style="clear: right;" slot="label">{{ $t('u0032132') }}</span><br>
            <span ng-if="currentGroup.name" ng-bind="currentGroup.name" class="font-left" slot="label">{{ $t('BBF-46') }} </span><br ng-if="currentGroup.name">
            <span ng-bind="user.email" class="font-left" slot="label">{{ $t('Dongyou.Zhai@bmw-brilliance.cn') }}</span>
      </div>
    <group>
     <tab>
         <tab-item v-for="n in list2" :key="n.n" :selected="n.id==='admin'" >{{ n.id }}</tab-item>
     </tab>    
     </group>
    </group>   
    <group>
      <div class="ng-binding" >
      <cell is-link :title="$t('Instance List')" link="/InstanceList" >
        <span class="demo-icon" slot="icon">&#xe6f2;</span>
      </cell>
      <cell is-link :title="$t('Overview Of Resource')"  link="/overview">
        <span class="demo-icon" slot="icon">&#xe653;</span>
      </cell>
      <cell is-link :title="$t('About')" link="/about">
        <span class="demo-icon" slot="icon">&#xe641;</span>
      </cell>
        <div ui-sref="system_set" class="widget-content widget-content-menu widget-content-font">
        </div>
      </div>
    </group>
  </div>

</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
// import { Tab, TabItem, FormPreview, XButton, Alert } from 'vux'
const list = () => []
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  data () {
    return {
      list2: list()
    }
  },
  created () {
    // 初始化标签
    this.$http.get('/api/dashboard/user/info', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'accept': 'application/json',
        'accessKey': 'u21A14T9EXdGUVRS',
        'signature': this.COMMON.gethashkey('I9P3PEMaiq2zm2Wu', 'u21A14T9EXdGUVRS')
      }
    }).then(({data}) => {
      if (data.success === true) {
        this.list2 = data.data
        console.log(data.data.id.email)
        console.log(this.list2)
      } else {
        this.showPlugin()
        setTimeout(() => {
          this.$vux.alert.hide()
        }, 3000)
      }
    })
    // 初始化产品列表
    this.$http.get('/api/vm-service/dashboard/user/info', {
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

<i18n>
About me:
  zh-CN: 关于
Instance List:
  zh-CN: 虚拟机列表
Overview Of Resource:
  zh-CN: 资源概况
About:
  zh-CN: 关于
</i18n>

<style>
.demo-icon {
  margin-right: 15px;
}
/* .vue-version {
  text-align: center;
  font-size: 12px;
  color: #ccc;
}
.center {
  margin-top: 15px;
  text-align: center;
}
.vux-notice {
  color: #666;
  line-height: 40px;
} */
.widget .widget-content {
    position: relative;
    background-color: #e3e3e3;
    height: 100%;
}
.mine-top-view {
    margin: 15px 0;
    padding: 15px 10px;
    background-color: #ffffff !important;
    color: rgba(80, 80, 80, 1);
}
.cardStyle-rewrite {
    margin-bottom: 10px ;
    border: 0 !important;
    box-shadow: 0rem 0.15rem 0.15rem 0rem rgba(0, 0, 0, 0.10714285714285708) !important;
}
.text-left {
  text-align: left;
}
.pull-img {
    margin-left: 20px;
    margin-top: 14px;
    margin-bottom: 12px;  
}
.pull-left {
  float: left;
}
.pull-div {
    margin-top: 15px;
    padding-top: 15px !important;
}
.font-left{
    width: 5%;
    /* padding-top: -10px; */
    margin: 40px 0 0 10px;

    width: 300px;
}
.fa-desktop:before {
  content: "\f108";
}
.clearfix:after {
	  content:""; 
	  height:0; 
	  visibility:hidden; 
	  display:block; 
	  clear:both; 
}
/* __________下面三个选项框的css____________ */
.widget-content-font {
    color: rgba(51, 51, 51, 1);
    font-size: 12px;
}
.widget .widget-content {
    position: relative;
    background-color: #FFFFFF;
    height: 100%;
}
.widget-menu .widget-content-menu{
    padding: 10px 15px;
    border-top: 1px solid #DFDFDF;
    height: 47px;
    font-size: 14px;
    line-height: 26px;
}
.fa-cogs:before {
  content: "\f085";
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fa-desktop:before {
  content: "\f108";
}
.fa-cubes:before {
  content: "\f1b3";
}
.fa-angle-right:before {
  content: "\f105";
}
.pull-right {
  float: right !important;
}
.pull-div {
    margin-left: 15px;
    padding-top: 2px !important;
}
.ng-binding {
    font-size: 14px;
    color: #505050 ;
}
</style>




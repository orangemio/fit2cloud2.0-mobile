<template>
  <div>
    <group>  
       <!-- <div class="widget-content mine-top-view text-left cardStyle-rewrite ">          -->
      <div class="widget-content  text-left cardStyle-rewrite ">         
      <img src="src/assets/demo/user.svg" class="pull-left pull-img" width="60" height="60">
        <div class="pull-left pull-div" ng-style="{'line-height':currentGroup.name ? '20px' : '26px','padding-top':currentGroup.name ? '2px' : '4px',}">
            <span ng-bind="user.name" class="pull-left" style="clear: right;"></span><br>
            <span ng-if="currentGroup.name" ng-bind="currentGroup.name" class="pull-left"></span><br ng-if="currentGroup.name">
            <span ng-bind="user.email" class="pull-left"></span>
            <div class="clearfix"></div>
        </div>
       </div>
    </group>   
    <group>
      <cell is-link :title="$t('Instance List')" link="/component/tabbar-simple">
        <span class="demo-icon" slot="icon" style="color:#F70968">&#xe633;</span>
      </cell>
      <cell is-link :title="$t('Overview Of Resource')"  link="/component/tabbar-icon">
        <span class="demo-icon" slot="icon" style="color:#F70968">&#xe633;</span>
      </cell>
      <cell is-link :title="$t('About')" link="/component/tabbar-icon">
        <span class="demo-icon" slot="icon" style="color:#F70968">&#xe633;</span>
      </cell>
    </group>
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
    margin-left: 15px;
}
.pull-left {
  float: left;
}
.pull-div {
    margin-left: 15px;
    padding-top: 2px !important;
}
.pull-left { 
  float: left; 
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
</style>




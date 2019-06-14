<template>
    <div class="ng-binding">
      <group>
        <div class="text-center ng-binding widget-head">
            Overview Of Resource
        </div>
     </group> 
     <div class="widget-content">
        <div class="row">
            <div class="col-xs-12" style="margin: 5px 0">
            <div class="echart-panel-title" ng-if="setting.name">
                VM
            </div>
            <div class="echart-panel-content">
                <div class="pie-chart-custom" style="-webkit-tap-highlight-color: transparent; user-select: none;">
                    <div style="position: relative; overflow: hidden; width: 357px; height: 180px; cursor: default;">
                    </div>
                </div>
            </div>
            </div>
        </div>
        <!-- CPU -->
        <div class="row">
            <div style="margin: 5px 0">
            <div class="echart-panel-title" ng-if="setting.name">
                CPU
            </div>
            <div class="echart-panel-content">
                <div class="pie-chart-custom" style="-webkit-tap-highlight-color: transparent; user-select: none;">
                    <div style="position: relative; overflow: hidden; width: 357px; height: 180px; cursor: default;">
                    </div>
                </div>
            </div>
            </div>
        </div>
        <!-- Memory -->
        <div class="row">
            <div style="margin: 5px 0">
            <div class="echart-panel-title" ng-if="setting.name">
                Memory
            </div>
            <div class="echart-panel-content">
                <div class="pie-chart-custom" style="-webkit-tap-highlight-color: transparent; user-select: none;">
                    <div style="position: relative; overflow: hidden; width: 357px; height: 180px; cursor: default;">
                    </div>
                </div>
            </div>
            </div>
        </div>
        <!-- Disk -->
        <div class="row">
            <div style="margin: 5px 0">
            <div class="echart-panel-title" ng-if="setting.name">
                Disk
            </div>
            <div class="echart-panel-content">
                <div class="pie-chart-custom" style="-webkit-tap-highlight-color: transparent; user-select: none;">
                    <div style="position: relative; overflow: hidden; width: 357px; height: 180px; cursor: default;">
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import { Tabbar, TabbarItem, Group, Cell, Alert, AlertModule } from 'vux'
// import apiSetting from '@/utils/apiSetting.js'
// import http from '@/utils/httpAxios.js'
// import { Tab, TabItem, FormPreview, XButton, Alert } from 'vux'
// const list = () => []
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    AlertModule,
    Alert
  }
}
</script>
<style>
.widget-menu .widget-content-menu{
    padding: 10px 15px !important;
    border-top: 1px solid #DFDFDF;
    height: 47px;
    font-size: 14px;
    line-height: 26px;
}
.text-center {
    text-align: center;
    /* margin: 0px; */
    margin-block: 10px;
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
.weui-cells {
    margin-top: 0px !important;
}
.weui-cells-about {
    margin-top: 0px !important;
}
.ng-binding {
    font-size: 14px;
    color: #505050 ;
}
.echart-panel-title {
    color: #212121;
    font-size: 14px;
    line-height: 20px;
    padding: 10px;
    background-color: #FBFCFD;
    border: 1px solid #e1e1e1;
}
.pie-chart-custom {
    height: 180px;
}
.echart-panel-content {
    padding: 10px;
    border: 1px solid #e1e1e1;
    margin-top: -1px;
}
.row {
    width: 100%;
    margin: 0px;
}
.col-xs-12 {
    width: 100%;
}
.text-center {
    text-align: center;
}
.widget .widget-content {
    position: relative;
    background-color: #FFFFFF;
    height: 100%;
}
</style>


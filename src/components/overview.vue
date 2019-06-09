<template>
    <div class="ng-binding">
      <group>
        <div class="text-center ng-binding widget-head">
            Overview Of Resource
        </div>
     </group> 
     <group>
          VM
      </group>
      <group>
          CPU
      </group>
           <group>
          Mem
     </group>
      <group>
          Disk
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
</style>


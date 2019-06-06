<template>
    <div>
    <group>
        <div class="text-center ng-binding widget-head ">
        Instance List 
        <span class="ins-icon text-right" slot="icon">&#xe614;</span>
        <div>
        </div>
        </div>
    </group>       
    <group>
        <p>VM1 Name:</p>
        <p>Product: </p>
        <p>OS:</p>
        <p>Instance Type:</p>
        <p>..........</p>
    </group>
    <!-- <br> -->
    <group>
        <p>VM2 Name:</p>
        <p>Product: </p>
        <p>OS:</p>
        <p>Instance Type:</p>
        <p>..........</p>
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
.weui-cells{
  margin-top:0  !important;
}
.ins-icon{
    font-family: 'vux-bba';
    font-size: 17px;
    color: #333333;;
    /* right: 0; */
    }
.text-right{
    float: right !important;
}
</style>

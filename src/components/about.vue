<template>
    <div>
      <group>
          <div class="text-center ng-binding widget-head">
          About
          </div>
      </group>  
      <group>
        <div class="ng-binding weui-cells-about" >
            <cell  :title="$t('User')" > <span class="ng-binding">  {{this.User}} </span>
            </cell>
            <cell  :title="$t('Display Name')" > <span class="ng-binding"> {{this.DisplayName}} </span>
            </cell>
            <cell  :title="$t('Email')"> <span class="ng-binding"> {{this.Email}} </span>
            </cell>
            <cell  :title="$t('Workspace Name')"> <span class="ng-binding"> None </span>
             </cell>
        </div>
      </group>
    </div>
</template>

<i18n>
User: 
  zh-CN: 用户
Display Name:
  zh-CN:  显示名
Email:
  zh-CN: 邮箱
Workspace Name:
  zh-CN: 工作空间

</i18n>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
import apiSetting from '@/utils/apiSetting.js'
import http from '@/utils/httpAxios.js'
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  data () {
    return {
      User: '',
      DisplayName: '',
      Email: '',
      WorkspaceName: ''
    }
  },
  created () {
    http(apiSetting.dashboard.getUserInfo).then((res) => {
      if (res.data.success === true) {
        this.tagList = res.data.data
        console.log('tagList:', res.data.data)
        // 调动标签过滤方法，默认调用第一个标签过滤
        this.User = res.data.data.id
        this.DisplayName = res.data.data.name
        this.Email = res.data.data.email
        // this.WorkspaceName = res.data.data.
      }
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


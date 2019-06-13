<template>
  <div>
    <box gap="10px 10px">
      <x-button type="primary" link="/demo">{{$t('Login')}}</x-button>
      <x-button type="default" link="BACK">{{$t('Help')}}</x-button>
    </box>
  </div>
</template>

<i18n>
Login:
  zh-CN: 登录
Help:
  zh-CN: 帮助
</i18n>

<script>
import { XButton, Box } from 'vux'

export default {
  components: {
    XButton,
    Box
  }
}
</script>

<style lang="less">

</style>
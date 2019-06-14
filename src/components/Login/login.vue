<template>
  <div>
    <box gap="10px 10px">
    <group :title="$t('Username')">
      <x-input title="user" v-model="username" required>
        <img slot="label" src="../../assets/images/icon_nav_me.png">
      </x-input>
    </group>
    <group :title="$t('Password')">
      <x-input title="passwd" v-model="password" type="password" required >
        <img slot="label" src="../../assets/images/icon_nav_me.png">
      </x-input>
    </group>
      <br>
      <x-button type="primary" @click.native="login()">{{$t('Login')}}</x-button>
      <x-button type="default" link="BACK">{{$t('Help')}}</x-button>
    </box>
  </div>
</template>

<i18n>
Username:
  zh-CN: 用户名
Password:
  zh-CN: 密码
Login:
  zh-CN: 登录
Help:
  zh-CN: 帮助
Error:
  zh-CN: 错误
Please Check Username and Password:
  zh-CN: 请检查用户名和密码
Can not get AccessKey:
  zh-CN: 获取不到访问密钥
</i18n>

<script>
import { XButton, Box, XInput, Group, AlertModule } from 'vux'
import http from '@/utils/httpAxios.js'
import keyStore from '@/utils/keyStore.js'
// import apiSetting from '@/utils/apiSetting.js'

export default {
  components: {
    XButton,
    Group,
    XInput,
    Box,
    AlertModule
  },
  data () {
    return {
      password: '',
      username: ''
    }
  },
  methods: {
    login () {
      if (this.username === '' && this.password === '') {
        AlertModule.show({
          title: this.$t('Error'),
          content: this.$t('Please Check Username and Password')
        })
      } else {
        http({
          url: '/api/management-center/user/key/getKey/' + this.username,
          method: 'get'
        }, {}).then((res) => {
          if (res.data.success === true) {
            keyStore(res.data.data.accessKey, res.data.data.secretKey)
            this.$router.push({name: 'Tasks'})
          } else {
            AlertModule.show({
              title: this.$t('Error'),
              content: this.$t('Can not get AccessKey')
            })
          }
        })
      }
    }
  }
}
</script>

<style lang="less">

</style>
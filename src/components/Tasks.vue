<template>
    <x-button @click.native='showkey()'>submit</x-button>
</template>

<script>
import { XButton } from 'vux'
export default {
  data () {
    return {

    }
  },
  components: {
    XButton
  },
  methods: {
    showkey () {
      var signature = this.COMMON.gethashkey('u82P9DsxIwxOG8ZC', '7fGeaovhswFRcWfc')
      // Demo 从注册到全局的AXIOS中发起Get请求
      this.$http.get('/vm-service/tag/listAll', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'accept': 'application/json',
          'accessKey': '7fGeaovhswFRcWfc',
          'signature': signature
        }
      }).then(({data}) => {
        console.log(data)
      })
    }
  }
}
</script>

<style lang="less">
    
</style>

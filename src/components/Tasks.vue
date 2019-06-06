<template>
    <x-button @click.native='getData()'>submit</x-button>
</template>

<script>
import http from '@/utils/http'
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
      // 获取最新签名
      var signature = this.COMMON.gethashkey('u82P9DsxIwxOG8ZC', '7fGeaovhswFRcWfc')
      // Demo 从注册到全局的AXIOS中发起Get请求
      this.$http.get('/api/vm-service/tag/listAll', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'accept': 'application/json',
          'accessKey': '7fGeaovhswFRcWfc',
          'signature': signature
        }
      }).then(({data}) => {
        console.log(data)
      })
    },
    getData: async function () {
      const res = await http.get('/api/vm-service/tag/listAll', {})
      if (res.data.success) {
        alert('请求成功')
      }
    }
  }
}
</script>

<style lang="less">
    
</style>

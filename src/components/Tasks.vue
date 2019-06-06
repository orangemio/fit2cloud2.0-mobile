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
      // Demo 从注册到全局的AXIOS中发起Get请求
      this.$http.get('/vm-service/tag/listAll', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'accept': 'application/json',
          'accessKey': '7fGeaovhswFRcWfc',
          'signature': 'g1W6lRfYAtE0UsIYAC6Q2FOXcDqhYoNDGN2HDMidl7tVoL85ktpwcr/FSGSOkQSI4gNA+saswyO0HwnjnUx2W3x4l5cqPnbm/x/Wg3oLQTo='
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

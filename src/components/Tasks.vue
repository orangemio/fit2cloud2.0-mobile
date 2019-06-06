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
      this.$http.get('/vm-service/quota/org/current', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          accept: 'application/json',
          accessKey: '7fGeaovhswFRcWfc',
          signature: 'g1W6lRfYAtE0UsIYAC6Q2FAi1oBfGK164DxIhQJXwU3NsXOskr/qkMjT7Yqnbaxa2vVFf3BUGT34JMM/TXv5d/iSNBrn4jGxbYJHA7Jo59E='
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

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
      console.log(this.COMMON.gethashkey('u82P9DsxIwxOG8ZC', '7fGeaovhswFRcWfc'))
    }
  }
}
</script>

<style lang="less">
    
</style>

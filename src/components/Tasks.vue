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
      console.log(this.COMMON.gethashkey())
    }
  }
}
</script>

<style lang="less">
    
</style>

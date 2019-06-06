<script type="text/javascript">
    var CryptoJS = require('crypto-js')
    var uuid = require('uuid/v1')

    // 定义一些公共的属性和方法
    // const SecretKey = 'u82P9DsxIwxOG8ZC'
    // const AccessKey = '7fGeaovhswFRcWfc'
    // const loginUrl = 'http://103.235.232.207/'
    function gethashkey (SecretKey, AccessKey) {
      var randomuuid = uuid()
      var src = AccessKey + '|' + randomuuid + '|' + Date.parse(new Date())
      var SecretKeySpec = CryptoJS.AES.encrypt(src, CryptoJS.enc.Utf8.parse(SecretKey),
        {iv: CryptoJS.enc.Utf8.parse(AccessKey),
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        }).toString()
      return SecretKeySpec
    }
    function getInfo () {
      this.$http.get('http://103.235.232.207/dashboard/user/info', {
        headers: {
          accept: 'application/json',
          accessKey: '7fGeaovhswFRcWfc',
          signature: 'g1W6lRfYAtE0UsIYAC6Q2FAi1oBfGK164DxIhQJXwU3NsXOskr/qkMjT7Yqnbaxa2vVFf3BUGT34JMM/TXv5d/iSNBrn4jGxbYJHA7Jo59E='
        }
      }).then(({data}) => {
        console.log(data)
      })
    }
    // 暴露出这些属性和方法
    export default {
      gethashkey,
      getInfo
    }
</script>
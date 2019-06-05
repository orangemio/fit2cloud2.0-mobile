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
    // 暴露出这些属性和方法
    export default {
      gethashkey
    }
</script>
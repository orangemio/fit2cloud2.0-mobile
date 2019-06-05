<script type="text/javascript">
    var CryptoJS = require('crypto-js')
    var uuid = require('uuid/v1')

    // 定义一些公共的属性和方法
    const AccessKey = '7fGeaovhswFRcWfc'
    const SecretKey = 'u82P9DsxIwxOG8ZC'
    // const loginUrl = 'http://103.235.232.207/'
    function gethashkey () {
      // cef8c899-df13-4903-9c99-dc12e7a6ce38
      var randomuuid = uuid()
      var src = AccessKey + '|' + randomuuid.toString() + '|' + Date.parse(new Date())

      // 7fGeaovhswFRcWfc|f63bacf0-8745-11e9-8fd3-2df1891c29a6|1559707016000
      var SecretKeySpec = CryptoJS.AES.encrypt(src, SecretKey).toString()
      return SecretKeySpec.toString(CryptoJS.enc.Base64)
    }
    // 暴露出这些属性和方法
    export default {
      gethashkey
    }
</script>
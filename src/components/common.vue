<script type="text/javascript">
    var CryptoJS = require('crypto-js')

    // 定义一些公共的属性和方法
    // const AccessKey = '7fGeaovhswFRcWfc'
    const SecretKey = 'u82P9DsxIwxOG8ZC'
    // const loginUrl = 'http://103.235.232.207/'
    function gethashkey () {
      console.log(CryptoJS.enc.Utf8.parse(SecretKey))
    }
    // 暴露出这些属性和方法
    export default {
      gethashkey
    }
</script>
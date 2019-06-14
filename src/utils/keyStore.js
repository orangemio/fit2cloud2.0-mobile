var AccessKey = '5UW81LMQO1teVJqT'
var SecretKey = 'Dw8nFWPYD7IkmDN7'

var keyStore = function (newak, newsk) {
  if (!!newak || !!newsk) {
    AccessKey = newak
    SecretKey = newsk
  }
  return {AccessKey, SecretKey}
}

export default keyStore

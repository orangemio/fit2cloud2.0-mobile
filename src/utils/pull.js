import axios from 'axios'
import uuid from 'uuid'
import CryptoJS from 'crypto-js'
const SecretKey = 'I9P3PEMaiq2zm2Wu'
const AccessKey = 'u21A14T9EXdGUVRS'

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

// vue 实例
let vue = null
// 是否允许显示toast
let showToast = true

// 请求开始时，开启加载中动画，出错了提示并关闭动画
axios.interceptors.request.use(config => {
  return config
}, error => {
  if (vue && showToast) {
    // vue.toast('请求超时!')
  }
  return Promise.reject(error)
})

// 请求完成时，关闭加载中动画，返回数据或错误信息
axios.interceptors.response.use(response => {
  // 一切正常，返回数据或空对象
  if (response.data.code === 0) {
    return response.data.data || {}
  } else {
    // 没有数据，只有提示信息，则弹出提示信息，
    if (response.data.text != null && response.data.text.length > 0) {
      if (vue && showToast) {
      }
    }
  }
}, error => {
  if (error.response) {
    console.log(error.response)
  }
    // 请求已发出，但服务器响应的状态码不在 2xx 范围内，有错误信息则弹出错误信息
  console.log('response-error-data', error.response.data)
  if (error.response.data.text != null && error.response.data.text.length > 0) {
    if (vue && showToast) {
    //   vue.toast(error.response.data.text)
    }
  } else {
    // 什么数据都没有，直接出错了
    console.log('Error', error.message)
    if (vue && showToast) {
    //   vue.toast('网络出错了，未请求到数据')
    }
  }
})

export default class api {
  static get = (url, vueContext, isShow) => {
    showToast = true
    if (vueContext != null) {
      vue = vueContext
    }

    if (isShow === false) {
      showToast = isShow
    }

    return axios({
      method: 'get',
      url: url,
      withCredentials: true, // 表示跨域请求时是否需要使用凭证
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'accept': 'application/json',
        'accessKey': AccessKey,
        'signature': gethashkey(SecretKey, AccessKey)
      }
    })
  }

  static post = (url, params, vueContext, isShow) => {
    showToast = true
    if (vueContext != null) {
      vue = vueContext
    }

    if (isShow === false) {
      showToast = isShow
    }

    return axios({
      method: 'post',
      url: url,
      data: params,
      withCredentials: true, // 表示跨域请求时是否需要使用凭证
      // 发送请求前处理request的数据
      transformRequest: [
        function (data) {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'accept': 'application/json',
        'accessKey': AccessKey,
        'signature': gethashkey(SecretKey, AccessKey)
      }
    })
  }
};

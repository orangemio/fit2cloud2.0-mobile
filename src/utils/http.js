'use strict'

import axios from 'axios'
import qs from 'qs'
var CryptoJS = require('crypto-js')
var uuid = require('uuid/v1')

axios.interceptors.request.use(config => {
    // loading
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

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
function checkStatus (response) {
    // loading
    // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
        // 如果不需要除了data之外的数据，可以直接 return response.data
  }
    // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode (res) {
    // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    alert(res.msg)
  }
  if (res.data && (!res.data.success)) {
    alert(res.data.error_msg)
  }
  return res
}

export default {
  post (url, data) {
    return axios({
      method: 'post',
      baseURL: '',
      url,
      data: qs.stringify(data),
      timeout: 10000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'accept': 'application/json',
        'accessKey': AccessKey,
        'signature': gethashkey(SecretKey, AccessKey)
      }
    }).then(
            (response) => {
              return checkStatus(response)
            }
        ).then(
            (res) => {
              return checkCode(res)
            }
        )
  },
  get (url, params) {
    return axios({
      method: 'get',
      baseURL: '',
      url,
      params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'accept': 'application/json',
        'accessKey': AccessKey,
        'signature': gethashkey(SecretKey, AccessKey)
      }
    }).then(
            (response) => {
              return checkStatus(response)
            }
        ).then(
            (res) => {
              return checkCode(res)
            }
        )
  }
}

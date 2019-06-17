const serviceModule = {
  vm_service: {
    getProductTagList: {
      url: 'http://103.235.232.207/vm-service/tag/product/list',
      method: 'get'
    },
    getCatalogProduct: {
      url: 'http://103.235.232.207/vm-service/catalog-product/list',
      method: 'get'
    },
    getServer: {
      url: 'http://103.235.232.207/vm-service/server/*',
      method: 'get'
    },
    getOrderList: {
      url: 'http://103.235.232.207/vm-service/order/list/1/10',
      method: 'post'
    }
  },
  dashboard: {
    getUserInfo: {
      url: 'http://103.235.232.207/dashboard/user/info',
      method: 'get'
    }
  },
  flow: {
    getEndTask: {
      url: 'http://103.235.232.207/flow/runtime/task/end/1/10',
      method: 'post'
    }
  }
}
const apiSetting = {...serviceModule}

export default apiSetting

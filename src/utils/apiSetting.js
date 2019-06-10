const serviceModule = {
  vm_service: {
    getProductList: {
      url: '/api/vm-service/tag/product/list',
      method: 'get'
    },
    getCatalogProduct: {
      url: '/api/vm-service/catalog-product/list',
      method: 'get'
    },
    getServer: {
      url: '/api/vm-service/server/*',
      method: 'get'
    }
  },
  dashboard: {
    getUserInfo: {
      url: '/api/dashboard/user/info',
      method: 'get'
    }
  },
  flow: {
    getEndTask: {
      url: '/api/flow/runtime/task/end/1/10',
      method: 'post'
    }
  }
}
const apiSetting = {...serviceModule}

export default apiSetting

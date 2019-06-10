const serviceModule = {
  vm_service: {
    getProductList: {
      url: '/api/vm-service/tag/product/list',
      method: 'get'
    },
    getCatalogProduct: {
      url: '/api/vm-service/catalog-product/list',
      method: 'get'
    }
  },
  dashboard: {
    getUserInfo: {
      url: '/api/dashboard/user/info',
      method: 'get'
    }
  }
}
const apiSetting = {...serviceModule}

export default apiSetting

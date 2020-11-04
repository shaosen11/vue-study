import {request} from "../request";

export function api_productList(params) {
  return request({
      url: '/product/list',
      method: 'get',
      params: params
    }
  )
}

export function api_updateProductStatus(type, params) {
  console.log('api_updateProductStatus', params)
  return request({
    url: `/product/update/${type}`,
    method: 'OPTIONS',
    params: params

  })
}

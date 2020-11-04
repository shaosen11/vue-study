import {request} from "../request";

export function api_login(username, password) {
   return request({
    url: '/admin/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function api_logout() {
  return request({
    url: '/admin/logout',
    method: 'post'
  })
}

export function api_info() {
  return request({
    url: '/admin/info',
    method: 'get'
  })
}

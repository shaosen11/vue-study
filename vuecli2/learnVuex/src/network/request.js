import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://118.89.176.28:8080',
    timeout: 15000
  })

  // 请求拦截
  instance.interceptors.request.use(config => {
    const token = window.sessionStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = token
    }
    return config
  }, err => {
    console.log(err);
  })

  // 相应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  return instance(config)
}

//方案一
// export function request(config, success, failure) {
//   const instance = axios.create({
//     baseURL: 'http://localhost:8888',
//     timeout: 5000
//   })
//
//   instance(config)
//     .then(res => {
//       console.log(res);
//       success(res)
//     }).catch(err => {
//     console.log(err);
//     failure(err)
//   })
// }

//方案2
// export function request(config) {
//   const instance = axios.create({
//     baseURL: 'http://localhost:8888',
//     timeout: 5000
//   })
//
//   instance(config.baseConfig)
//     .then(res => {
//       console.log(res);
//       config.success(res)
//     }).catch(err => {
//     console.log(err);
//     config.failure(err)
//   })
// }

//方案3
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://localhost:8888',
//       timeout: 5000
//     })
//
//     instance(config)
//       .then(res => {
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//     })
//   })
// }


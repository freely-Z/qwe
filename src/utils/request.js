import axios from 'axios'
//创建axios实例
const service = axios.create({
  baseURL: 'https://api-hmzs.itheima.net/api',
  timeout: 5000 // request timeout
})

// 请求拦截器  请求头携带token
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器  对数据做统一的错误处理  简化data
service.interceptors.response.use(
  response => {
    return response.data
    // response.data简化data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service

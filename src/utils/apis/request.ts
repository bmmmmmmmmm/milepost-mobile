import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://www.geekwolfman.xyz:8080',
  headers: {
    post: {
      'Content-Type': 'application/json',
    },
  },
  timeout: 30_000,
  transformRequest: [
    (data) => JSON.stringify(data),
    // 对 data 进行任意转换处理;
  ],
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [
    // 对 data 进行任意转换处理
    (data) => JSON.parse(data),
  ],
})
// 请求拦截器
instance.interceptors.request.use(
  (config: any) => {
    const newConfig = config
    // 设置token
    const token = sessionStorage.getItem('token')
    // console.log(sessionStorage.getItem("token"));

    if (token) {
      console.log(token === null)
      console.log(typeof token)
      newConfig.headers.token = token
    }
    newConfig.headers = Object.assign(
      newConfig.method === 'get'
        ? {
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
          }
        : {
            'Content-Type': 'application/json; charset=UTF-8',
          },
      newConfig.headers,
    )
    // post设置请求拦截器
    if (newConfig.method === 'post') {
      const contentType = newConfig.headers['Content-Type']
      // 根据Content-Type转换data格式
      if (contentType) {
        if (contentType.includes('multipart')) {
          // 类型 'multipart/form-data;'
        } else if (contentType.includes('json')) {
          // 类型 'application/json;'
          // newConfig.data = JSON.stringify(newConfig.data);
        } else {
          // 类型 'application/x-www-form-urlencoded;'
          // 服务器收到的raw body(原始数据) name=nowThen&age=18
          // newConfig.data = JSON.stringify(config.data);
        }
      }
    }
    return newConfig
  },
  (error) => {
    let { data } = error
    data = {}
    data.msg = '服务器异常请联系管理员!'
    return Promise.resolve(error)
  },
)
// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    const { status, data } = response
    if (status >= 200 && status < 300) {
      if (data.flag === false) {
        throw new Error(`${data.msg}`)
      }
    } else {
      throw new Error(`网络请求错误，状态码${status}`)
    }

    console.log(response)
    return response
    // throw new Error(`网络请求错误，状态码${status}`);
  },
  (error) => {
    const error_ = error
    console.log('cuole')
    if (error.response) {
      switch (error.response.status) {
        case 401:
          sessionStorage.clear()
          // window.location.replace("/login");
          window.location.replace('/')

          break
        default:
      }
    }
    console.log(error.response)

    return error_.response
    // console.log(err);
    // err.data = {};
    // err.data.msg = "请求超时或服务器异常,请检查网络或联系管理员!";
    // return Promise.resolve(err);
  },
)

export default instance

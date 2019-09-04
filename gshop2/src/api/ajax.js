/*
  ajax请求函数模块
  返回值：promise对象
 */
import axios from 'axios'
export default function ajax (url='',data={},type='GET') {
  return new Promise((resolve,reject) => {
    let promise
    if (type === 'GET') {
      //准备url的query参数数据
      let dataStr = ''
      //遍历data中所有属性
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    }else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    promise.then(response => {
      //成功的回调
      resolve(response.data)
    }).catch(error => {
      //失败的回调
      reject(error)
    })
  })
}
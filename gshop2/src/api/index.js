/*
  与后台交互模块
 */
import ajax from './ajax'
const BASE = '/api'
// 1、根据经纬度获取位置详情
export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`)
// 2、获取食品分类列表 
export const reqCategorys = () => ajax(BASE + '/index_category')
// 3、根据经纬度获取商铺列表
export const reqShops = (latitude, longitude) => ajax(BASE + '/shops', {
  latitude,
  longitude
})
// 4、根据经纬度和关键字搜索商铺列表
// export const req = (geohash, keyword) => ajax('/search_shops')
// 5、获取一次性验证码
export const reqCaptcha = () => ajax(BASE + '/captcha')
// 6、用户名密码登陆
export const reqLogin = (name, pwd, captcha) => ajax(BASE + '/login_pwd', {
  name,
  pwd,
  captcha
})
// 7、 发送短信验证码
export const reqSendcode = phone => ajax(BASE + '/sendcode', phone)
// 8、手机号验证码登陆
export const reqPhoneLogin = (phone, code) => ajax(BASE + '/login_sms', {
  phone,
  code
})
// 9、 根据会话获取用户信息
export const reqUserinfo = () => ajax(BASE + '/userinfo')
// 10、用户登出
export const reqLogout = () => ajax(BASE + '/logout')

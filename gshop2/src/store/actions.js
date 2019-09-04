//包含多个间接修改状态方法的对象
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
}
from './mutation-types'
import {
  reqAddress,
  reqCategorys,
  reqShops
} from '../api'

export default {
  //异步获取地址
  async getAddress({commit,state}){
    //发送异步ajax请求
    const {longitude,latitude} = state
    const result = await reqAddress(longitude, latitude)
    if (result.code === 0) {
      //提交一个mutation
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  //异步获取食品分类数组
  async getCategorys({commit}){
    //发送异步ajax请求
    const result = await reqCategorys()
    if (result.code === 0) {
      //提交一个mutation
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, { categorys })
    }
  },
  //异步获取商家列表
  async getShops({commit,state}){
    //发送异步ajax请求
    const {longitude,latitude} = state
    const result = await reqShops(latitude,longitude)
    if (result.code === 0) {
      //提交一个mutation
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  }
}
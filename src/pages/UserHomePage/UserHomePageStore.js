import { observable } from 'mobx'
import { navigateTo } from 'utils/routing'
import * as Api from 'utils/api'

export default class UserInfo {
  @observable userInfo = {}

  getUserInfo = async (id) => {
    try {
      const result = await Api.get({
        url: `users/${id}`,
        params: {},
        loading: true,
      })
      this.userInfo = result.data
    } catch(e) {
      console.log(e)
    }
  }

  editUserInfo = async (id, values) => {
    try {
      await Api.put({
        url: `users/${id}`,
        params: {},
        data: values,
        loading: true,
      })
  
      navigateTo('/user-management')
    } catch(e) {
      console.log(e)
    }
  }
}

import { observable } from "mobx"
import * as Api from "utils/api"
import { navigateTo } from "utils/routing"

class UserEditStore {
  @observable userInfo = {}

  getUserInfo = async (id) => {
    try {
      const result = await Api.get({
        url: `users/${id}`,
        params: {},
        loading: true,
      })

      const payload = result.data
      payload.checkboxGroup = ['1', '2']
      this.userInfo = payload
    } catch(e) {
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
    }
  }
}

export default UserEditStore

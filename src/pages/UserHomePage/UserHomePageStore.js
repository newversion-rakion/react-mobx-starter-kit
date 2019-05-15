import { observable } from 'mobx'
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
}

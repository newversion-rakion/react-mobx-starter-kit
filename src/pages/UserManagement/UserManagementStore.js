import { observable } from 'mobx'
import * as Api  from 'utils/api'

class UserManagementStore {
  @observable totalUsers = 0
  @observable totalPages = 0
  @observable userList = []

  getUserList = async (params) => {
    try {
      const result = await Api.get({
        url: '/users',
        params,
        loading: true,
      })
      this.userList = result.data
      this.totalUsers = result.total
      this.totalPages = result.total_pages
    } catch(e) {
      console.log(e)
    }
  }

  deleteSingleUser = async (id, cb) => {
    try {
      await Api.deleteData({
        url: `users/${id}`,
        loading: true,
      })
      cb()
    } catch {

    }
  }
}

export default new UserManagementStore()

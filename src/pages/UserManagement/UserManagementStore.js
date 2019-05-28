import { observable } from 'mobx'
import * as Api  from 'utils/api'

class UserManagementStore {
  @observable params = {
    page: 1,
    per_page: 4
  }
  @observable totalUsers = 0
  @observable totalPages = 0
  @observable userList = []

  getUserList = async () => {
    try {
      const result = await Api.get({
        url: '/users',
        params: this.params,
        loading: true,
      })
      this.userList = result.data
      this.totalUsers = result.total
      this.totalPages = result.total_pages
    } catch(e) {
    }
  }

  deleteSingleUser = async (id) => {
    try {
      await Api.deleteData({
        url: `users/${id}`,
        loading: true,
      })
      this.getUserList()
    } catch {

    }
  }
}

export default new UserManagementStore()

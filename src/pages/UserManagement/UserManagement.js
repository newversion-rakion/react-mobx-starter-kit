import React, { Component } from 'react'
import { observer } from 'mobx-react'

import UserList from './components/UserList'
import classes from './UserManagement.module.scss'

import UserManagementStore from './UserManagementStore'

@observer
class UserManagement extends Component {
  state = {
    params: {
        page: 1,
        per_page: 4
    }
  }
  componentDidMount() {
    UserManagementStore.getUserList(this.state.params)
  }
  render() {
    const { userList, totalUsers, totalPages } = UserManagementStore
    return(
      <div className={classes.userManagementPage}>
        <div className='container'>
          <UserList
            userList={userList}
            totalUsers={totalUsers}
            totalPages={totalPages}
          />
        </div>
      </div>
    )
  }
}

export default UserManagement

import React, { Component } from "react"
import { observer } from "mobx-react"

import UserList from "./components/UserList"
import classes from "./UserManagement.module.scss"

import UserManagementStore from "./UserManagementStore"

@observer
class UserManagement extends Component {
  componentDidMount() {
    UserManagementStore.getUserList()
  }

  deleteSingleUser = (id) => {
    UserManagementStore.deleteSingleUser(id)
  }
  render() {
    const { userList, totalUsers, totalPages } = UserManagementStore
    return(
      <div className={classes.userManagementPage}>
        <div className="container">
          <UserList
            userList={userList}
            totalUsers={totalUsers}
            totalPages={totalPages}
            deleteSingleUser={this.deleteSingleUser}
          />
        </div>
      </div>
    )
  }
}

export default UserManagement

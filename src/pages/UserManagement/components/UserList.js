import React from 'react'
import User from './User'
import classes from './UserList.module.scss'

const UserList = ({ userList, totalUsers, totalPages }) =>
  <div className={classes.userList}>
    <div>Total user: <strong>{totalUsers}</strong></div>
    <div>Total pages: <strong>{totalPages}</strong></div>
    {userList && userList.map((user, index) =>
      <User key={index} userInfo={user} />
    )}
  </div>

export default UserList

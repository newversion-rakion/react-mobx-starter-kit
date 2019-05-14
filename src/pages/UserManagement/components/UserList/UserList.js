import React from 'react'
import User from '../User'
import classes from './UserList.module.scss'

const UserList = ({ userList, totalUsers, totalPages, deleteSingleUser }) =>
  <div className={classes.userList}>
    <div>Total user: <strong>{totalUsers}</strong></div>
    <div>Total pages: <strong>{totalPages}</strong></div>

    <table className='table'>
      <thead className="thead-dark">
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Avatar</th>
          <th scope='col'>First name</th>
          <th scope='col'>Last name</th>
          <th scope='col'>Email</th>
          <th scope='col'></th>
        </tr>
      </thead>
      <tbody> 
          {userList && userList.map((user, index) =>
            <User key={index} userInfo={user} deleteSingleUser={deleteSingleUser} />
          )}
      </tbody>
    </table>
  </div>

export default UserList

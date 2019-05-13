import React from 'react'
import classNames from 'classnames'

import { navigateTo } from 'utils/routing'
import classes from './User.module.scss'

const User = ({ userInfo }) =>
  <div
    className={classNames(classes.user, 'clearfix')}
    onClick={() => {
      navigateTo(`user-management/${userInfo.id}`)
    }}
  >
    <div className={classNames(classes.userThumb, 'float-left')}>
      <img alt='avt' src={userInfo.avatar} />
    </div>
    <div className={classes.userInfo}>
      <h5>{userInfo.first_name} {userInfo.last_name}</h5>
      <div>{userInfo.email}</div>
    </div>
  </div>

export default User

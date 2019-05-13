import React, { Component } from 'react'
import { observer } from 'mobx-react'
import classNames from 'classnames'

import classes from './UserInfo.module.scss'

import UserInfoStore from './UserInfoStore'

@observer
class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.UserInfoStore = new UserInfoStore()
  }

  componentDidMount() {
    this.UserInfoStore.getUserInfo(this.props.match.params.id)
  }
  render() {
    const { userInfo } = this.UserInfoStore

    return(
      <div className={classes.userInfoPage}>
        <div className='container'>
          <div className={classNames(classes.user, 'clearfix')}>
            <div className={classNames(classes.userThumb, 'float-left')}>
              <img alt='avt' src={userInfo.avatar} />
            </div>
            <div className={classes.userInfo}>
              <h5>{userInfo.first_name} {userInfo.last_name}</h5>
              <div>{userInfo.email}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserInfo

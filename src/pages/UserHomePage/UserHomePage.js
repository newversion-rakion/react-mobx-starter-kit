import React, { Component } from 'react'
import { observer } from 'mobx-react'
import classNames from 'classnames'
import { Button } from 'reactstrap'

import UserEdit from './components/UserEdit'
import classes from './UserHomePage.module.scss'

import UserHomePageStore from './UserHomePageStore'

@observer
class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.UserHomePageStore = new UserHomePageStore()
  }

  componentDidMount() {
    this.UserHomePageStore.getUserInfo(this.props.match.params.id)
  }
  render() {
    const { userInfo, editUserInfo } = this.UserHomePageStore

    return(
      <div className={classes.userHomePage}>
        <div className='container'>
          <div className={classNames(classes.user, 'clearfix')}>
            <div className={classNames(classes.userThumb, 'float-left')}>
              <img alt='avt' src={userInfo.avatar} />
            </div>
            <div className={classes.userInfo}>
              <h5>{userInfo.first_name} {userInfo.last_name}</h5>
              <div>{userInfo.email}</div>
              <Button className={classes.editUserBtn} outline color='info' size='sm'>
                Edit
              </Button>
            </div>
          </div>
          <UserEdit
            userInfo={userInfo}
            editUserInfo={editUserInfo}
          />
        </div>
      </div>
    )
  }
}

export default UserInfo

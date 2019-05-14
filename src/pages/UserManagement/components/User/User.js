import React, { useState } from 'react'
import classNames from 'classnames'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Link } from 'react-router-dom'

import classes from './User.module.scss'

const User = ({ userInfo, deleteSingleUser }) => {

  const [dropdownOpen, setToggle] = useState(false)

  return(
    <tr>
      <th scope='row'>
        <Link className='nav-link' to={`user-management/${userInfo.id}`}>
          {userInfo.id}
        </Link>
      </th>
      <td>
        <div className={classNames(classes.userThumb, 'float-left')}>
          <img alt='avt' src={userInfo.avatar} />
        </div>
      </td>
      <td>{userInfo.first_name}</td>
      <td>{userInfo.last_name}</td>
      <td>{userInfo.email}</td>
      <td>
        <ButtonDropdown isOpen={dropdownOpen} toggle={() => setToggle(!dropdownOpen)}>
          <DropdownToggle caret size="sm">
            Handle
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              onClick={() => deleteSingleUser(userInfo.id)}
            >
              Delete user
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </td>
    </tr>
  )
}

export default User

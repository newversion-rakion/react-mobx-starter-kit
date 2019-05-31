import React from "react"
import { Link } from "react-router-dom"
import classNames from 'classnames'

import { handleLogout } from 'utils/auth'
import ChangeLanguageButton from 'components/ChangeLanguageButton'
import classes from './AuthorizedNav.module.scss'

const AuthorizedNav = () =>
  <ul className={classNames("navbar-nav", classes.navbar)}>
    <li className="nav-item">
      <Link className="nav-link" to="/dashboard">Dashboard</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/user-management">User management</Link>
    </li>
    <li className="nav-item ml-auto">
      <ChangeLanguageButton />
    </li>
    <li className="nav-item">
      <Link
        className="nav-link"
        onClick={() => handleLogout()}
        to="/login"
      >Logout</Link>
    </li>
  </ul>

export default AuthorizedNav

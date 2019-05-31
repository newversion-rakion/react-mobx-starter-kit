import React from "react"
import { Link } from "react-router-dom"
import classNames from 'classnames'

import ChangeLanguageButton from 'components/ChangeLanguageButton'

import classes from './UnauthorizedNav.module.scss'

const UnauthorizedNav = () =>
  <ul className={classNames("navbar-nav", classes.navbar)}>
    <li className="nav-item">
      <Link className="nav-link" to="/login">Login</Link>
    </li>
    <li className="nav-item ml-auto">
      <ChangeLanguageButton />
    </li>
  </ul>

export default UnauthorizedNav

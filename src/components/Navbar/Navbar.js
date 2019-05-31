import React from "react"
import { getToken } from 'utils/storage'

import AuthorizedNav from './components/AuthorizedNav'
import UnauthorizedNav from './components/UnauthorizedNav'

import classes from "./Navbar.module.scss"

const Navbar = props => {
  return (
    <div className={classes.navbarContainer}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav">
            {(() => !!getToken() ? <AuthorizedNav {...props} /> : <UnauthorizedNav {...props} />)()}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

import React from "react"
import { getToken } from 'utils/storage'

import AuthorizedNav from './components/AuthorizedNav'
import UnauthorizedNav from './components/UnauthorizedNav'

import classes from "./Navbar.module.scss"

const Navbar = props => {
  return (
    <div className={classes.navbarContainer}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            {(() => !!getToken() ? <AuthorizedNav {...props} /> : <UnauthorizedNav {...props} />)()}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar

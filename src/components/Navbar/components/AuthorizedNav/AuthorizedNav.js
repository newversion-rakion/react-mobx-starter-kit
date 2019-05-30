import React from "react"
import { Link } from "react-router-dom"

const AuthorizedNav = () =>
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to="/">Landing page</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/user-management">User management</Link>
    </li>
  </ul>

export default AuthorizedNav

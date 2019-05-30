import React from "react"
import { Link } from "react-router-dom"

const UnauthorizedNav = () =>
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to="/login">Login</Link>
    </li>
  </ul>

export default UnauthorizedNav

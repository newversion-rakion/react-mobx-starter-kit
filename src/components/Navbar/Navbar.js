import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.scss';

const Navbar = () =>
  <div className={classes.navbarContainer}>
    <div className='container'>
      <nav className='nav'>
        <Link className='nav-link' to="/">Landing page</Link>
        <Link className='nav-link' to="/login">Login</Link>
      </nav>
    </div>
  </div>

export default Navbar

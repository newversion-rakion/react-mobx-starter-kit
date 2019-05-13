import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.scss';

const Navbar = () =>
  <div className={classes.navbarContainer}>
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>Landing page</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/login'>Login</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/user-management'>User management</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>

export default Navbar

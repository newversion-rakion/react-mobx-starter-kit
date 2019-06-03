import React from 'react'
import { ButtonGroup, Dropdown } from 'react-bootstrap'
import { handleLogout } from 'utils/auth'
import ChangeLanguageButton from 'components/ChangeLanguageButton'

import classes from './Header.module.scss'

const Header = () =>
  <div className={classes.mainHeader}>
    <div className="container">
      <div className={classes.mainHeaderContent}>
        <div className={classes.headerRight}>
          <Dropdown as={ButtonGroup} alignRight>
            <ButtonGroup className={classes.userName}>
              {sessionStorage.getItem('userName')}
            </ButtonGroup>

            <Dropdown.Toggle className={classes.dropdownIcon} split id="dropdown-split-basic" />

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleLogout()}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  </div>

export default Header

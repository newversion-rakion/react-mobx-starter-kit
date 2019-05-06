import React, { Component } from 'react'

import Navbar from 'components/Navbar'
import classes from './CoreLayout.module.scss'

class CoreLayout extends Component {
  render() {
    const { children } = this.props
    return(
      <div className={classes.CoreLayout}>
        <Navbar />

        <div>
          {children}
        </div>
      </div>
    )
  }
}

export default CoreLayout

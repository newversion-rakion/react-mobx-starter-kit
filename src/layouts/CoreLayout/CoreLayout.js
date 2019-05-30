import React, { Component } from "react"
import { observer } from "mobx-react"

import Loading from "components/Loading"
import Notification from "components/Notification"
import Navbar from "components/Navbar"
import classes from "./CoreLayout.module.scss"

import apiStore from "stores/ApiStore"

@observer
class CoreLayout extends Component {
  render() {
    const { children } = this.props
    const { notification, loading } = apiStore
    return(
      <div className={classes.coreLayout}>
        {loading &&
          <Loading />
        }
        {notification &&
          <Notification />
        }

        <Navbar />

        <div className={classes.coreLayoutContent}>
          {children}
        </div>
      </div>
    )
  }
}

export default CoreLayout

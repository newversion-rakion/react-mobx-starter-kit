import React, { Component } from "react"
import { observer } from "mobx-react"

import DashBoardStore from "./DashBoardStore"
@observer
class Dashboard extends Component {
  render() {
    return(
      <div>
        <div className="container">{DashBoardStore.number}</div>
      </div>
    )
  }
}

export default Dashboard

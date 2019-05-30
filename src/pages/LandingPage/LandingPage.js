import React, { Component } from "react"
import { observer } from "mobx-react"

import LandingPageStore from "./LandingPageStore"
@observer
class LandingPage extends Component {
  render() {
    return(
      <div>
        <div className="container">{LandingPageStore.number}</div>
      </div>
    )
  }
}

export default LandingPage

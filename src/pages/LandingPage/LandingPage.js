import React, { Component } from 'react'
import { observer } from 'mobx-react'

import LandingPageStore from './LandingPageStore'
@observer
class LandingPage extends Component {
  return() {
    console.log(LandingPageStore.number)
    return(
      <div>
        <div className='container'>Landing page</div>
      </div>
    )
  }
}

export default LandingPage

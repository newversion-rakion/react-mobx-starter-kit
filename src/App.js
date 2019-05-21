import React, { Component } from 'react'
import { Router } from 'react-router-dom'
import history, { navigateTo } from 'utils/routing'

import Routes from 'routes'
import CoreLayout from 'layouts/CoreLayout'
import './App.module.scss'

export default class App extends Component {
  state = {
    somethingWentWrong: false,
  }

  componentDidCatch(error, info) {
    // this.setState({
    //   somethingWentWrong: true,
    // })
  }
  render() {
    const { somethingWentWrong } = this.state

    if (somethingWentWrong) navigateTo('/something-went-wrong')
    return (
      <Router history={history}>
        <CoreLayout>
          <Routes />
        </CoreLayout>
      </Router>
    )
  }
}

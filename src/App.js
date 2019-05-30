import React, { Component } from "react"
import { Router } from "react-router-dom"
import { IntlProvider } from "react-intl"
import { observer } from "mobx-react"

import addLocale, { messages } from 'translations'
import history, { navigateTo } from "utils/routing"
import { Routes } from "routes"
import LanguageStore from "stores/LanguageStore"
import CoreLayout from "layouts/CoreLayout"

import "./App.module.scss"

addLocale()

@observer
class App extends Component {
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
    const { locale } = LanguageStore

    if (somethingWentWrong) navigateTo('/something-went-wrong')

    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Router history={history}>
          <CoreLayout>
            <Routes />
          </CoreLayout>
        </Router>
      </IntlProvider>
    )
  }
}

export default App

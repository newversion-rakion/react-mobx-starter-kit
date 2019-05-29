import React, { Component } from "react"
import { Router } from "react-router-dom"
import { IntlProvider } from "react-intl"
import { observer } from "mobx-react"
import { addLocaleData } from "react-intl"
import locale_en from "react-intl/locale-data/en"
import locale_vi from "react-intl/locale-data/vi"

import messages_vi from "translations/vi.json"
import messages_en from "translations/en.json"
import history, { navigateTo } from "utils/routing"
import Routes from "routes"
import LanguageStore from "stores/LanguageStore"
import CoreLayout from "layouts/CoreLayout"

import "./App.module.scss"

const messages = {
  'vi': messages_vi,
  'en': messages_en
}
addLocaleData([...locale_en, ...locale_vi])

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

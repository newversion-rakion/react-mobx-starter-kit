import React, { Component } from 'react'
import { observer } from 'mobx-react'
import classes from './ChangeLanguageButton.module.scss'

import LanguageStore from 'stores/LanguageStore'

@observer
class ChangeLanguageButton extends Component {
  render() {
    return(
      <div className={classes.changeLanguageButton}>
        <div className="btn-group btn-group-sm mr-2" role="group" aria-label="First group">
          <button
            onClick={() => LanguageStore.changeLocale('vi')}
            type="button"
            className="btn btn-secondary">Vi</button>
          <button
            onClick={() => LanguageStore.changeLocale('en')}
            type="button"
            className="btn btn-secondary">En</button>
        </div>
      </div>
    )
  }
}

export default ChangeLanguageButton

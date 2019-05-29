import { observable, action } from 'mobx'

class LanguageStore {
  @observable locale = localStorage.getItem('locale') || 'en'

  @action changeLocale = (locale) => {
    localStorage.setItem('locale', locale)
    this.locale = locale
  }
}

export default new LanguageStore()

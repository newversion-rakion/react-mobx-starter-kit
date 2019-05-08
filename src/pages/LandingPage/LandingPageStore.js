import { observable } from 'mobx'

class LandingPageStore {
  @observable number = 1
}

export default new LandingPageStore()

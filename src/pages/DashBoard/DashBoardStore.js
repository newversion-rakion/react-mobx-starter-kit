import { observable } from "mobx"

class DashBoardStore {
  @observable number = 1
}

export default new DashBoardStore()

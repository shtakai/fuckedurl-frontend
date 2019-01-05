import { observable, action } from 'mobx'
import { oberver } from 'mobx-react'

class AppStore {
  @observable timer = 0

  constructor() {
    setInterval(() => {
      this.timer += 1
    }, 1000)
  }

  @action.bound
  reset() {
    this.timer = 0
  }
}

export default AppStore

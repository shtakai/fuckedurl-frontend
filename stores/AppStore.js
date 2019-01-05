import { observable, action, computed } from 'mobx'

class AppStore {
  @observable timer = 0
  @observable clicks = 0

  @computed get data() {
    return this.timer * 10
  }

  constructor() {
    setInterval(() => {
      this.timer += 1
    }, 1000)
  }

  @action.bound
  reset() {
    this.timer = 0
    this.clicks += 1
  }
}

export default AppStore

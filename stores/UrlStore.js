import { observable, action, computed } from 'mobx'

class UrlStore {
  @observable url
  @observable generatedUrl

  @computed get urlGenerated() {
    return !!generatedUrl
  }

  constructor() {
    this.url = ''
    this.generatedUrl = ''
  }

  // @action.bound
  // reset() {
  //   this.timer = 0
  //   this.clicks += 1
  // }
}

export default UrlStore

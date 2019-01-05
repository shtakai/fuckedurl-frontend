import { observable, action, computed, configure } from 'mobx'
import isUri from 'validate.io-uri'
import fetch from 'isomorphic-unfetch'
configure({ enforceActions: 'observed' });

class UrlStore {
  @observable url
  @observable generatedUrl

  @computed get urlGenerated() {
    return !!this.generatedUrl
  }

  constructor() {
    this.url = ''
    this.generatedUrl = ''
  }

  handleCreateUrl(url) {
    console.log(`generateUrl: ${url}`)

    let isValid = isUri(url)
    if (!isValid) {
      return
    }
    this.setUrl(url)
    this.generateUrl(url)
  }

  @action
  setUrl = data => {
    this.url = data
  }

  @action
  setGeneratedUrl = data => {
    this.generatedUrl= data
  }

  generateUrl(url) {
    let baseUrl = `https://fuckurl.herokuapp.com/redirect`
    fetch(`https://fuckurl.herokuapp.com/api/v1/links/create`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: url
      })
      })
      .then( r => r.json() )
      .then( data => {
        let redirectUrl = `${baseUrl}/${data.short_id}`
        console.log(`URL has been shortened. => ${redirectUrl}`)
        this.setGeneratedUrl(redirectUrl)
      })
  }
}

export default UrlStore

import { Component } from 'react'
import isUri from 'validate.io-uri'
import fetch from 'isomorphic-unfetch'
import Url from 'url-parse'

class UrlForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      url: '',
    }

    this.handleCreateUrl = this.handleCreateUrl.bind(this)
    this.updateUrl = this.updateUrl.bind(this)
    this.urlGenerated = this.urlGenerated.bind(this)
  }

  urlGenerated(url) {
    this.props.urlGenerated(url)
  }

  handleCreateUrl(e) {
    let isValid = isUri(this.state.url)
    if (!isValid) {
      return
    }

    let url = this.state.url
    let baseUrl = `http://localhost:3000/redirect`
    fetch(`http://localhost:3000/api/v1/links/create`, {
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
        this.urlGenerated(redirectUrl)
      })
  }

  updateUrl(e) {
    this.state.url = e.target.value
    this.props.updateUrl(this.state.url)
  }

  render() {
    return(
      <div className="urlform">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="url"
            placeholder="Enter URL you want to en-short"
            onChange={this.updateUrl}
            value={this.props.baseUrl}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.handleCreateUrl}
        >Short Fucked</button>
      </div>
    )
  }
}

export default UrlForm

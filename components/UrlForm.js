import { Component } from 'react'
import isUri from 'validate.io-uri'

import fetch from 'isomorphic-unfetch'

class UrlForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      url: '',
    }

    this.handleCreateUrl = this.handleCreateUrl.bind(this)
    this.updateUrl = this.updateUrl.bind(this)

  }
  handleCreateUrl(e) {
    console.log('handleCreateUrl')
    console.log(this.state.url)
    let isValid = isUri(this.state.url)
    console.log(`FUCKED URL IS VALID?: ${isValid}`)
    fetch(`http://localhost:3000/api/v1/links`)
      .then( r => r.json() )
      .then( data => console.log(data) )
  }

  updateUrl(e) {
    this.state.url = e.target.value
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



import { Component } from 'react'

class UrlForm extends Component {
  constructor(props) {
    super(props)

    this.handleCreateUrl = this.handleCreateUrl.bind(this)
    this.updateUrl = this.updateUrl.bind(this)
  }

  handleCreateUrl(e) {
    this.props.urlStore.handleCreateUrl(this.props.urlStore.url)
  }

  updateUrl(e) {
    this.props.urlStore.setUrl(e.target.value)
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

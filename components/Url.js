import Link from 'next/link'
import { observer } from 'mobx-react'
import { Component } from 'react'

@observer
class Url extends Component {
  render() {
    if (this.props.urlStore.urlGenerated) {
      return(
        <div>
          <Link
            href={this.props.urlStore.generatedUrl}
          >
            <a>generated linl for {this.props.urlStore.url}</a>
          </Link>
          <div>
            <span className='badge badge-success'>{this.props.urlStore.generatedUrl}</span>
          </div>
        </div>
      )
    }
  }
}

export default Url


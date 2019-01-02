import { Component } from 'react'

import Layout from '../components/Layout'
import UrlForm from '../components/UrlForm'
import Url from '../components/Url'

class Index extends Component {
  constructor(props){
    super(props)

    this.state = {
      url: '',
    }

    this.urlGenerated = this.urlGenerated.bind(this)
  }

  urlGenerated(url) {
    console.log('emit fuck')
    console.log(url)
    this.setState({ url: url })
  }

  render() {
    return(
      <Layout>
        <div>
          <h1>Here we are FuckURL</h1>
          <UrlForm urlGenerated={this.urlGenerated}/>
          {this.state.url && <Url url={this.state.url}/>}
        </div>
      </Layout>
    )
  }
}

// const Index = (props) => (
// )

export default Index


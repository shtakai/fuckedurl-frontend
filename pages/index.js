import { Component } from 'react'

import Layout from '../components/Layout'
import UrlForm from '../components/UrlForm'
import Url from '../components/Url'
// import Timer from '../components/Timer'
// import AppStore from '../stores/AppStore';
import UrlStore from '../stores/UrlStore';
import DevTools from 'mobx-react-devtools'
import { observer } from 'mobx-react'

@observer
class Index extends Component {
  constructor(props){
    super(props)

    this.urlStore = new UrlStore()
  }

  render() {
    return(
      <Layout>
        <div>
          <h1>Here we are FuckURL</h1>
          <UrlForm
            urlStore={this.urlStore}
          />
          {this.urlStore.urlGenerated &&
            <Url
              urlStore={this.urlStore}
            />
          }
        </div>
        <DevTools/>
      </Layout>
    )
  }
}

export default Index

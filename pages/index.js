import { Component } from 'react'

import Layout from '../components/Layout'
import UrlForm from '../components/UrlForm'
import Url from '../components/Url'

import { observer } from 'mobx-react'
import AppStore from '../stores/AppStore';
import DevTools from 'mobx-react-devtools'

const TimerView = observer(({ appStore }) => (
  <button onClick={appStore.reset}>Second passed: {appStore.timer}</button>
 ))

class Index extends Component {
  constructor(props){
    super(props)

    this.state = {
      url: '',
      baseUrl: '',
    }

    this.urlGenerated = this.urlGenerated.bind(this)
    this.updateUrl = this.updateUrl.bind(this)
  }

  urlGenerated(url) {
    this.setState({ url: url })
    this.setState({ baseUrl: '' })
  }

  updateUrl(url) {
    this.setState({ baseUrl: url })
  }

  render() {
    return(
      <Layout>
        <div>
          <h1>Here we are FuckURL</h1>
          <UrlForm
            urlGenerated={this.urlGenerated}
            updateUrl={this.updateUrl}
            baseUrl={this.state.baseUrl}
          />
          {this.state.url &&
          <Url
            url={this.state.url}
          />}
        </div>
        <TimerView appStore={new AppStore()}/>
        <DevTools/>
      </Layout>
    )
  }
}

export default Index

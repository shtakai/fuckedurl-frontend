import { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Timer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <h2>{this.props.appStore.clicks}</h2>
        <h2>{this.props.appStore.data}</h2>
        <button onClick={this.props.appStore.reset}>Second passed: {this.props.appStore.timer}</button>
      </div>
    )
  }
}

export default Timer

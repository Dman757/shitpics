import React, {Component} from 'react'

class Shithouse extends Component {
  componentWillMount() {
      this.props.loadShit()
  }

  render () {
    return (
      <div className='App'>
        <h1 className='App-title'>SHITHOUSE.TV</h1>
      </div>
    )
  }
}
export default Shithouse

import React, {Component} from 'react'
import map from 'lodash/map'
class Shithouse extends Component {
  componentDidMount() {
      this.props.loadShit()
  }

  render () {
    return (
      <div>
        <div className='App'>
          <h1 className='App-title'>SHITHOUSE.TV</h1>
        </div>
        <div>
          <ul>
            {map(this.props.bumps, bump => (
              <li key={bump.name}>
                <a href={`https://${bump.name}.shithouse.tv`}>{bump.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Shithouse

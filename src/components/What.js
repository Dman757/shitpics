import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class What extends Component {
  render () {
    return (
      <div className='App'>
        {/* <h1 className='App-title'>WE DOING WORDPRESS NOW</h1> */}
        <Button onClick={this.props.loadPages} >
        Pages
        </Button>
        <Button onClick={this.props.loadPosts} >
        Posts
        </Button>
      </div>
    )
  }
}
export default What

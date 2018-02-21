import React, { Component } from 'react'
import Posts from './Posts'
class What extends Component {
  componentWillMount () {
    this.props.loadPosts()
  }
  render () {
    // console.log(this.props)
    return (
      <Posts posts={this.props.posts} />
    )
  }
}
export default What

       /* <h1 className='App-title'>WE DOING WORDPRESS NOW</h1>
        <Button onClick={this.props.loadPages} >
        Pages
        </Button>
        <Button onClick={this.props.loadPosts} >
        Posts
        </Button> */

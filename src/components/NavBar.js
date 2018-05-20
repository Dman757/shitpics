import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
// import '../App.css'

class NavBar extends Component {
  render () {
    const { pathname } = this.props.location
    return (
      <Menu pointing>
        <Menu.Item
          as={Link}
          to='/'
          active={pathname === '/'}
          name='home'
        />
        <Menu.Item
          as={Link}
          to='/what'
          active={pathname === '/what'}
          name='what'
        />
        <Menu.Item
          as={Link}
          to='/shithouse'
          active={pathname === '/shithouse'}
          name='SHITHOUSE'
        />
      </Menu>
    )
  }
}
export default NavBar

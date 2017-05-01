import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return <header>
      <h1><em>Street 'Sweeper'</em></h1>
      <Link to='/'><div className='refresh'><h4>Main Menu</h4></div></Link>
    </header>
  }
}

export default Header

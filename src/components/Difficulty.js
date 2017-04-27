import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Difficulty extends Component {
  render () {
    return <div className='overlay'>
      <div className='dialog'>
        <h3>Select Difficulty:</h3>
        <NavLink to='/games'>Beginner</NavLink>
        <NavLink to='/games'>Normal</NavLink>
        <NavLink to='/games'>Hard</NavLink>
      </div>
    </div>
  }
}

export default Difficulty

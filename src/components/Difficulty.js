import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import store from './store'

class Difficulty extends Component {
  render () {
    return <div className=''>
      <div className='Difficulty'>
        <h3>Select Difficulty:</h3>
        <button onClick={() => store.createGame(0)}>Beginner</button>
        <button onClick={() => store.createGame(1)}>Normal</button>
        <button onClick={() => store.createGame(2)}>Hard</button>
      </div>
    </div>
  }
}

export default Difficulty

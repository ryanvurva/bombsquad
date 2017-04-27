import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import RyuKen from '../images/Ryu-ken-cvs-specialintro.gif'
import Coin from '../images/coin.png'

class Home extends Component {
  render () {
    return <div className='Title'>
      <img src={RyuKen} />
      <div className='Coin'>
        <h2>Insert Coin</h2>
        <Link to='/choose'><img src={Coin} className='float' /></Link>
      </div>
    </div>
  }
}

export default Home

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Difficulty from './Difficulty'
// import GameBoard from './GameBoard'
import Testboard from './Testboard'
import Footer from './Footer'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <Link to='/'><Header /></Link>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/choose' component={Difficulty} />
            {/* <Route path='/games' component={GameBoard} /> */}
            <Route path='/games/:id' component={Testboard} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  }
}

export default App

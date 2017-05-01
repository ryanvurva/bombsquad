import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Difficulty from './Difficulty'
import GameBoard from './GameBoard'
import Footer from './Footer'
import Loser from './Loser'
import Winner from './Winner'
// import Testboard from './Testboard'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/choose' component={Difficulty} />
            <Route path='/games/:id' component={GameBoard} />
            {/* <Route path='/games/:id' component={Testboard} /> */}
            <Route exact path='/winner' component={Winner} />
            <Route exact path='/loser' component={Loser} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  }
}

export default App

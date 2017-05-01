import React, { Component } from 'react'
import Cell from './Cell'
import { observer } from 'mobx-react'
import { checkGame, createGame } from '../stores/api'
import current from '../stores/game'

@observer
class Testboard extends Component {
  componentDidMount () {
    checkGame(this.props.match.params.id)
    .then(data => {
      current.game = data
    })
  }

  _click = () => {
    createGame(current.game.difficulty)
    .then(data => {
      current.game = data
      window.location = `/game/${data.id}`
    })
  }

  render () {
    const gameBoard = current.game.board.map((_, i) => {
      return current.game.board[i].map((col, j) => {
        console.log(col)
        return <Cell row={i} col={j}
          value={col.toString()}
          content={current.game.board[i][j]}
          id={this.props.match.params.id} />
      })
    })
    if (current.game.state === 'won') {
      setTimeout(() => { window.location = '/winner' }, 1000)
    } else if (current.game.state === 'lost') {
      setTimeout(() => { window.location = '/loser' }, 1000)
    } else {
      return <div className='gameboard'>
        <div className='gameGrid'>
          {gameBoard}
        </div>
      </div>
    }
  }
}

export default Testboard

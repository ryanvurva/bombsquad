import React, { Component } from 'react'
import store from './store'
import { observer } from 'mobx-react'

@observer
class Testboard extends Component {
  componentDidMount () {
    const id = this.props.match.params.id
    window.fetch(`http://minesweeper-api.herokuapp.com/games/${id}`)
      .then(res => res.json())
      .then(data => {
        store.board = data.board
      })
  }

  _click = (x, y) => {
    const id = this.props.match.params.id
    window.fetch(`http://minesweeper-api.herokuapp.com/games/${id}/check`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        row: y,
        col: x
      })
    })
    .then(res => res.json())
    .then(data => {
      store.board = data.board
    })
  }

  render () {
    return <table>
      <tbody>
        {store.board.map((row, y) => {
          return <tr key={y}>
            {row.map((col, x) => {
              return <td className='cell' key={x} onClick={() => {
                this._click(x, y)
              }}>{col}</td>
            })}
          </tr>
        })}
      </tbody>
    </table>
  }
}

export default Testboard

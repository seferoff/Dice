import React, { Component } from 'react'
import "./Dice.css"

class Dice extends Component {
    state = {
        number : null
    }

    rolldice = () => {
        this.setState ({number : Math.floor(Math.random() * 6) + 1})
    }

  render() {
    const {number} = this.state
    return (
      <div className='main'>
        <button className='display' type='button' onClick={this.rolldice}>{number}</button>
      </div>
    )
  }
}

export default Dice
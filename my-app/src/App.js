import React, { Component } from 'react'
import Form from './Form'
import './style.scss'

class App extends Component {
  render() {
    return (
    <div className="App">
      <div className="App__information">
      <h1 className="App__title">Начните торговать прямо сейчас!</h1>

        <ul className = "App__list">
        <li className = "App__item">Нет спреда - торгуйте с прозрачными и точными котировками</li>
        <li className = "App__item">Достаточно депозита в $10, чтобы начать торговать</li>
        </ul>

        <Form/>
        
    </div>

      <div className="App__images">
        <div className = "App__images--laptop"><img src={ require('./img/laptop.png')}  alt = "Laptop" /></div>
        <div className = "App__images--mobile"><img src={ require('./img/mobile.png')}  alt = "Mobile" /></div>
      </div>

    </div>
  );
  }
}

export default App;

import React, { Component } from 'react'
import Form from './Form'
import './style.scss'

class App extends Component {
  render() {
    return (
    <div className="App container">
    <div className = "App__login">
      <div className = "App__logo">
          <img src={ require('./img/rectangle.png')}  alt = "Logo" />
      </div>
          <button className = "Login__button">Войти</button>
    </div>
    <div className="App__main">
      <div className="App__information">

      <h1 className="App__title">Начните торговать прямо сейчас</h1>

        <ul className = "App__list">
        <li className = "App__item">Нет спреда —  торгуйте с прозрачными <span>и точными котировками</span></li>
        <li className = "App__item">Достаточно депозита в $10, чтобы начать торговать</li>
        </ul>

        <Form/>

    </div>

      <div className="App__images">
        <div className = "App__images--laptop"><img src={ require('./img/laptop.png')}  alt = "Laptop" /></div>
        <div className = "App__images--ipad"><img src={ require('./img/ipad.png')}  alt = "Ipad" /></div>
        <div className = "App__images--mobile"><img src={ require('./img/mobile.png')}  alt = "Mobile" /></div>
      </div>

    </div>
    </div>
  );
  }
}

export default App;

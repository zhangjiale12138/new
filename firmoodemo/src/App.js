import React, { Component } from 'react';
import './App.css';


import NavFirst from './components/NavFirst';
import NavSec from './components/NavSec';
import { Carousel } from 'antd';
import a from './img/01.jpg';
import b from './img/02.jpg';
import c from './img/03.jpg';
import d from './img/04.jpg';
import e from './img/05.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
     
        <NavFirst />
        <NavSec />
        <Carousel autoplay>
        <div><img src={a} alt='' /></div>
        <div><img src={b} alt='' /></div>
        <div><img src={c} alt='' /></div>
        <div><img src={d} alt='' /></div>
        <div><img src={e} alt='' /></div>
        </Carousel>
      </div>
    );
  }
}

export default App;

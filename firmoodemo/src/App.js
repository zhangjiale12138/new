import React, { Component } from 'react';
import './App.css';


import NavFirst from './components/NavFirst';
import NavSec from './components/NavSec';
import Scanf from './components/Scanf';
import Glasses from './components/Glasses';
import Kinds from './components/Kinds';
import AndMe from './components/AndMe';
import Measure from './components/Measure';
import Footer from './components/Footer';
import { Carousel} from 'antd';
import a from './img/01.jpg';
import b from './img/02.jpg';
import c from './img/03.jpg';
import d from './img/04.jpg';
import e from './img/05.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <NavFirst name='父子通信'/>
        <NavSec />
        <Carousel autoplay>
        <div><img src={a} alt='' /></div>
        <div><img src={b} alt='' /></div>
        <div><img src={c} alt='' /></div>
        <div><img src={d} alt='' /></div>
        <div><img src={e} alt='' /></div>
        </Carousel>
        <Scanf />
        <Glasses />
        <Kinds />
        <AndMe />
        <Measure />
        <Footer />
      
      </div>
    );
  }
}

export default App;

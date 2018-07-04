import React, { Component } from 'react';
import {Divider} from 'antd';
import './Measure.css';
import a from '../img/30.png';
import b from '../img/31.png';
import c from '../img/32.jpg';
class Measure extends Component {
  render() {
    return (
      <div className='measure'>
       <Divider style={{height:2}} />
       <div className='pic'>
           <div><img src={a} alt=""/><p className='font'><b>Measure your PD</b> <span>(pupillary distance)</span></p></div>
           <div><img src={b} alt=""/><p className='font'><b>Face Shape</b> </p></div>
           <div><img src={c} alt=""/></div>
       </div>
       <Divider style={{height:2}} />
      </div>
    );
  }
}

export default Measure;

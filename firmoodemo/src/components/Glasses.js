import React, { Component } from 'react';
import './Glasses.css'
import a from '../img/06.jpg';
import b from '../img/07.jpg';
import c from '../img/08.jpg';
import d from '../img/09.jpg';
import e from '../img/10.jpg';
import f from '../img/11.jpg';
import g from '../img/12.jpg';
import h from '../img/13.jpg';
import i from '../img/14.jpg';
import j from '../img/15.jpg';
import k from '../img/16.jpg';
import l from '../img/17.jpg';

const Item = [
  { url: a, price: 23.99 },
  { url: b, price: 39.00 },
  { url: c, price: 27.99 },
  { url: d, price: 25.99 },
  { url: e, price: 25.99 },
  { url: f, price: 23.99 },
  { url: g, price: 25.99 },
  { url: h, price: 23.99 },
  { url: i, price: 23.99 },
  { url: j, price: 25.99 },
  { url: k, price: 23.99 },
  { url: l, price: 23.99 }];
const listItems = Item.map((items) => {
  return (<div key={items.url} className='item'>
    <div className='pic'><img src={items.url} alt="" /></div>
    <div className='dot'><p><span></span><span></span><span></span></p></div>
    <div className='price'><p>${items.price}</p></div>
  </div>
  )
})

class Glasses extends Component {
  render() {
    return (
      <div className='glass'>
        {listItems}
      </div>
    );
  }
}

export default Glasses;

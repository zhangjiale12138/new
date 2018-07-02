import React, { Component } from 'react';
import './Kinds.css'

import a from '../img/a.jpg';
import b from '../img/b.jpg';
import c from '../img/c.jpg';
import d from '../img/d.jpg';
import e from '../img/e.jpg';
import f from '../img/f.jpg';
const images=[a,b,c,d,e,f];
const pic=images.map((item)=>{
    return (<img src={item} alt='' key={item.toString()} />)
})
class Kinds extends Component {
  render() {
    return (
      <div className='kinds'>
        {pic}
      </div>
    );
  }
}

export default Kinds;

import React, { Component } from 'react';
import  './NavFirst.css';

class NavFirst extends Component {
  render() {
    return (
      <div>
       <div className='nav'>
       <p className='leftSide'>Currency:US Dollar</p>
       <ul className='rightSide'>
       <li>Toll Free:1-855-847-6006</li>
       <li>Live Chat</li>
       <li>HELP</li>
       <li>SIGN IN</li>
       <li>Track Order</li>
       <li>(0)</li>
       <li></li>
       </ul>
       </div>
      </div>
    );
  }
}

export default NavFirst;

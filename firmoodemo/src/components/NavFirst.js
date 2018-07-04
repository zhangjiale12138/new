import React, { Component } from 'react';
import {Icon}from 'antd';
import  './NavFirst.css';

class NavFirst extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {seconds:0};

  // }
  // trick(){
  //   this.setState(prevState=>({seconds:prevState.seconds+1}))
  // }
  // componentDidMount() {
  //   this.interval =setInterval(this.trick(),1000);

  // }
  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }
  render() {
    return (
      <div className='top'>
       <div className='nav'>
       <p className='leftSide'>Currency:US Dollar <Icon type="caret-down" style={{fontSize:5}} /></p>
       <ul className='rightSide'>
       <li><Icon type="phone" /> Toll Free:1-855-847-6006 </li>
       <li><Icon type="message" /> Live Chat</li>
       <li>HELP</li>
       <li>SIGN IN</li>
       <li>Track Order</li>
       <li><Icon type="shopping-cart" /> (0)</li>
       <li><Icon type="heart" /></li>
      
       </ul>
       </div>
      </div>
    );
  }
}

export default NavFirst;

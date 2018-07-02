import React, { Component } from 'react';
import {Input}from 'antd';
import {Menu} from 'antd';
import './NavSec.css';
import logo from '../img/logo.png';
const Search = Input.Search;

class NavSec extends Component {
    state = {
        current: 'eyeglasses',
      }
    
      handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }
    
  render() {
    return (
      <div className='NavSec'>
      <div className='logo'><img src={logo} alt='' /></div>
      <div className='navBar'>
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal">
        <Menu.Item key="eyeGlasses">
          EYEGLASSES
        </Menu.Item>
        <Menu.Item >
          SUNGLASSES
        </Menu.Item>
        <Menu.Item key='dailyNew'>
        <a href='https://www.firmoo.com/new-arrivals.html' target="_blank" rel="noopener noreferrer"> DAILY NEW </a>
        </Menu.Item>
        <Menu.Item >
         BOGO SALE
        </Menu.Item>
        <Menu.Item >
        FEATURED STYLEDS
        </Menu.Item>
      </Menu>
     </div>
      <div className='scanf'><Search  placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 200 }} /></div>
      </div>
    );
  }
}

export default NavSec;

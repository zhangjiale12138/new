import React, { Component } from 'react';
import { Input, Checkbox  } from 'antd';
import './Scanf.css'

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}
const Search = Input.Search;

class Scanf extends Component {
  render() {
    return (
      <div className='scanf'>
      <div className='introduce'>Join Us Now & Get 15% Off</div>
      <div className='sub'>
    <Search
      placeholder="input search text"
      enterButton="Subscribe"
      size="large"
      onSearch={value => console.log(value)}/></div>
      <div className='check'> <Checkbox onChange={onChange}><a href="http://">Update me on latest styles & deals</a></Checkbox></div>
      </div>
    );
  }
}

export default Scanf;

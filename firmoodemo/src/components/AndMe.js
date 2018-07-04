import React, { Component } from 'react';
import { Menu, Icon } from 'antd';


import Pop from './Pop';
import a from '../img/21.png';
import b from '../img/22.png';
import c from '../img/23.png';
import d from '../img/24.png';
import e from '../img/25.png';
import f from '../img/26.png';
import g from '../img/27.png';
import h from '../img/28.png';
import i from '../img/29.png';

import './AndMe.css';

class AndMe extends Component {

    state = {
        current: 'gallery',
        src: b
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <div className='firmoo'>
                <div className='title'><span className='line1'></span>
                    <span >Firmoo & Me</span>
                    <span className='line2'></span></div>
                <div className='customer_media'><p><b>New to Firmoo?</b> Have a look at the photos, shopping experience and voice shared by our customers.</p>
                    <p>*Notice: If you don't want your photo/video to be featured , please contact service@firmoo.com.</p></div>
                <div><Menu onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal">
                    <Menu.Item key='gallery'>
                        Gallery
                    </Menu.Item>
                    <Menu.Item key='video'>
                        Video
                    </Menu.Item>
                    <Menu.Item key='voice'>
                        Voice
                     </Menu.Item >
                </Menu></div>
                <div className='view'><span>view more</span> <Icon type="sync" style={{ fontSize: 16, color: '#00a2e1', fontWeight: 'bolder' }} /><span >trade</span></div>
                <div className='customer_show'>

                    <div className='left'>
                        <div><img src={a} alt="" /></div>
                    </div>
                    <div className='right'>
                        <div data-toggle="modal" data-target="#myModal" ><img src={b} alt="" /></div>
                        <div><img src={c} alt="" /></div>
                        <div><img src={d} alt="" /></div>
                        <div><img src={e} alt="" /></div>
                        <div><img src={f} alt="" /></div>
                        <div><img src={g} alt="" /></div>
                        <div><img src={h} alt="" /></div>
                        <div><img src={i} alt="" /></div>
                    </div>

                </div>
                <Pop name={this.state.src} />
            </div>
        );
    }
}

export default AndMe;

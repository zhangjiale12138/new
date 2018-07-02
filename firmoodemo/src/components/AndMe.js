import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import './AndMe.css';

class AndMe extends Component {
    state = {
        current: 'gallery',
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

                    <div>
                        <div></div>
                        </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div></div>

                </div>

            </div>
        );
    }
}

export default AndMe;

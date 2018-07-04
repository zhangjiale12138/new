import React, { Component } from 'react';
import { Icon, Divider } from 'antd';
import './Footer.css';
import a from '../img/star.png';
import b from '../img/trust_plot.png';
import c from '../img/credit-card.jpg';
class Footer extends Component {
  render() {
    return (

      <div className='footer'>
        <div className='intro'>
          <p>One-on-One Service, Save Up to 90%v</p>
          <p>Get Free Glasses Via YouTube Cooperation <Icon type='mail' /> service@firmoo.com</p>
          <p>  <Icon type='facebook' style={{ fontSize: 30, color: '#3B5998' }} /> <Icon type="twitter" style={{ fontSize: 30, color: '#1DA1F2' }} /> <Icon type="instagram" style={{ fontSize: 30, color: '#E03566' }} /><Icon type="youtube" style={{ fontSize: 30, color: '#CD201F' }} /> </p>
        </div>
        <Divider style={{ height: 2 }} />
        <div className='trust'>
          <ul>
            <li><img src={a} alt="" /></li>
            <li><img src={a} alt="" /></li>
            <li><img src={a} alt="" /></li>
            <li><img src={a} alt="" /></li>
            <li><img src={a} alt="" /></li>
          </ul>
          <p>Firmoo reviews Excellent 9.7 Our Customers Love Us <a href=""><img src={b} alt="" /></a>
          </p>
        </div>
        <div className='container'>
          <div className='col-lg-3 col-xs-12'><p><b>Firmoo</b> </p><ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Return&Exchange</li>
            <li>FAQ</li>
            <li>Shipping and Tracking</li>
            <li>Affiliate Program</li>
            <li>Terms and Conditions</li>
            <li>How to Order</li>
            <li>Privacy Policy</li>
            <li>Coupons</li>
            <li>Logistics Terms</li>
            <li>Clearance</li>
          </ul></div>
          <div className='col-lg-5 col-xs-12'> <p><b>Additional Resources</b> </p><ul>
            <li>YouTube Cooperation</li>
            <li>USA Optical&Eye Doctor</li>
            <li>Firmoo Answer</li>
            <li>Canada Optical &Eye Doctor</li>
            <li>Vision Library</li>
            <li>Australia Optical &Eye Doctor</li>
            <li>Free Glasses</li>
            <li>England Optical &Eye Doctor</li>
            <li>Blog</li>
            <li>France Optical &Eye Doctor</li>
            <li></li>
            <li>New Zealand Optical & Eye Doctor</li>
          </ul></div>
          <div className='col-lg-4 col-xs-12'><p><b>Specialty Eyewear</b>
          </p><ul>
              <li>Computer Glasses</li>
              <li>Fashion Eyeglasses</li>
              <li>Reading Glasses</li>
              <li>Prescription Sports glasses</li>
              <li>Retro & Vintage Eyeglasses</li>
              <li>Non Prescription Glasses</li>
              <li>Cat Eye Glasses</li>
              <li>Polarized Sunglasses</li>
              <li>Clear Glasses</li>
              <li>Kids' Glasses</li>
            </ul></div>

        </div>
        <div className='pay'>
          <img src={c} alt="" />
        </div>
        <div className='col-xs-12 cio'>
          <ul>
            <li className='cio2'></li>
            <li className='forbes'></li>
            <li className='entre'></li>
            <li className='engo'></li>
            <li className='tnw'></li>
            <li className='the_huffington'></li>
            <li className='inc'></li>
            <li className='business'></li>
          </ul>

        </div>
        <Divider style={{ height: 2 }} >Toll Free: 1-855-487-6006 | Email: service@firmoo.com</Divider>
         <p>Copyright © 2018 Firmoo Online Optical Store. <span className='right'>All Right Reserved.</span> </p>
      </div>


    );
  }
}

export default Footer;

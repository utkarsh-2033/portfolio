import React from 'react';
import { FaInstagram, FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const placeholder = '/src/assets/images/placeholder.png';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/src/assets/images/avatar-1.png" alt="Avatar Placeholder" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="utkarsh">Utkarsh Gupta</h1>
          <p className="title">Web developer</p>
        </div>
        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Details</span>
          </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              {/* Placeholder for ion-icon */}
              <span style={{display: 'inline-block', width: 20, height: 20, background: '#ccc', borderRadius: '50%'}}>
                <FaMailBulk />
              </span>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:richard@example.com" className="contact-link">utkarshg2033@gmail.com</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              {/* Placeholder for ion-icon */}
              <span style={{display: 'inline-block', width: 20, height: 20, background: '#ccc', borderRadius: '50%'}}>
                <FaPhone />
              </span>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+12133522795" className="contact-link">+91 8429723671</a>
            </div>
          </li>
          {/* <li className="contact-item">
            <div className="icon-box">
              
              <span style={{display: 'inline-block', width: 20, height: 20, background: '#ccc', borderRadius: '50%'}}>

              </span>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1982-06-23">March 20, 2005</time>
            </div>
          </li> */}
          <li className="contact-item">
            <div className="icon-box">
              <span style={{display: 'inline-block', width: 20, height: 20, background: '#ccc', borderRadius: '50%'}}>
                <FaLocationArrow />
              </span>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Noida , UP-201301 , India</address>
            </div>
          </li>
        </ul>
        <div className="separator"></div>
        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              {/* Placeholder for ion-icon */}
              <FaLinkedin />
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              {/* Placeholder for ion-icon */}
              <FaInstagram />

              {/* <span style={{display: 'inline-block', width: 20, height: 20, background: '#ccc', borderRadius: '50%'}}></span> */}
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              {/* Placeholder for ion-icon */}
              <FaFacebookSquare />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar; 
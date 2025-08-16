import React from 'react';
import { FaGithub, FaInstagram, FaLocationArrow, FaMailBulk, FaPhone, FaChevronDown, FaChevronUp, FaDownload } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

const Sidebar = ({ onSidebarToggle, sidebarActive }) => {
  return (
    <>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="assets/images/avatar-1.png" alt="Avatar Placeholder" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="utkarsh">Utkarsh Gupta</h1>
          <a href="https://drive.google.com/file/d/1Z1y-7pv0rHXquGxMUQz_hmYCx5b9aXIs/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="title">Resume <FaDownload/></a>
        </div>
        <button className="info_more-btn" onClick={onSidebarToggle} aria-label="Toggle sidebar details">
          <span style={{display: 'flex', alignItems: 'center'}}>
            {sidebarActive ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              {/* Placeholder for ion-icon */}
              <span style={{display: 'inline-block', width: 20, height: 20, borderRadius: '50%'}}>
                <MdEmail />
              </span>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href="mailto:utkarshg2033@gmail.com"
                className="contact-link"
              >
                utkarshg2033@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              {/* Placeholder for ion-icon */}
              <span style={{display: 'inline-block', width: 20, height: 20, borderRadius: '50%'}}>
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
              <time dateTime="1982-06-23"></time>
            </div>
          </li> */}
          <li className="contact-item">
            <div className="icon-box">
              <span style={{display: 'inline-block', width: 20, height: 20, borderRadius: '50%'}}>
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
            <a href="https://www.linkedin.com/in/utkarsh-kr-gupta-myprofile/" className="social-link">
              <FaLinkedin />
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.instagram.com/uttkarshh._?igsh=MTZpZWFhMnZnN2k3eQ==" className="social-link">
              <FaInstagram />

            </a>
          </li>
          <li className="social-item">
            <a href="https://github.com/utkarsh-2033" className="social-link">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar; 
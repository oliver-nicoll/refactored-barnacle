import React from 'react';
import './Footer.css';
import logo from '../../assets/nicoll/5.svg'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaLinkedin} from 'react-icons/fa'
import {FaTiktok} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'
import {FiYoutube} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>
      <img src={logo} height="150px" width="150px" alt="Nicoll Logo" />
      </a>
      

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="http://facebook.com/nicolldon" target="_blank"><FaFacebookF/></a>
        <a href="http://instagram.com/nicoll.oliver" target="_blank"><FiInstagram/></a>
        <a href="https://github.com/oliver-nicoll" target="_blank"><FiGithub/></a>
        <a href="http://linkedin.com/in/nicoll-oliver-975444204" target="_blank"><FaLinkedin/></a>
        <a href="http://twitter.com/designer7417" target="_blank"><FiTwitter/></a>
        <a href="http://youtube.com/channel/UCjlI2-qd8ogl-HqzMna_RnQ" target="_blank"><FiYoutube/></a>
        <a href="http://tiktok.com/@mommaoliver06?lang=en" target="_blank"><FaTiktok/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Made By: Nicoll Oliver. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer
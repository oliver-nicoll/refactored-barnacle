import React from 'react';
import CTA from './CTA';
import ME from '../../assets/nicoll/16 color nicoll.jpg'
import HeaderSocials from './HeaderSocials';
import './Header.css';

const Header = () => {

  return (
    <header>
      <div className="container header__container ">
        <h5>Hello I'm</h5>
        <h1> Nicoll Oliver</h1>
        <h5 className="text-light">Fullstack Developer | Designer | Drafter | Dreamer </h5>
        <CTA/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        <HeaderSocials/>
      </div>
    </header>
  )
}

export default Header;
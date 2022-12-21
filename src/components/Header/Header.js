import React from 'react';
import './Header.css'
import background from '../../assets/background.png'
import logo from '../../assets/Cognitive Mind Logo-01.png'

const Header = () => {
    return (
        <div>
    <div className="hero">
        <img src={background} alt="" />
  <div className="hero-content text-center">
    <div className="">
     <img className='logo-style' src={logo} alt="" />
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;
import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import './header.css';
import { default as CartBtn } from './cartIcon/cart';
import { default as ProfileBtn } from './perofileIcon/profile';
import { LogoNoBg } from '../../imgs/index';

class Header extends Component {
  render() {
    return (
      <header>
        <img src={LogoNoBg} alt="" className="logoImg" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <span className="NavBarBtns">
          <button className="">
            <CartBtn />
            Cart
          </button>
          <button className="">
            <ProfileBtn />
            Profile
          </button>
        </span>
      </header>
    );
  }
}

export default Header;

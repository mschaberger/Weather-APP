import React from 'react';
import Logo from '../img/Logoweather.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import {Link} from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-light">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
           W E A T H E R
        </span>
      </Link>
      <SearchBar 
        onSearch={onSearch}
      />
      <Link to='/about' className='navItem'>
        <span id='infoabout' className="navItem">ABOUT</span>
      </Link>
    </nav>
  );
};

export default Nav;

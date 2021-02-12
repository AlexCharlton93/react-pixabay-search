import React from 'react';
import './Navbar.scss';
import NavItems from '../navItems/NavItems';

const Navbar = () => {
  return (
    <div className="navBar">
      <img
        className="logo"
        alt="logo"
        // eslint-disable-next-line max-len
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Pixabay-logo-new.svg/1200px-Pixabay-logo-new.svg.png"
      />
      <NavItems />
    </div>
  )
}

export default Navbar;

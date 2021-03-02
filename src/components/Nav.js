import React from 'react';
import {Link} from 'react-router-dom';
import {StyledNav} from './styles/Nav';

function Nav() {
  return (
    <StyledNav className="nav-ctn">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </StyledNav>
  );
}

export default Nav;

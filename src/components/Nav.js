import React from 'react';
import {Link} from 'react-router-dom';
import {StyledNav} from './styles/Nav';

function Nav() {
  return (
    <StyledNav className="nav-ctn">
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/contac">contact</Link>
    </StyledNav>
  );
}

export default Nav;

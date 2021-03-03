import React, {Fragment} from 'react';
import {StyledFooter, Logo, Columns} from './styles/Footer';
import logo from '../images/logo.svg';

function Footer() {
  return (
    <Fragment>
      <Logo data={logo} type="image/svg+xml"></Logo>
      <StyledFooter>
        <Columns>
          <div className="column">
            <h2>Info</h2>
            <ul>
              <li> Phone: +57 301 245 32 46</li>
              <li> Mail: garciaarchitects@gmail.com</li>
              <li> FAX: 143-5634-0100</li>
            </ul>
          </div>
          <div className="column">
            <h2>professionals</h2>
            <ul>
              <li> Jesús García</li>
              <li> José Alvarés</li>
              <li> Brian Zuckerberg</li>
              <li> Kenay tonsom</li>
              <li> jorge smith</li>
            </ul>
          </div>
          <div className="column">
            <h2>directors</h2>
            <ul>
              <li> Jesús García</li>
              <li> Dayana Kardashian</li>
              <li> Kim hun Kang</li>
              <li> Robert Solnices</li>
            </ul>
          </div>
        </Columns>
      </StyledFooter>
    </Fragment>
  );
}

export default Footer;

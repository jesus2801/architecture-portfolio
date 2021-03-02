import React, {Fragment} from 'react';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import instagram from '../../images/instagram.png';
import {StyledBanner, BlueprintLines, InfoCtn, Logo, Social} from '../styles/Banner';

const Banner = ({title, circleText, description, logo}) => {
  return (
    <Fragment>
      <StyledBanner>
        <Logo data={logo} type="image/svg+xml" />
        <InfoCtn>
          <div className="circle">
            <p>{circleText}</p>
          </div>
          <div className="main">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </InfoCtn>
        <Social>
          <img src={facebook} alt="facebook logo" />
          <img src={instagram} alt="instagram logo" />
          <img src={twitter} alt="twitter logo" />
        </Social>
      </StyledBanner>
      <BlueprintLines>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        <div className="line4"></div>
        <div className="line5"></div>
      </BlueprintLines>
    </Fragment>
  );
};

export default Banner;

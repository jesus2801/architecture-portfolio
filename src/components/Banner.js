import React, {Fragment} from 'react';
import logo from '../images/logo.svg';
import {StyledBanner, BlueprintLines, InfoCtn, Logo} from './styles/Banner';

const Banner = ({title, circleText, description}) => {
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

import styled from 'styled-components';
import image from '../../images/banner.jpg';

//variables
const bannerHeight = '600px';
const circleSize = '130px';
const linesColor = 'rgba(255, 255, 255, .5)';

export const StyledBanner = styled.div`
  width: 100%;
  height: ${bannerHeight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 2;
  margin-bottom: 1000px;
`;

export const Social = styled.div`
  position: absolute;
  transform: translateY(150px);
  z-index: 5;
  img {
    width: 30px;
    cursor: pointer;
    margin: 0 15px;
    transition: transform 300ms ease;
    &:active {
      transform: scale(0.85);
    }
  }
`;

export const InfoCtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .main {
    width: 58%;
    p {
      font-weight: 300;
      color: #fff;
      margin: 25px 0 0 0;
      transform: translateX(-25px);
    }
    h1 {
      font-size: 40px;
      font-weight: 600;
      color: #fff;
      text-transform: uppercase;
    }
  }
  .circle {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${circleSize};
    min-width: ${circleSize};
    min-height: ${circleSize};
    height: ${circleSize};
    margin-right: 40px;
    border-radius: 50%;
    border: 1px solid #fff;
    padding: 4%;
    p {
      color: #fff;
      font-weight: 600;
      text-align: center;
      text-transform: capitalize;
      line-height: 25px;
    }
  }
  @media (max-width: 470px) {
    .main h1 {
      font-size: 30px;
    }
    .circle {
      width: ${parseInt(circleSize) - 14}px;
      min-width: ${parseInt(circleSize) - 14}px;
      min-height: ${parseInt(circleSize) - 14}px;
      height: ${parseInt(circleSize) - 14}px;
    }
  }
  @media (max-width: 410px) {
    .circle {
      display: none;
    }
    .main {
      width: 85%;
      h1 {
        text-align: center;
      }
      p {
        text-align: center;
        transform: translateX(0px);
      }
    }
  }
`;

export const BlueprintLines = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: ${bannerHeight};
  z-index: 1;
  .line1 {
    position: relative;
    top: 10%;
    width: 100%;
    height: 1px;
    background-color: ${linesColor};
    z-index: 1;
  }
  .line2 {
    position: relative;
    top: 20%;
    width: 100%;
    height: 1px;
    background-color: ${linesColor};
    z-index: 1;
  }
  .line3 {
    position: relative;
    left: 10%;
    height: ${bannerHeight};
    width: 1px;
    background-color: ${linesColor};
    z-index: 1;
  }
  .line4 {
    position: relative;
    top: -300px;
    width: 100%;
    height: 1px;
    background-color: ${linesColor};
    z-index: 1;
  }
  .line5 {
    position: absolute;
    top: 0px;
    right: 6%;
    width: 1px;
    height: ${bannerHeight};
    background-color: ${linesColor};
    z-index: 1;
  }
`;

export const Logo = styled.object`
  position: absolute;
  top: 10px;
  left: 15px;
  width: 26px;
`;

export const BannerImage = styled.object`
  width: 50%;
  z-index: 2;
`;

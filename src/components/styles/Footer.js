import styled from 'styled-components';
import {COLORS} from './variables';

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  width: 100%;
  padding: 80px 0 40px 0;
  background-color: ${COLORS.primaryColor};
  clip-path: polygon(0 0, 40% 0, 50% 10%, 60% 0, 100% 0, 100% 100%, 0 100%);
  z-index: 2;
  @media (max-width: 740px) {
    clip-path: polygon(0 0, 35% 0, 50% 6%, 65% 0, 100% 0, 100% 100%, 0 100%);
  }
`;

export const Logo = styled.object`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  margin: 50px auto 0 auto;
  width: 60px;
  padding: 12px;
  border-radius: 1000px;
  background-color: #141414;
  z-index: 3;
  @media (max-width: 740px) {
    width: 50px;
    padding: 12px;
  }
`;

export const Columns = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 30px;
  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 24px;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    ul {
      li {
        font-size: 16px;
      }
    }
  }
  @media (max-width: 930px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 730px) {
    grid-template-columns: repeat(1, 1fr);
    .column {
      h2 {
        font-size: 20px;
      }
      ul {
        li {
          font-size: 14px;
        }
      }
    }
  }
`;

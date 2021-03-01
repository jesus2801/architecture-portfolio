import styled from 'styled-components';
import {COLORS} from './variables';

export const StyledNav = styled.nav`
  position: fixed;
  top: 10px;
  right: 20px;
  z-index: 10;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 17px;
    margin: 0 10px;
    text-transform: capitalize;
    transition: color 300ms ease;
  }

  a:hover {
    color: ${COLORS.primaryColor};
  }

  a.selected {
    color: ${COLORS.primaryColor};
  }
`;

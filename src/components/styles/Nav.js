import styled from 'styled-components';
import {COLORS} from './variables';

export const StyledNav = styled.nav`
  position: fixed;
  top: 10px;
  right: 20px;
  background-color: #141414;
  padding: 6px 8px;
  border-radius: 1px;
  z-index: 10;
  transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
  &:hover {
    transform: translateX(-20px);
  }
  a {
    color: #fff;
    text-decoration: none;
    font-size: 17px;
    margin: 0 12px;
    transition: color 300ms ease;
  }

  a:hover {
    color: ${COLORS.primaryColor};
  }
`;

import React from 'react';
import styled from 'styled-components';
import {COLORS} from '../styles/variables';

function Project({name, desc, photo}) {
  const StyledProject = styled.div`
    background-color: #fff;
    border-radius: 2px;
    padding: 10px 10px 20px 10px;
    -webkit-box-shadow: 1px 1px 3px 0px rgba(189, 189, 189, 1);
    -moz-box-shadow: 1px 1px 3px 0px rgba(189, 189, 189, 1);
    box-shadow: 1px 1px 3px 0px rgba(189, 189, 189, 1);
    div {
      width: 100%;
      height: 200px;
      border-radius: 3px 3px 0 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      img {
        position: relative;
        width: 100%;
        transition: transform 300ms ease;
      }
      &:hover {
        img {
          transform: scale(1.2);
        }
      }
    }
    h2 {
      text-transform: uppercase;
      margin: 10px 0;
      &::after {
        margin-top: 6px;
        display: block;
        content: '';
        width: 40%;
        height: 6px;
        border-radius: 100px;
        background-color: ${COLORS.primaryColor};
      }
    }
    p {
      font-size: 14px;
    }
  `;
  return (
    <StyledProject>
      <div>
        <img src={photo} alt="" />
      </div>
      <h2>{name}</h2>
      <p>{desc}</p>
    </StyledProject>
  );
}

export default Project;

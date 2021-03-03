import styled from 'styled-components';
import {COLORS} from './variables';

export const ContactForm = styled.div`
  width: 90%;
  height: 391px;
  margin: 60px auto 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  -webkit-box-shadow: 1px 1px 3px 0px rgba(181, 181, 181, 1);
  -moz-box-shadow: 1px 1px 3px 0px rgba(181, 181, 181, 1);
  box-shadow: 1px 1px 3px 0px rgba(181, 181, 181, 1);
  .info-ctn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100%;
    min-height: max-content;
    background-color: ${COLORS.primaryColor};
    h1 {
      text-align: center;
      color: #fff;
      font-size: 44px;
      @media (max-width: 500px) {
        font-size: 30px;
      }
    }
    p {
      text-align: center;
      font-size: 18px;
      color: #fff;
    }
  }
  .form-ctn {
    width: 60%;
    background-color: #fff;
    padding: 30px 20px;
    .form-group {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin: 10px auto;
      label::after {
        content: '*';
        margin-left: 10px;
        color: #ff1818;
      }
      input {
        width: 100%;
        padding: 4px;
        font-size: 18px;
        border: none;
        outline: none;
        border-bottom: 1px solid #dfdfdf;
        transition: border-bottom 300ms ease;
        &:focus {
          border-bottom: 1px solid #2cb2ff;
        }
      }
    }
    button[type='submit'] {
      float: right;
      margin-top: 20px;
      border: none;
      border-radius: 2px;
      outline: none;
      padding: 5px 13px;
      font-size: 18px;
      font-weight: 600;
      color: #fff;
      background-color: ${COLORS.primaryColor};
      cursor: pointer;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    height: unset;
    .form-ctn {
      width: 100%;
    }
    .info-ctn {
      width: 100%;
      padding: 30px 20px;
    }
  }
`;

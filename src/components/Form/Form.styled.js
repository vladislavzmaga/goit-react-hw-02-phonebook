import styled from 'styled-components';

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLable = styled.label`
  position: relative;
  font-size: 16px;
  font-weight: bold;
  width: 250px;
  height: 20px;
  margin: 0 auto;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const FormInput = styled.input`
  position: absolute;
  margin-left: 5px;
  height: 14px;
  right: 0;
`;

export const FormButton = styled.button`
  background-color: blue;
  border: none;
  color: white;
  cursor: pointer;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  transition: transform 300ms;
  margin: 10px auto 0;
  :hover {
    transform: scale(1.1);
    background-color: blueviolet;
  }
`;

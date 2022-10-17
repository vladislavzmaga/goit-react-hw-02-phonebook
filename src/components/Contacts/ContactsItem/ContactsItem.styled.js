import styled from 'styled-components';

export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ContactsName = styled.p`
  font-weight: bold;
`;

export const ContactTel = styled.span`
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  color: green;
`;

export const DeleteBtn = styled.button`
  margin: auto 0;
  background-color: blue;
  border: none;
  color: white;
  cursor: pointer;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  transition: transform 300ms;

  :hover {
    transform: scale(1.1);
    background-color: blueviolet;
  }
`;

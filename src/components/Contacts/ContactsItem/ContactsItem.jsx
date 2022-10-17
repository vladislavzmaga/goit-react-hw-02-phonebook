import PropTypes from 'prop-types';

import {
  ContactsItem,
  ContactsName,
  ContactTel,
  DeleteBtn,
} from './ContactsItem.styled';

export const ContactsListItem = ({ name, number, id, deleteContact }) => {
  return (
    <ContactsItem>
      <ContactsName>{name}</ContactsName>
      <ContactTel>{number}</ContactTel>
      <DeleteBtn type="button" data-id={id} onClick={deleteContact}>
        delete
      </DeleteBtn>
    </ContactsItem>
  );
};

ContactsListItem.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

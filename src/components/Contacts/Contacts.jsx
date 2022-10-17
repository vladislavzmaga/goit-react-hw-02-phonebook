import PropTypes from 'prop-types';

import { ContactsListItem } from './ContactsItem/ContactsItem';
import { ContactList } from './Contacts.styled';
export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ContactList>
      {contacts.map(item => {
        const { name, number, id } = item;
        return (
          <ContactsListItem
            key={id}
            name={name}
            number={number}
            id={id}
            deleteContact={deleteContact}
          />
        );
      })}
    </ContactList>
  );
};

ContactsList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

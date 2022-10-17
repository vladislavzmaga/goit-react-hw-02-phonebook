import PropTypes from 'prop-types';

import { ContactsListItem } from './ContactsItem/ContactsItem';
import { ContactList } from './Contacts.styled';
export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ContactList>
      {contacts.map(item => {
        return (
          <ContactsListItem
            key={item.id}
            item={item}
            deleteContact={deleteContact}
          />
        );
      })}
    </ContactList>
  );
};

ContactsList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.object.isRequired,
};

import {
  ContactsItem,
  ContactsName,
  ContactTel,
  DeleteBtn,
} from './ContactsItem.styled';

export const ContactsListItem = ({ item, deleteContact }) => {
  return (
    <ContactsItem>
      <ContactsName>{item.name}</ContactsName>
      <ContactTel>{item.number}</ContactTel>
      <DeleteBtn type="button" data-id={item.id} onClick={deleteContact}>
        delete
      </DeleteBtn>
    </ContactsItem>
  );
};

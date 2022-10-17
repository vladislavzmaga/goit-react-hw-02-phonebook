import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Wrapper } from './Box/Box';
import { Section } from './Section/Section';
import { ContactsList } from './Contacts/Contacts';
import { Filter } from './Filter/filter';
import contacts from '../../src/contacts.json';

export class App extends Component {
  state = {
    contacts,
    filter: '',
  };

  addContact = contact => {
    contact.id = nanoid();
    this.setState(prevState => {
      let isContains = false;
      let updateContacts = [];
      prevState.contacts.forEach(({ name }) => {
        if (name.toLowerCase() === contact.name.toLowerCase()) {
          alert(`${name} is already in contacts`);
          isContains = true;
        }
      });
      isContains
        ? (updateContacts = [...prevState.contacts])
        : (updateContacts = [contact, ...prevState.contacts]);
      return {
        contacts: updateContacts,
      };
    });
  };

  searchByName = evt => {
    this.setState({ filter: evt.target.value });
  };

  deleteContact = evt => {
    const currentContact = evt.currentTarget.dataset.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== currentContact
      ),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Wrapper>
        <Section title={'Phonebook'}>
          <Form onSubmit={this.addContact} />
        </Section>
        <Section title={'Contacts'}>
          <Filter
            title={'Find contacts by name'}
            searchByName={this.searchByName}
          />
          <ContactsList
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </Section>
      </Wrapper>
    );
  }
}

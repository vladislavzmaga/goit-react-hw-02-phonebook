import React, { Component } from 'react';
import Notiflix from 'notiflix';
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

  componentDidMount() {
    const contactsString = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsString);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    contact.id = nanoid();
    this.setState(prevState => {
      let isContains = false;
      let updateContacts = [];
      prevState.contacts.forEach(({ name }) => {
        if (name.toLowerCase() === contact.name.toLowerCase()) {
          Notiflix.Report.failure(
            'Error',
            `${name} is already in contacts`,
            'close'
          );
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
        {this.state.contacts.length > 0 && (
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
        )}
      </Wrapper>
    );
  }
}

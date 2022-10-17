import PropTypes from 'prop-types';

import React, { Component } from 'react';

import { Forms, FormLable, FormInput, FormButton } from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  hundleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  hundleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <Forms onSubmit={this.hundleSubmit}>
        <FormLable>
          Name
          <FormInput
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.hundleChange}
          />
        </FormLable>
        <FormLable>
          Number
          <FormInput
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.hundleChange}
          />
        </FormLable>
        <FormButton type="submit">Save contact</FormButton>
      </Forms>
    );
  }
}
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

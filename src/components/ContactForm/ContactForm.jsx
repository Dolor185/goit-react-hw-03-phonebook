import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    return this.setState({
      [name]: value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.formSubmit(this.state);

    if (!this.props.contactСomparison(this.state.name)) {
      this.setState({
        name: '',
        number: '',
      });
    }
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Label>
          Name
          <Input
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            onChange={this.handleChange}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  formSubmit: PropTypes.func.isRequired,
  contactСomparison: PropTypes.func.isRequired,
};

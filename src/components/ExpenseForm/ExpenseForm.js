import React, { Component } from 'react';
import shortId from 'shortid';
import PropTypes from 'prop-types';
import Form from '../Shared/Form';
import Label from '../Shared/Label';
import Input from '../Shared/Input';
import Button from '../Shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

export default class ExpenseForm extends Component {
  state = {
    name: '',
    amount: 0,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newExpenses = {
      id: shortId.generate(),
      name: this.state.name,
      amount: Number(this.state.amount),
    };
    this.props.setExpenses(newExpenses);
    this.setState({ name: '', amount: 0 });
  };

  render() {
    const { amount, name } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}

ExpenseForm.propTypes = {
  setExpenses: PropTypes.func.isRequired,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../Shared/Form';
import Label from '../Shared/Label';
import Input from '../Shared/Input';
import Button from '../Shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

export class BudgetForm extends Component {
  state = { budget: 0 };

  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.setBudgest(Number(this.state.budget));
    this.setState({ budget: 0 });
  };

  render() {
    const { budget } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input type="number" value={budget} onChange={this.handleChange} />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}

BudgetForm.propTypes = {
  setBudgest: PropTypes.func.isRequired,
};

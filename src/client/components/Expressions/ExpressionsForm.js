
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ExpressionModel from '../../containers/Expressions/model';

class ExpressionsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 0
    };

    this.quantityChanged = this.quantityChanged.bind(this);
    this.formSubmited = this.formSubmited.bind(this);
  }

  componentDidMount() {
    const lastState = localStorage.getItem('last-expression');
    if (lastState !== null) {
      this.setState({ quantity: Number(lastState) });
    }
  }

  quantityChanged(event) {
    this.setState({ quantity: event.target.value });
  }

  formSubmited(event) {
    this.props.createEntry(new ExpressionModel(this.state.quantity));
    localStorage.setItem('last-expression', this.state.quantity);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.formSubmited}>
        <input type="number" name="quantity" min="0" step="1" value={this.state.quantity} onChange={this.quantityChanged} />
        <button type="submit">Save</button>
      </form>
    );
  }
}

ExpressionsForm.propTypes = {
  createEntry: PropTypes.func.isRequired
};

export default ExpressionsForm;

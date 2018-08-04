
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { createEntry } from './reducer';

import ExpressionsForm from '../../components/Expressions/ExpressionsForm';
import ExpressionsLog from '../../components/Expressions/ExpressionsLog';

const Expressions = props => (
  <Fragment>
    <header>
      <h2>Expressions</h2>
    </header>
    <ExpressionsForm {...props} />
    <ExpressionsLog {...props} />
  </Fragment>
);

const mapStateToProps = state => ({
  entries: state.expressions.entries
});

const mapDispatchToProps = {
  createEntry,
};

const ExpressionsContainer = connect(mapStateToProps, mapDispatchToProps)(Expressions);

export default ExpressionsContainer;

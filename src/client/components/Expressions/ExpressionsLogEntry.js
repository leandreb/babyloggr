
import React from 'react';
import PropTypes from 'prop-types';

const ExpressionsLogEntry = ({ timestamp, quantity }) => (
  <li>Date: {timestamp}<br />Quantity: {quantity} mL</li>
);

ExpressionsLogEntry.propTypes = {
  timestamp: PropTypes.instanceOf(Date).isRequired,
  quantity: PropTypes.number.isRequired
};

export default ExpressionsLogEntry;

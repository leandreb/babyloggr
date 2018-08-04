
import React from 'react';
import PropTypes from 'prop-types';

import ExpressionsLogEntry from './ExpressionsLogEntry';

const ExpressionsLog = ({ entries }) => (
  <ul>
    {entries.map(entry => <ExpressionsLogEntry key={entry.id} {...entry} />)}
  </ul>
);

ExpressionsLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ExpressionsLog;

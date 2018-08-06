
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { HeaderButton } from './AppHeaderButton.styles';

// component
const AppHeaderButton = props => (
  <HeaderButton className={props.isActive ? 'active' : ''} onClick={props.onClick}>
    <FontAwesomeIcon icon={props.isActive ? props.activeIcon : props.defaultIcon} size="lg" fixedWidth />
  </HeaderButton>
);

AppHeaderButton.propTypes = {
  isActive: PropTypes.bool,
  defaultIcon: PropTypes.string.isRequired,
  activeIcon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

AppHeaderButton.defaultProps = {
  isActive: false
};

export default AppHeaderButton;

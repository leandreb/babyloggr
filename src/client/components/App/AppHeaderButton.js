
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import common from '../../styles/common';

// styles
const css = {
  size: {
    small: '3.2em',
    medium: '4em'
  },
  palette: {
    bgColor: common.palette.primaryDark,
    bgColorActive: common.palette.primaryDarker,
    textColor: common.palette.white
  }
};

const HeaderButton = styled.button`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 0;
  background-color: ${css.palette.bgColor};
  color: ${css.palette.textColor};

  &:active, &.active {
    background-color: ${css.palette.bgColorActive}
  }
`;

// component
class AppHeaderButton extends Component {
  state = {
    isActive: this.props.isActive ? true : false
  }

  toggleActive = () => {
    const toggled = !this.state.isActive;
    this.setState({ isActive: toggled })
    this.props.onClick(toggled);
  }

  render() {
    return (
      <HeaderButton className={this.state.isActive ? 'active' : ''} onClick={this.toggleActive}>
        <FontAwesomeIcon icon={this.state.isActive ? this.props.activeIcon : this.props.defaultIcon} size="lg" fixedWidth />
      </HeaderButton>
    );
  };
}

AppHeaderButton.propTypes = {
  isActive: PropTypes.bool,
  defaultIcon: PropTypes.string.isRequired,
  activeIcon: PropTypes.string.isRequired
};

AppHeaderButton.defaultProps = {
  isActive: false
};

export default AppHeaderButton;

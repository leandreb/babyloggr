
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import common, { textShadowMixin } from '../../styles/common';

import AppHeaderButton from './AppHeaderButton';

// css
const css = {
  size: {
    small: '3.2em',
    medium: '4em'
  },
  palette: {
    bgColor: common.palette.primary,
    buttonColor: common.palette.primaryDark,
    buttonActiveColor: common.palette.primaryDarker,
    textColor: common.palette.white,
    textShadow: common.palette.primaryDarker
  },
  font: {
    title: common.font.sans
  }
};

const ContainerRow = styled.header`
  position: fixed;
  width: 100%;
`;

const WrapperRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${css.size.small};
  background-color: ${css.palette.bgColor};

  nav {
    width: ${css.size.small};
    height: ${css.size.small};
  }
`;

const HeaderTitle = styled.h1`
  margin: 0;
  color: ${css.palette.textColor};
  font-size: 1.4em;
  ${textShadowMixin(css.palette.textShadow)}
  letter-spacing: -.05em;
`;

// component
class AppHeader extends Component {
  state = {
    isMenuOpened: false
  }

  onClick = isActive => {
    this.setState({ isMenuOpened: isActive });
  }

  render() {
    return (
      <ContainerRow>
        <WrapperRow>
          <nav>
            <AppHeaderButton defaultIcon="bars" activeIcon="times" onClick={this.onClick} />
          </nav>
          <HeaderTitle>babyloggr</HeaderTitle>
          <nav>&nbsp;</nav>
        </WrapperRow>
        {this.state.isMenuOpened ? (
          <nav>
            <NavLink to="/">Dashboard</NavLink><br />
            <NavLink to="/expressions">Expressions</NavLink><br />
            <NavLink to="/diapers">Diapers</NavLink>
          </nav>
        ) : null}
      </ContainerRow>
    );
  }
}

export default AppHeader;

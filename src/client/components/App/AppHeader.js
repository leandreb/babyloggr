
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { ContainerRow, WrapperRow, HeaderTitle } from './AppHeader.styles';
import AppHeaderButton from './AppHeaderButton';

class AppHeader extends Component {
  state = {
    isMenuOpened: false
  }

  onClick = () => {
    this.setState(prevState => ({ isMenuOpened: !prevState.isMenuOpened }));
  }

  render() {
    return (
      <ContainerRow>
        <WrapperRow>
          <nav>
            <AppHeaderButton defaultIcon="bars" activeIcon="times" isActive={this.state.isMenuOpened} onClick={this.onClick} />
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


import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import commonCss from '../../styles/global';
// import { NavLink } from 'react-router-dom';

const css = Object.assign({}, commonCss, {
  size: {
    small: '3.2em',
    medium: '4em'
  },
  palette: {
    bgColor: 'rgba(242, 149, 121, 1)',
    buttonColor: 'rgba(219, 109, 99, 1)',
    textColor: 'rgba(255, 255, 255, 1)',
    textShadow: 'rgba(0, 0, 0, .25)'
  },
  font: {
    title: 'Arial'
  }
});

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
`;

const TitleColumn = styled.h1`
  margin: 0;
  color: ${css.palette.textColor};
  font-size: 1.4em;
  letter-spacing: -.05em;
  text-shadow: 2px 2px 0 ${css.palette.textShadow};
`;

const ButtonColumn = styled.nav`
  width: ${css.size.small};
  height: ${css.size.small};

  button {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: 0;
    background-color: ${css.palette.buttonColor};
    color: ${css.palette.textColor};
  }
`;

const AppHeader = () => (
  <ContainerRow>
    <WrapperRow>
      <ButtonColumn>
        <button type="button">
          <FontAwesomeIcon icon="bars" size="lg" fixedWidth />
        </button>
      </ButtonColumn>
      <TitleColumn>babyloggr</TitleColumn>
      <ButtonColumn />
    </WrapperRow>
  </ContainerRow>
);

export default AppHeader;

/*
      <NavLink to="/">Dashboard</NavLink> |
      <NavLink to="/expressions">Expressions</NavLink> |
      <NavLink to="/diapers">Diapers</NavLink>
*/

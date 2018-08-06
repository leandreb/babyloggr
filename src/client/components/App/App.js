
import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';

import common from '../../styles/common';

import AppHeader from './AppHeader';

import Dashboard from '../Dashboard/Dashboard';
import ExpressionsContainer from '../../containers/Expressions/index';
import Diapers from '../Diapers/Diapers';

const MainSection = styled.section`
  padding: 1em;
  margin-top: ${common.size.header.small};
`;

const App = () => (
  <BrowserRouter>
    <Fragment>
      <AppHeader />
      <MainSection>
        <Route path="/" exact component={Dashboard} />
        <Route path="/expressions" component={ExpressionsContainer} />
        <Route path="/diapers" component={Diapers} />
      </MainSection>
    </Fragment>
  </BrowserRouter>
);

export default App;


import React, { Fragment } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';
import ExpressionsContainer from '../../containers/Expressions/index';
import Diapers from '../Diapers/Diapers';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <header>
        <h1>Baby Logger</h1>
        <nav>
          <NavLink to="/">Dashboard</NavLink> |
          <NavLink to="/expressions">Expressions</NavLink> |
          <NavLink to="/diapers">Diapers</NavLink>
        </nav>
      </header>
      <section>
        <Route path="/" exact component={Dashboard} />
        <Route path="/expressions" component={ExpressionsContainer} />
        <Route path="/diapers" component={Diapers} />
      </section>
    </Fragment>
  </BrowserRouter>
);

export default App;

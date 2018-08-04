
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import initFontAwesomeLibrary from './styles/fontAwesome';

import App from './components/App/App';

initFontAwesomeLibrary();

// componentDidMount() {
//   fetch('/api/expressions/getAll')
//     .then(res => res.json())
//     .then(user => this.setState({ username: user.username }));
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

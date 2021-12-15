import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyles'
import Tyopgraphy from './styles/Typography'

ReactDOM.render(
  <>
    <GlobalStyles/>
    <Tyopgraphy/>
    <App />
  </>,
  
  document.getElementById('root')
);

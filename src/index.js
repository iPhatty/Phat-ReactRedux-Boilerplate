// Core modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
// Css
import './style/style.css';
// React Redux components
import App from './components/app';
import Root from './store/root';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('.root')
);

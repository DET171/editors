import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'highlight.js/styles/github.css';
import 'semantic-ui-css/semantic.min.css'

import { Container } from 'semantic-ui-react'
import Main from './pages/App';
import Showdown from './pages/markdown/App';
import reportWebVitals from './reportWebVitals';
import { version } from '../package.json';

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Main />
      <Showdown />
      <hr />
      <p>App version { version }</p>
    </Container>
  </React.StrictMode>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

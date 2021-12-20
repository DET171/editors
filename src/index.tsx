import { StrictMode } from 'react';
import { render } from 'react-dom';
import './index.css';
import 'highlight.js/styles/github.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import Main from './pages/App';
import Markdown from './pages/markdown/App';
import CSV from './pages/csv/App';
import HTML from './pages/html/App';
import reportWebVitals from './reportWebVitals';
import { version } from '../package.json';

render(
  <StrictMode>
    <Container>
      <Main />
      <Markdown />
      <hr />
      <CSV />
      <hr />
      <HTML />
      <hr />
      <p>App version { version }</p>
    </Container>
  </StrictMode>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

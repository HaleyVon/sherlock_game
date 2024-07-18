import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './app';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
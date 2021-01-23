import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator/Calculator';

ReactDOM.render(
  <div>
    <h1>Calculadora</h1>
    <React.StrictMode>
      <Calculator />
    </React.StrictMode>
  </div>,
  document.getElementById('root')
);
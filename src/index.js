import React from 'react';
import ReactDOM from 'react-dom/client';
import ParentApp from './ParentApp';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParentApp />
  </React.StrictMode>
);

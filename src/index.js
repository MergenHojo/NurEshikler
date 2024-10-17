// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // 'react-dom/client' kütüphanesinden import edin
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot kullanarak root oluşturun

root.render(
  <React.StrictMode>

    <App />

  </React.StrictMode>
);

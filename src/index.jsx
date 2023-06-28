import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import house context
import HouseContextProvider from './components/HouseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HouseContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </HouseContextProvider>
);

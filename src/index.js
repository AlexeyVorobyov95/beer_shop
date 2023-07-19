import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter basename="/beer_shop">
    <App />
  </BrowserRouter>
  
);

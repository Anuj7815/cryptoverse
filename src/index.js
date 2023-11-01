import React from "react";
// import ReactDOM  from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'; 
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import App from './App';

import store from "./app/store";
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css'

ReactDOM.render(
  //Thêm router để fix thg switch 
  <Router>
      <Provider store={store}>
        <App />
      </ Provider>
  </Router>,
  document.getElementById('root')
);


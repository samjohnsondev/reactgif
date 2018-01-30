import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
require('dotenv').config({path: 'variables.env'});

ReactDOM.render(<App />, document.getElementById('root'));

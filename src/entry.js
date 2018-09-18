import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import './entry.less';
import Routes from './routers/index'

ReactDOM.render(
  <Routes />,
  document.getElementById('root'),
);
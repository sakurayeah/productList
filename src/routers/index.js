import { HashRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';
import MenuBar from '../components/menuBar/menuBar';
import Home from '../components/home/home';
import Product from '../components/product/product';
import Login from '../components/login/login';

const store = createStore(reducer, applyMiddleware(thunk));

const Routes = () =>
  <Provider store={store}>
    <HashRouter>
      <MenuBar>
        <Route path="/" exact component={Home} />
        <Route path="/product" exact component={Product} />
        <Route path="/login" exact component={Login} />
      </MenuBar>
    </HashRouter>
  </Provider>;

export default Routes;
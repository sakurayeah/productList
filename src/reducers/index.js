import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import productReducer from './productReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  home: homeReducer,
  product: productReducer,
  login: loginReducer,
});

export default rootReducer;
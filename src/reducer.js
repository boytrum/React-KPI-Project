import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import categoryList from './reducers/categoryList';
import productList from './reducers/productList';


export default combineReducers({
  categoryList,
  productList,
  router: routerReducer
});

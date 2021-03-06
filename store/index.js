import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools, devToolsEnhancer} from 'redux-devtools-extension';
import {cartReducer} from './reducers/cartReducer';
import {ProductReducers} from './reducers/ProductReducer';

const reducers = combineReducers({
  products: ProductReducers,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default store;

// import {createStore, combineReducers, applyMiddleware} from 'redux';
//

// const rootReducer = combineReducers({
//   product: productCartReducer,
// });

// export const store = createStore(rootReducer);

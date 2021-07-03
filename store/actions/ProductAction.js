import axios from 'axios';
import baseURL from '../../assets/apiConfig/baseURL';
import {
  CATEGORY_LOADING,
  GET_CATEGORY,
  GET_CATEGORY_FAILED,
  GET_PRODUCTS,
  GET_PRODUCTS_FAILED,
  PRODUCT_LOADING,
} from '../Type';

export const Getproducts = () => {
  return dispatch => {
    dispatch(setProductLoading());
    axios({method: 'get', url: `${baseURL}products`})
      .then(res => {
        console.log('res', res);

        dispatch({type: GET_PRODUCTS, payload: res.data});
      })
      .catch(err => {
        console.log('err', err);
        dispatch({type: GET_PRODUCTS_FAILED, errors: err});
      });
  };
};

export const GetCategory = () => {
  return dispatch => {
    dispatch({type: CATEGORY_LOADING});
    axios({method: 'get', url: `${baseURL}categories`})
      .then(res => {
        console.log('res', res);

        dispatch({type: GET_CATEGORY, payload: res.data});
      })

      .catch(err => {
        console.log('err', err);
        dispatch({type: GET_CATEGORY_FAILED, errors: err});
      });
  };
};

// export const ADD_TO_CART = "ADD_TO_CART";
// export const REMOVE_CART = "REMOVE_CART";
// export const SUBTRACT_QTY = "SUBTRACT_QTY";
// export const ADD_QTY = "ADD_QTY";

// export const addToCart = (id) => {
//   console.log("comming")
//   return {
//     type: ADD_TO_CART,
//     id
//   };
// };

// export const removeCart = (id) => {
//   return {
//     type: REMOVE_CART,
//     id
//   };
// };

// export const subtractQty = (id) => {
//   return {
//     type: SUBTRACT_QTY,
//     id
//   };
// };

// export const addQty = (id) => {
//   return {
//     type: ADD_QTY,
//     id
//   };
// };

// export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// export const addToCart = product => {
//   return { type: ADD_TO_CART, product: product };
// };

export const setProductLoading = () => {
  return {
    type: PRODUCT_LOADING,
  };
};

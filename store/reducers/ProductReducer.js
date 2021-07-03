import {
  PRODUCT_LOADING,
  GET_PRODUCTS,
  GET_PRODUCTS_FAILED,
  CATEGORY_LOADING,
  GET_CATEGORY,
  GET_CATEGORY_FAILED,
} from '../Type';
const initState = {
  items: [],
  category: [],
  loading: false,
  errors: {},
};

export const ProductReducers = (state = initState, action) => {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
        errors: null,
      };

    case GET_PRODUCTS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        errors: null,
      };
    case GET_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.errors,
      };
    case CATEGORY_LOADING:
      return {
        ...state,
        loading: false,
      };

    case GET_CATEGORY:
      return {
        ...state,
        loading: false,
        category: action.payload,
        errors: null,
      };

    case GET_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.errors,
      };
    default:
      return state;
  }
};

import {
  PRODUCT_LOADING,
  GET_PRODUCTS,
  GET_PRODUCTS_FAILED,
  CATEGORY_LOADING,
  GET_CATEGORY,
  GET_CATEGORY_FAILED,
  ADD_TO_CART,
  REMOVE_CART,
  SUBTRACT_QTY,
  ADD_QTY,
} from '../Type';

import {banner} from '../../Data/Data';
const initState = {
  banner,
  items: [],
  category: [],
  loading: false,
  errors: {},
  //
  addedItems: [],
  total: 0,
  isAdded: false,
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

    case ADD_TO_CART:
      console.log('action.id', action.id);
      let addedItem = state.items.find(item => item.id === action.id);
      console.log('addedItem', addedItem);
      let existed_item = state.addedItems.find(item => action.id === item.id);

      if (existed_item) {
        addedItem.quantity += 1;

        return {
          ...state,
          total: state.total + addedItem.price,
        };
      } else {
        addedItem.quantity = 1;

        let newTotal = state.total + addedItem.price;

        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
        };
      }

    case ADD_QTY:
      let addedItems = state.items.find(item => item.id === action.id);
      console.log(addedItems);
      addedItems.quantity += 1;
      let newTotal = state.total + addedItems.price;
      return {
        ...state,
        total: newTotal,
      };

    case SUBTRACT_QTY:
      let addedItemsub = state.items.find(item => item.id === action.id);

      //if the qt == 0 then it should be removed
      if (addedItemsub.quantity === 1) {
        let new_items = state.addedItems.filter(item => item.id !== action.id);
        let newTotal = state.total - addedItemsub.price;
        return {
          ...state,
          addedItems: new_items,
          total: newTotal,
        };
      } else {
        addedItemsub.quantity -= 1;
        let newTotal = state.total - addedItemsub.price;
        return {
          ...state,
          total: newTotal,
        };
      }

    case REMOVE_CART:
      let itemToRemove = state.addedItems.find(item => action.id === item.id);
      let new_items = state.addedItems.filter(item => action.id !== item.id);

      //calculating the total
      let newTotalreomve =
        state.total - itemToRemove.price * itemToRemove.quantity;

      return {
        ...state,
        items: state.items,
        addedItems: new_items,
        total: newTotalreomve,
      };
    default:
      return state;
  }
};

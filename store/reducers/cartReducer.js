import {
  ADD_TO_CART,
  REMOVE_CART,
  SUBTRACT_QTY,
  ADD_QTY,
} from '../actions/cartAction';

import {banner, categories, products} from '../../Data/Data';

const instailState = {
  
  banner,
  addedItems: [],
  total: 0,
  isAdded: false,
};

export const cartReducer = (state = instailState, action) => {
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.id === action.id);

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
  }
  if (action.type === REMOVE_CART) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    return {
      ...state,
      items: state.items,
      addedItems: new_items,
      total: newTotal,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QTY) {
    let addedItem = state.items.find(item => item.id === action.id);

    console.log(addedItem);

    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === SUBTRACT_QTY) {
    let addedItem = state.items.find(item => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }

  if (action.type === 'IF_ADDED') {
    let existed_item = state.addedItems.find(item => action.id === item.id);
    if (existed_item) {
      return {
        ...state,
        isAdded: true,
      };
    }
  }

  if (action.type === 'ADD_SHIPPING') {
    return {
      ...state,
      total: state.total + 6,
    };
  }

  if (action.type === 'SUB_SHIPPING') {
    return {
      ...state,
      total: state.total - 6,
    };
  } else {
    return state;
  }
};

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_CART = 'REMOVE_CART';
export const SUBTRACT_QTY = 'SUBTRACT_QTY';
export const ADD_QTY = 'ADD_QTY';

export const addToCart = id => {
  console.log('comming');
  return {
    type: ADD_TO_CART,
    id,
  };
};

export const removeCart = id => {
  return {
    type: REMOVE_CART,
    id,
  };
};

export const subtractQty = id => {
  return {
    type: SUBTRACT_QTY,
    id,
  };
};

export const addQty = id => {
  return {
    type: ADD_QTY,
    id,
  };
};

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


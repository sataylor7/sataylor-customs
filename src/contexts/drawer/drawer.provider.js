import React, { useReducer, createContext } from 'react';
export const DrawerContext = createContext({ state: {}, dispatch: {}});

const INITIAL_STATE = {
  showCart: false,
  showCheckout: false,
  menu: false,
  open: false,
  item: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_CART_VIEW':
      return {
        ...state,
        showCart: action.payload.showCart,
        showCheckout: false,
      };
    case 'TOGGLE_CHECKOUT_VIEW':
      return {
        ...state,
        showCart: false,
        showCheckout: action.payload.showCheckout,
      };
    case 'SLIDE_CART':
      return {
        ...state,
        open: action.payload.open,
      };
    case 'OPEN_MENU':
      return {
        ...state,
        menu: action.payload.menu,
      };
    default:
      return INITIAL_STATE;
  }
}

export const DrawerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <DrawerContext.Provider value={{ state, dispatch }}>
      {children}
    </DrawerContext.Provider>
  );
};

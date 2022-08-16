import React, { useContext } from 'react';
import { DrawerContext } from '@contexts/drawer/drawer.provider';
// import Cart from './views/cart';
// import Checkout from './views/checkout';
import DrawerMenu from './views/menus';

// export const CartDrawer = () => {
//   const { state, dispatch } = useContext(DrawerContext);
//   const handleClose = () =>
//     dispatch({
//       type: 'SLIDE_CART',
//       payload: {
//         open: false,
//       },
//     });

//   const drawerComponent = (state) => {


//     if (state?.showCart === true) {
//       return <Cart />;
//     }

//     if (state?.showCheckout === true) {
//       return <Checkout />;
//     }

//     return <Cart />;
//   };

//   return (
//     <>
//       {state?.open === true ? (
//         <div className='overlay' role='button' onClick={handleClose} />
//       ) : (
//         ''
//       )}
//       <div
//         className={`drawer drawer-cart ${state?.open === true ? 'open' : ''}`}>
//         {drawerComponent(state)}
//       </div>
//     </>
//   );
// };

export const Drawer = () => {
  const { state, dispatch } = useContext(DrawerContext);
  const handleClose = () =>
    dispatch({
      type: 'OPEN_MENU',
      payload: {
        menu: false,
      },
    });

  return (
    <>
      {state?.menu === true ? (
        <div
          className='overlay overlay-menu'
          role='button'
          onClick={handleClose}
        />
      ) : (
        ''
      )}
      <div
        className={`drawer drawer-menu ${state?.menu === true ? 'open' : ''}`}>
        <DrawerMenu />
      </div>
    </>
  );
};

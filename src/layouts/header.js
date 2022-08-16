import { useContext, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// import PhoneIcon from 'assets/icons/phone';
import CartIcon from '@assets/icons/cart.icon';
import Logo from '@components/logo';
// import Search from 'components/search-outline';
import { DrawerContext } from '@contexts/drawer/drawer.provider';
// import { StickyContext } from 'contexts/sticky/sticky.provider';
// import { useCart } from 'contexts/cart/cart.provider';
import { useMedia } from '@helpers/use-media';


export default function Header() {
  const router = useRouter();
  const isLargeScreen = useMedia('(min-width: 1024px)');
  const { dispatch } = useContext(DrawerContext);
//   const {
//     state: { isSticky },
//   } = useContext(StickyContext);
//   const { itemsCount } = useCart();

  const showMenu = () => {
    dispatch({
      type: 'OPEN_MENU',
      payload: {
        menu: true,
      },
    });
  };

//   const showCart = () => {
//     dispatch({
//       type: 'SLIDE_CART',
//       payload: {
//         open: true,
//       },
//     });
//     dispatch({
//       type: 'TOGGLE_CART_VIEW',
//       payload: {
//         showCart: true,
//       },
//     });
//   };

  const isHome = router.pathname === '/';

  return (
    <header className='flex items-center text-white body-font fixed bg-slate-900 w-full h-90px z-20 pr-20px md:pr-30px lg:pr-40px'>
      <button
        aria-label='Menu'
        className='menuBtn flex flex-col items-center justify-center w-50px flex-shrink-0 h-full outline-none focus:outline-none lg:w-90px'
        onClick={showMenu}>
        <span className='menuIcon'>
          <span className='bar' />
          <span className='bar' />
          <span className='bar' />
        </span>
      </button>
      <Logo className='hidden ml-10 lg:mr-auto lg:flex' />

      <a className='relative text-white hover:text-gray-200 mx-4' href='#'>
        <svg
          className='h-5 w-5'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'>
          <circle fill='none' cx='12' cy='7' r='3' />
          <path
            fill='currentColor'
            stroke='none'
            strokeWidth='1'
            d='M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z'
          />
        </svg>
      </a>

      <button
        className='flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none hover:text-gray-200'
        onClick={() => console.log('clicked')}
        aria-label='cart-button'>
        <CartIcon width='20px' height='22px' />
        <span
          className='w-18px h-18px flex items-center justify-center bg-gray-900 text-white absolute rounded-full'
          style={{ fontSize: '10px', top: '-10px', right: '-10px' }}>
          {/* {itemsCount} */}
        </span>
      </button>
    </header>
  );
}

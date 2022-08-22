import { useContext } from 'react';
import ArrowLeft from '@assets/icons/arrow-left.icon';
import { Scrollbar } from '@components/scrollbar';
import { useCart } from '@contexts/cart/cart.provider';
import { DrawerContext } from '@contexts/drawer/drawer.provider';
import { formatNumber } from '@helpers/currency';
// import { CURRENCY } from 'helpers/constants';
// import CurrencyFormat from 'react-currency-format';

export default function Cart() {
  const { dispatch } = useContext(DrawerContext);

  const { items, calculatePrice } = useCart();

  const showCheckout = () => {
    dispatch({
      type: 'TOGGLE_CHECKOUT_VIEW',
      payload: {
        showCheckout: true,
      },
    });
  };

  const hideCart = () => {
    dispatch({
      type: 'SLIDE_CART',
      payload: {
        open: false,
      },
    });
  };

  console.log('items in cart', items )

  return (
    <div className='flex flex-col w-full h-full'>
      {items.length ? (
        <>
          <div className='w-full flex justify-center flex-shrink-0 relative px-30px py-20px border-b border-gray-200'>
            <button
              className='w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half -mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900'
              onClick={hideCart}
              aria-label='close'>
              <ArrowLeft />
            </button>

            <h2 className='font-bold text-24px m-0'>Your Basket</h2>
          </div>

          <Scrollbar className='cart-scrollbar flex-grow'>
            <ul role='list' className='p-30px divide-y divide-gray-200'>
              {items.map((product) => (
                <li key={product.id} className='flex py-6'>
                  <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                    <img
                      src={product.images[0].src}
                      alt={product.images[0].alt}
                      className='h-full w-full object-cover object-center'
                    />
                  </div>

                  <div className='ml-4 flex flex-1 flex-col'>
                    <div>
                      <div className='flex justify-between text-base font-medium text-gray-900'>
                        <h3>
                          <a href={product.href}> {product.name} </a>
                        </h3>
                        <p className='ml-4'>{product.price}</p>
                      </div>
                      <p className='mt-1 text-sm text-gray-500'>
                        {product.color}
                      </p>
                    </div>
                    <div className='flex flex-1 items-end justify-between text-sm'>
                      <p className='text-gray-500'>Qty {product.quantity}</p>

                      <div className='flex'>
                        <button
                          type='button'
                          className='font-medium text-cyan-600 hover:text-cyan-500'>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Scrollbar>
        </>
      ) : (
        <div> you have no items in your basket </div>
      )}

      <div className='flex flex-col flex-shrink-0 p-30px'>
        <div className='flex items-center justify-between mb-20px'>
          <span className='font-semibold text-gray-900'>
            Subtotal &nbsp;
            <span className='font-normal text-gray-700 text-13px'>
              (Incl. VAT)
            </span>
          </span>

          <span className='font-semibold text-18px text-gray-900'>
            {formatNumber({
              q: calculatePrice(),
              locale: 'en-US',
              currency: 'USD',
            })}
          </span>
        </div>
        <p className='mt-0.5 text-sm text-gray-500'>
          Shipping and taxes calculated at checkout.
        </p>
        <div className='mt-6'>
          <a
            href='#'
            className='flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-700'>
            Checkout
          </a>
        </div>
        <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
          <p>
            or{' '}
            <button
              type='button'
              className='font-medium text-cyan-600 hover:text-cyan-500'
              disabled={items.length ? false : true}
              onClick={hideCart}>
              Continue Shopping<span aria-hidden='true'> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
  {/* <div className='flex flex-col w-full h-full'>
      {items.length ? (
        <>
          <div className='w-full flex justify-center flex-shrink-0 relative px-30px py-20px border-b border-gray-200'>
            <button
              className='w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half -mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900'
              onClick={hideCart}
              aria-label='close'>
              <ArrowLeft />
            </button>

            <h2 className='font-bold text-24px m-0'>Your Basket</h2>
          </div>

          <Scrollbar className='cart-scrollbar flex-grow'>
            <ul role='list' className='-my-6 divide-y divide-gray-200'>
              {items.map((product) => (
                <li key={product.id} className='flex py-6'>
                  <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className='h-full w-full object-cover object-center'
                    />
                  </div>

                  <div className='ml-4 flex flex-1 flex-col'>
                    <div>
                      <div className='flex justify-between text-base font-medium text-gray-900'>
                        <h3>
                          <a href={product.href}> {product.name} </a>
                        </h3>
                        <p className='ml-4'>{product.price}</p>
                      </div>
                      <p className='mt-1 text-sm text-gray-500'>
                        {product.color}
                      </p>
                    </div>
                    <div className='flex flex-1 items-end justify-between text-sm'>
                      <p className='text-gray-500'>Qty {product.quantity}</p>

                      <div className='flex'>
                        <button
                          type='button'
                          className='font-medium text-indigo-600 hover:text-indigo-500'>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Scrollbar>
        </>
      ) : (
        <div> you have no items in your basket </div>
      )}

      <div className='flex flex-col flex-shrink-0 p-30px'>
        <div className='flex items-center justify-between mb-20px'>
          <span className='font-semibold text-gray-900'>
            Subtotal &nbsp;
            <span className='font-normal text-gray-700 text-13px'>
              (Incl. VAT)
            </span>
          </span>

          <span className='font-semibold text-18px text-gray-900'>
            
            {formatNumber({
              q: calculatePrice(),
              locale: 'en-US',
              currency: 'USD',
            })}
          </span>
        </div>
        <p className='mt-0.5 text-sm text-gray-500'>
          Shipping and taxes calculated at checkout.
        </p>
        <div className='mt-6'>
          <a
            href='#'
            className='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'>
            Checkout
          </a>
        </div>
        <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
          <p>
            or{' '}
            <button
              type='button'
              className='font-medium text-indigo-600 hover:text-indigo-500'
              onClick={hideCart}>
              Continue Shopping<span aria-hidden='true'> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </div> */}
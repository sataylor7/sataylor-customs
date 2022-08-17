import 'rc-collapse/assets/index.css';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import '@assets/styles/globals.css';
import { DrawerProvider } from '@contexts/drawer/drawer.provider';
import { CartProvider } from '@contexts/cart/cart.provider';

function CustomApp({ Component, pageProps }) {
  return (
    <DrawerProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </DrawerProvider>
  );
}

export default CustomApp;

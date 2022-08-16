import 'rc-collapse/assets/index.css';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import '@assets/styles/globals.css';
import { DrawerProvider } from '@contexts/drawer/drawer.provider';

function CustomApp({ Component, pageProps }) {
  return (
    <DrawerProvider>
      <Component {...pageProps} />
    </DrawerProvider>
  );
}

export default CustomApp;

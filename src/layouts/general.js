import Header from './header';
import Footer from './footer';
import { Drawer, CartDrawer } from '@components/drawer';

const Layout = ({style, children, header = true}) => (
  <main
    className='layout relative min-h-screen flex-grow'
    style={{
      minHeight: '-webkit-fill-available',
      WebkitOverflowScrolling: 'touch',
      ...style,
    }}>
    <Drawer />
    {header && <Header />}
    <div className='flex flex-col w-full h-full min-h-screen flex-grow'>
      <div className='pt-90px flex-auto'>{children}</div>
      <Footer />
    </div>
    <CartDrawer />
  </main>
);
export default Layout;

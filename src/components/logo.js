import Link from 'next/link';
import SVGLogo from '@assets/icons/logo.icon'

const Logo = ({ className, onClick = () => {} }) => (
  <Link href='/'>
    <a className={className} onClick={onClick}>
      <span className='sr-only'>S.A.Taylor Customs</span>
      <SVGLogo color={'#fff'}/>
    </a>
  </Link>
);

export default Logo;

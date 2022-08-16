import Link from 'next/link';

const Logo = ({ className, onClick = () => {} }) => (
  <Link href='/'>
    <a className={className} onClick={onClick}>
      <span className='sr-only'>S.A.Taylor Customs</span>
      <span>S.A.Taylor Customs</span>
    </a>
  </Link>
);

export default Logo;

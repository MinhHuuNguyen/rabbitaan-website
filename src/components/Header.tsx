import Link from 'next/link';
import header from '../styles/Header.module.css';
const Header = () => {
  return (
    <nav className={header.navbar}>
    <ul className={header['nav-list']}>
      <li><a href="#home" className={header['nav-link']}>Home</a></li>
      <li><a href="#story" className={header['nav-link']}>Story</a></li>
      <li><a href="#wedding" className={header['nav-link']}>Wedding</a></li>
      <li><a href="#gallery" className={header['nav-link']}>Gallery</a></li>
      <li><a href="#pages" className={header['nav-link']}>Pages</a></li>
      <li><a href="#rsvp" className={header['nav-link']}>RSVP</a></li>
    </ul>
  </nav>
  );
};

export default Header;
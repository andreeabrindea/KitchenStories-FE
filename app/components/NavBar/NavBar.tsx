import './navbar.css';
import logo from '@/public/cooking.png';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleHamburgerMenuClicked = () => {
    setIsMenuOpen((prev) => {
      return !prev;
    });
  };
  return (
    <>
      <div className={`off-screen-menu ${isMenuOpen ? 'active' : ''}`}>
        <Image src={logo} alt="cooking pot" id="logo-image-off-screen" />
        <ul id="list-pages-off-screen">
          <li><Link href="/">HOME</Link></li>
          <li>RECIPES</li>
          <li>COOKING TIPS</li>
          <li>ABOUT US</li>
        </ul>
        <section id="off-screen-menu-footer">
          <FaSearch id="search-icon-off-screen"></FaSearch>
          <button>Subscribe</button>
        </section>
      </div>
      <section id='navigation-wrapper'>
        <Link href="/"><Image src={logo} alt="cooking pot" id="logo-image" /></Link>
        <ul id="list-pages">
          <li><Link href="/">HOME</Link></li>
          <li>RECIPES</li>
          <li>COOKING TIPS</li>
          <li>ABOUT US</li>
        </ul>
        <section>
          <FaSearch id="search-icon"></FaSearch>
          <Link href="/login">Login</Link>
          <Link href="/register">Sign up</Link>
        </section>
        <nav id="hamburger-menu-nav">
          <div className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`} onClick={handleHamburgerMenuClicked}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </section>
    </>
  );
}
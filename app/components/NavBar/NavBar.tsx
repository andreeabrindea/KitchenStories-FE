"use client";
import './navbar.css';
import logo from '@/public/cooking.png';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';
import userPhoto from '@/public/baker.png';

interface NavBarProps {
  isUserLogged: boolean;
}
export default function NavBar({ isUserLogged }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerMenuClicked = () => {
    setIsMenuOpen((prev) => {
      return !prev;
    });
  };
  return (
    <>
      <div className={`off-screen-menu ${isMenuOpen ? 'active' : ''}`}>
        <Link href="/"><Image src={logo} alt="cooking pot" id="logo-image-off-screen" /></Link>
        <nav id="off-screen-links">
          {!isUserLogged ? (
            <div id="off-screen-authentification-links">
              <Link href="/login" className='login-link'>Login</Link>
              <Link href="/register" className='register-link' id="off-screen-register-link">Sign up</Link>
            </div>
          )
            :

            <div id="off-screen-authentification-links">
              <Image src={userPhoto} alt="user chef"></Image>
            </div>
          }
          <ul id="list-pages-off-screen">
            <li><Link href="/">HOME</Link></li>
            <li>RECIPES</li>
            <li>COOKING TIPS</li>
            <li>ABOUT US</li>
          </ul>
        </nav>
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
          {!isUserLogged ? (
            <>
              <Link href="/login" className='login-link'>Login</Link>
              <Link href="/register" className='register-link'>Sign up</Link>
            </>
          )
            :
            <Image src={userPhoto} alt="user chef" id="user-avatar"></Image>
          }
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
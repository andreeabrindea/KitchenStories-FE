import './navbar.css';
import logo from '@/public/cooking.png';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

export default function NavBar() {
    return (
      <section id='navigation-wrapper'>
        <Image src={logo} alt = "cooking pot" id="logo-image"/>
        <ul id="list-pages">
          <li>HOME</li>
          <li>RECIPES</li>
          <li>COOKING TIPS</li>
          <li>ABOUT US</li>
        </ul>
        <FaSearch id="search-icon"></FaSearch>
      </section>
    );
  }
import './header.css';
import { FaUserCircle } from "react-icons/fa";
import SearchBar from '../SearchBar/SearchBar';
import logo from '@/public/logo.png';
import Image from 'next/image';

export default function NavBar() {
    return (
      <section id='navigation-wrapper'>
       <Image src= {logo} alt="logo text" id="logo-image"></Image>
        <div className='search-bar-container'>
          <SearchBar/>
        </div>
          <FaUserCircle className='user-icon-section'/>
      </section>
    );
  }
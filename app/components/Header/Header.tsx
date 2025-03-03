import './header.css';
import { FaUserCircle } from "react-icons/fa";
import SearchBar from '../SearchBar/SearchBar';
 
export default function NavBar() {
    return (
      <section id='navigation-wrapper'>
        <p className='logo'>Gourmet <br></br> Stories</p>
        <div className='search-bar-container'>
          <SearchBar/>
        </div>
          <FaUserCircle className='user-icon-section'/>
      </section>
    );
  }
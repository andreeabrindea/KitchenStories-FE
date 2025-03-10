"use client";
import NavBar from "./components/NavBar/NavBar";
import './page.css';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import RecipesCarousel from "./components/RecipesCarousel/RecipesCarousel";
export default function Home() {
  return (
    <main id="page-wrapper">
      <nav>
        <NavBar/>
      </nav>
      <header>
        <Header/>
      </header>
      <Categories/>
      <RecipesCarousel/>
   </main>
  );
}

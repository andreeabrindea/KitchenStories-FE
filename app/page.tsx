"use client";
import NavBar from "./components/NavBar/NavBar";
import './page.css';
import RecipeCard from "./components/RecipeCard/RecipeCard";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
export default function Home() {

  const [recipes, setRecipes] = useState<any[] | null>(null);
  useEffect(() =>
  {
    async function fetchRecipes()
    {
      const response = await fetch("http://localhost:5048/recipes");
      let recipes = await response.json();
      recipes = recipes.slice(0, 5);
      setRecipes(recipes);
    }

    fetchRecipes();
  }, []);
  

  interface Recipe {
    id: string;
    name: string;
    author: string;
    description: string;
  }
  if (recipes == null)
  {
    return
    <main id="page-wrapper">
    <header>
      <NavBar></NavBar>
    </header>
    </main>
  }
  return (
    <main id="page-wrapper">
      <nav>
        <NavBar/>
      </nav>
      <header>
        <Header/>
      </header>
      <Categories/>
      <article>
        <h2 id="latest-recipes-title">Latest recipes:</h2>
        <ul id="latest-recipies">
          {
            recipes.map((recipeElem: Recipe) => (
            <li key={recipeElem.id}>
              <Link href={`/recipe/${recipeElem.id}`}>
                <RecipeCard recipe={recipeElem}></RecipeCard>
              </Link>
            </li>))
          }
        </ul>
      </article>
   </main>
  );
}

"use client";
import NavBar from "./components/NavBar/NavBar";
import './page.css';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import RecipesCarousel from "./components/RecipesCarousel/RecipesCarousel";
import { useState, useEffect } from "react";
import RecipeCard from "./components/RecipeCard/RecipeCard";

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
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
      return (
          <div>OOPS</div>
      )
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
      <RecipesCarousel/>
      <section id="recipes-by-category-wrapper">
        <div>
          <button id="recipes-button">Recipes</button>
        </div>
        <h1>Embark on a <br/> journey</h1>
        <p>With our diverse collection of recipes we have something to <br/> satisfy every palate.</p>
        <ul id="list-of-categories">
          <li>All</li>
          <li>Vegan</li>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
          <li>Dessert</li>
          <li>snacks</li>
        </ul>
          <ul id="list-recipies-by-category">
            {
              recipes.map((recipeElem: Recipe) => (
              <li key={recipeElem.id}>
                  <RecipeCard recipe={recipeElem}></RecipeCard>
              </li>))
            }
          </ul>
      </section>
   </main>
  );
}

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
  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch("https://gourmetstories.onrender.com/recipes");
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

  return (
    <main id="page-wrapper">
      <nav>
        <NavBar />
      </nav>
      <header>
        <Header />
      </header>
      <Categories />
      <RecipesCarousel />
      <section id="recipes-by-category-wrapper">
        <div>
          <button id="recipes-button">Recipes</button>
        </div>
        <h1>Embark on a <br /> journey</h1>
        <p>With our diverse collection of recipes we have something to <br /> satisfy every palate.</p>
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
          {recipes ? (
            recipes.map((recipe) => (
              <li key={recipe.id}>
                <RecipeCard recipe={recipe} />
              </li>
            ))
          ) : (
            <li>Backend is probably not working right now.</li>
          )}
        </ul>
      </section>
    </main>
  );
}

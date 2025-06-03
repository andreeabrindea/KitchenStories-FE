import React from 'react';
import './recipesCarousel.css';
import Image from 'next/image';
import nextIcon from '@/public/arrow-right.png';
import previousIcon from '@/public/left-arrow.png';
import RecipeCard from '../RecipeCard/RecipeCard';
import { useState, useEffect } from "react";

const RecipesCarousel = () => {

  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch("https://gourmetstories.onrender.com/recipes");
      if (!response.ok) {
        throw new Error("Fetch failed");
      }
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
    <section id="recipes-carousel-wrapper">
      <div id="title-wrapper">
        <h1 id="recipes-carousel-title">featured recipes</h1>
        <nav id="recipes-navigation">
          <Image src={previousIcon} alt="left arrow" id="previous-recipe"></Image>
          <Image src={nextIcon} alt="right arrow" id="next-recipe"></Image>
        </nav>
      </div>
      <ul id="featured-recipies">
        {recipes ?
          (recipes.map((recipeElem: Recipe) => (
            <li key={recipeElem.id}>
              <RecipeCard recipe={recipeElem}></RecipeCard>
            </li>)))
          :
          <li>Backend is probably not working right now. Wait a bit as I am using render for backend deployment, and it will spin down with inactivity, which can delay requests by 50 seconds or more.</li>
        }
      </ul>
    </section>
  )
}

export default RecipesCarousel

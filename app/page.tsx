"use client";
import Header from "./components/NavBar/NavBar";
import foodImage from "../public/brooke-lark-wMzx2nBdeng-unsplash.jpg";
import Image  from 'next/image';
import './page.css';
import RecipeCard from "./components/RecipeCard/RecipeCard";
import Link from "next/link";
import { useState, useEffect } from "react";
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
      <Header></Header>
    </header>
    </main>
  }
  return (
    <main id="page-wrapper">
      <header>
        <Header></Header>
      </header>
      <article id="image-wrapper">
        <Image src={foodImage} alt="food image"></Image>
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

"use client";
import Header from '@/app/components/NavBar/NavBar';
import React from 'react';
import './page.css';
import recipeImage from '@/public/brooke-lark-wMzx2nBdeng-unsplash.jpg';
import Image  from 'next/image';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

interface Recipe {
  id: string;
  name: string;
  author: string;
  description: string;
  ingredients: string[];
  instructions: string;
}

export default function SingleRecipe()
{
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const params = useParams();
  console.log(params.id)
  useEffect(() =>
  {
    async function fetchRecipe()
    {
      try {
        const requestOptions: RequestInit = {
          method: "GET",
          headers: { "Content-Type": "application/json" }};
        const response = await fetch(`http://localhost:5048/recipes/${params.id}`, requestOptions);
        const recipe = await response.json();
        setRecipe(recipe);
        console.log(recipe.description);
        console.log(recipe);
      } catch (error)
      {
        console.log("Error while fetching recipe: ", error)
      }
    }
    fetchRecipe();
  }, [params]);
  if (recipe == null)
  {
    return (<main className='not-found'><b>Recipe Not Found</b></main>)
  }
  return (
   <main id="page-wrapper">
    <Header></Header>
    <section className="section-wrapper">
      <Image src={recipeImage} alt="recipe image"></Image>
    </section>
    <section className='recipe-section-wrapper'>
      <h1 id="recipe-name">{recipe.name}</h1>
      <h2>by {recipe.author}</h2>
      <h3>{recipe.description}</h3>
      <h3><b>Ingredients:</b></h3>
      <ol>
        {
          recipe.ingredients.map((ingredient: any, index: number) => (
          <li key={index}>
            {ingredient}
          </li>))
        }
      </ol>
      <p>{recipe.instructions}</p>
    </section>
   </main>
  )
}
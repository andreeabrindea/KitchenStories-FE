import React from 'react';
import './recipeCard.css';
import foodImage from "../../../public/brooke-lark-wMzx2nBdeng-unsplash.jpg";
import Image  from 'next/image';

interface Recipe {
    name: string;
    author: string;
    description: string;
  }
  
  interface RecipeCardProps {
    recipe: Recipe;
  }
  
  const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div id="recipe-box">
        <Image src={foodImage} alt='recipe' id="recipe-image"></Image>
        <p id="recipe-name">{recipe.name}</p>
        <p id="recipe-author">{recipe.author}</p>
        <p>{recipe.description}</p>
    </div>
  )
}

export default RecipeCard

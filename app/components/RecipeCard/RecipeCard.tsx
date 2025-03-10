import React from 'react';
import './recipeCard.css';
import foodImage from "../../../public/brooke-lark-wMzx2nBdeng-unsplash.jpg";
import Image  from 'next/image';
import Link from 'next/link';

interface Recipe {
    id: string,
    name: string;
    description: string;
  }
  
  interface RecipeCardProps {
    recipe: Recipe;
  }
  
  const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div id="recipe-box">
        <div id="image-wrapper">
          <Image src={foodImage} alt='recipe' id="recipe-image"/>
        </div>
        <div id="recipe-details">
          <p id="recipe-name">{recipe.name}</p>
          <p>{recipe.description}</p>
          <div id="recipe-card-footer">
            <ul id="recipe-cooking-details">
              <li>40 min</li>
              <li>- easy prep -</li>
              <li>3 serves</li>
            </ul>
            <Link href={`/recipe/${recipe.id}`}>
              <button id="view-recipe-button">View Recipe</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default RecipeCard

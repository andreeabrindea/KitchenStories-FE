"use server";
import Header from "./components/Header/Header";
import foodImage from "../public/brooke-lark-wMzx2nBdeng-unsplash.jpg";
import Image  from 'next/image';
import './page.css';
import RecipeCard from "./components/RecipeCard/RecipeCard";

export default async function Home() {
  const data = await fetch("http://localhost:5048/recipes");
  let recipes = await data.json();
  recipes = recipes.slice(0, 5);
  console.log(recipes);
  return (
    <main id="page-wrapper">
      <header>
        <Header></Header>
      </header>
      <article id="image-wrapper">
        <Image src={foodImage} alt="food image"></Image>
        <h2>Latest recipes:</h2>
      <ul id="latest-recipies">
        {
          recipes.map((recipe: any, index: number) => (
          <li key={index}>
           <RecipeCard recipe={recipe}></RecipeCard>
          </li>))
        }
      </ul>
      </article>
   </main>
  );
}

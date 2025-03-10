import React from 'react';
import './categories.css';
import Image from 'next/image';
import breakfast from '@/public/english-breakfast.png';
import lunch from '@/public/meal.png';
import dinner from '@/public/dinner.png';
import dessert from '@/public/panna-cotta.png';
import snack from '@/public/snack.png';
const Categories = () => {
  return (
    <section id="categories-wrapper">
    <div id="first-column">
        <button id="explore-button">EXPLORE</button>
        <h1 id="category-title">OUR DIVERSE <br/>PALETTE</h1>
        <p>If you are a breakfast enthusiast, a connoisseur of savory delights, <br/> or on the lookout for irresistible desserts, our curated selection has <br/> something to satisfy every palate.</p>
        <button id="see-more-button">SEE MORE</button>
    </div>
    <ul id="list-categories">
      <li>
        <Image src={breakfast} alt="english breakfast" className='meal-icon'></Image>
        <p>BREAKFAST</p>
      </li>
      <li>
        <Image src={lunch} alt="lunch" className='meal-icon'></Image>
        <p>LUNCH</p>
        </li>
      <li>
        <Image src={dinner} alt="dinner" className='meal-icon'></Image>
        <p>DINNER</p>
        </li>
      <li>
        <Image src={dessert} alt="dessert" className='meal-icon'></Image>
        <p>DESSERT</p>
        </li>
      <li>
        <Image src={snack} alt="english breakfast" className='meal-icon'></Image>
        <p>SNACKS</p>
        </li>
    </ul>
  </section>
  )
}

export default Categories

"use client";
import React from 'react'
import foodImage from '@/public/jonathan-pielmayer-RKJElwIyCQw-unsplash.jpg'
import './header.css';

const Header = () => {
  return (
    <header id="header-wrapper" style={{ backgroundImage: `url(${foodImage.src})` }}>
        <p id="title-first-paragraph">UNLEASH CULINARY<br/>EXCELLANCE</p>
        <p id="title-second-paragraph">Explore a world of flavours, discover<br/> handcrafter recipes, and let the aroma of <br/> our passion for cooking fill your kitchen</p>
        <button id="go-to-recipes-button">EXPLORE RECIPES</button>
    </header>
  )
}

export default Header

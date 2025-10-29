import React, { useState } from 'react';
import './Menu.css';
import Section from '../../pages/Menu/Section';

import BreakfastImg from '../../utils/images/pizza-bg.jpg';
import LunchImg from '../../utils/images/lunch-img.jpg';
import DinnerImg from '../../utils/images/dinner-img.jpg';
import DessertImg from '../../utils/images/dessert-img.jpg';
import DrinksImg from '../../utils/images/drinks-img.jpg';
import TacosImg from '../../utils/images/tacos.png';
import breakfast from '../../utils/breakfast';
import lunch from '../../utils/lunch';
import dinner from '../../utils/dinner';
import dessert from '../../utils/dessert';
import drink from '../../utils/drink';
import tacos from '../../utils/tacos';

function Menu() {
  
  const [showPizzas, setShowPizzas] = useState(false);
  const [showLunch, setShowLunch] = useState(false);
  const [showDinner, setShowDinner] = useState(false);
  const [showDessert, setShowDessert] = useState(false);
  const [showDrinks, setShowDrinks] = useState(false);
  /*Tacos */
  const [showTacos,setShowTacos]=useState(false)

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) result.push(array.slice(i, i + size));
    return result;
  };

  const breakfastChunks = chunkArray(breakfast, 5);
  const lunchChunks = chunkArray(lunch, 5);
  const dinnerChunks = chunkArray(dinner, 5);
  const dessertChunks = chunkArray(dessert, 5);
  const drinkChunks = chunkArray(drink, 5);
  /*tacos */
  const tacosChunks=chunkArray(tacos,5 );

  return (
    <div className='menu-page'>
      <header className='height-50 mt-5'>
        <div className='container h-100 d-flex align-items-center justify-content-center'>
          <h1 className='text-light display-3 fw-bold'>Menu</h1>
        </div>
      </header>

      <Section 
        title="Pizza" 
        showState={showPizzas} 
        setShowState={setShowPizzas} 
        chunks={breakfastChunks} 
        sectionImg={BreakfastImg} 
        
      />

      <Section 
        title="Lunch" 
        showState={showLunch} 
        setShowState={setShowLunch} 
        chunks={lunchChunks} 
        sectionImg={LunchImg} 
      />

      <Section 
        title="Dinner" 
        showState={showDinner} 
        setShowState={setShowDinner} 
        chunks={dinnerChunks} 
        sectionImg={DinnerImg} 
      />

      <Section 
        title="Dessert" 
        showState={showDessert} 
        setShowState={setShowDessert} 
        chunks={dessertChunks} 
        sectionImg={DessertImg} 
      />

      <Section 
        title="Drinks" 
        showState={showDrinks} 
        setShowState={setShowDrinks} 
        chunks={drinkChunks} 
        sectionImg={DrinksImg} 
      />

      <Section 
       title="Tacos" 
        showState={showTacos} 
        setShowState={setShowTacos} 
        chunks={tacosChunks} 
        sectionImg={TacosImg} 
        />

    </div>
  );
}

export default Menu;

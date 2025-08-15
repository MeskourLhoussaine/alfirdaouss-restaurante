import React, { useState } from 'react';
import './Menu.css';
import { Card, CardBody, CardText, CardTitle, Collapse } from 'react-bootstrap';

import { motion } from 'framer-motion';
import { FaCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import BreakfastImg from '../../utils/images/breakfast-img.jpg';
import LunchImg from '../../utils/images/lunch-img.jpg';
import DinnerImg from '../../utils/images/dinner-img.jpg';
import DessertImg from '../../utils/images/dessert-img.jpg';
import DrinksImg from '../../utils/images/drinks-img.jpg';
import breakfast from '../../utils/breakfast';
import lunch from '../../utils/lunch';
import dinner from '../../utils/dinner';
import dessert from '../../utils/dessert';
import drink from '../../utils/drink';

function Menu() {
  const [showPizzas, setShowPizzas] = useState(false);
  const [showLunch, setShowLunch] = useState(false);
  const [showDinner, setShowDinner] = useState(false);
  const [showDessert, setShowDessert] = useState(false);
  const [showDrinks, setShowDrinks] = useState(false);

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const breakfastChunks = chunkArray(breakfast, 5);
  const lunchChunks = chunkArray(lunch, 5);
  const dinnerChunks = chunkArray(dinner, 5);
  const dessertChunks = chunkArray(dessert, 5);
  const drinkChunks = chunkArray(drink, 5);

  const renderCard = (item, bgDark = false) => (
    <motion.div 
      key={item.id}
      className="menu-item-container"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={`border-0 mb-4 ${bgDark ? 'bg-dark text-light' : ''}`}>
        <CardBody>
          <div className='d-flex align-items-center'>
            <div className='me-4' style={{ flex: '0 0 100px' }}>
              <div className='rounded-circle overflow-hidden' style={{ width: '100px', height: '100px' }}>
                <img 
                  src={item.image} 
                  alt={item.name}
                  className='img-fluid h-100 w-100'
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            
            <div className='flex-grow-1'>
              <CardTitle className='fs-4 text-capitalize mb-2'>
                {item.name}
              </CardTitle>
              {item.description && (
                <CardText className={bgDark ? 'text-light' : 'text-muted'} style={{ opacity: 0.8 }}>
                  {item.description}
                </CardText>
              )}
            </div>
            
            <div style={{ flex: '0 0 100px', textAlign: 'right' }}>
              <CardText className='fs-3 fw-bold text-success'>
                {item.price}
              </CardText>
            </div>
          </div>

          {item.ingredients && (
            <motion.div
              className="ingredients-container"
              initial={{ opacity: 0, height: 0 }}
              whileHover={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              <div className={`ingredients-list mt-3 pt-3 border-top ${bgDark ? 'border-light' : 'border-dark'}`}>
                <h6 className="fw-bold mb-2">Ingrédients :</h6>
                <ul className="list-unstyled mb-0">
                  {item.ingredients.map((ingredient, idx) => (
                    <li key={idx} className="mb-1 d-flex align-items-center">
                      <FaCircle className="text-success me-2" size={8} />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </CardBody>
      </Card>
    </motion.div>
  );

  const renderSection = (title, showState, setShowState, chunks, bgDark = false, sectionImg = null) => (
    <div className={`${title.toLowerCase()} ${bgDark ? 'bg-dark text-light py-5' : 'my-5'}`}>
      <div className='container'>
        <motion.div
          onClick={() => setShowState(!showState)}
          className='d-flex justify-content-between align-items-center mb-4'
          style={{ cursor: 'pointer' }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className='text-center fs-1 mb-0 text-uppercase fw-bold text-success'>{title}</h2>
          {showState ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />}
        </motion.div>

        <Collapse in={showState}>
          <div>
            <div className='row'>
              {chunks.map((chunk, index) => (
                <React.Fragment key={index}>
                  {index === 0 && sectionImg && (
                    <motion.div 
                      className='col-lg-6 d-flex justify-content-center align-items-center'
                      initial={{ opacity: 0, x: -300 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                    >
                      <img src={sectionImg} className='img-fluid w-75' alt={title} />
                    </motion.div>
                  )}
                  <motion.div 
                    className={`col-lg-6 ${index === 0 && sectionImg ? '' : 'offset-lg-0'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -300 : 300 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    {chunk.map(item => renderCard(item, bgDark))}
                  </motion.div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );

  return (
    <div className='menu-page'>
      <header className='height-50 mt-5'>
        <motion.div 
          className='container h-100 d-flex align-items-center justify-content-center'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-light'>Menu</h1>
        </motion.div>
      </header>

      {renderSection('Pizza', showPizzas, setShowPizzas, breakfastChunks)}
      {renderSection('Lunch', showLunch, setShowLunch, lunchChunks, true, LunchImg)}
      {renderSection('Dinner', showDinner, setShowDinner, dinnerChunks, false, DinnerImg)}
      {renderSection('Dessert', showDessert, setShowDessert, dessertChunks, true, DessertImg)}
      {renderSection('Drinks', showDrinks, setShowDrinks, drinkChunks, false, DrinksImg)}
      <motion.div 
        className="container my-5 pt-5 d-flex justify-content-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/*<Link to='#'>
          <button type='button' className='btn btn-success btn-lg rounded-0 text-capitalize mx-2 shadow'>Book your table</button>
        </Link>*/}
      </motion.div>
    </div>
  );
}

export default Menu;
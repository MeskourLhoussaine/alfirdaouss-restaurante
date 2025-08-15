import React, { useState, useEffect } from 'react';
import './Header.css';
import Carousel from 'react-bootstrap/Carousel';
import MenuBtn from '../MenuBtn/MenuBtn';
import { Link } from 'react-router-dom';

function Header() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', checkMobile);
    checkMobile();

    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <header className="header-container">
      <Carousel 
        activeIndex={index} 
        onSelect={handleSelect}
        fade
        controls={false}
        indicators={false}
        interval={null}
      >
        {/* Slide 1 - Français */}
        <Carousel.Item className="carousel-item1">
          <div className="carousel-content">
            <div className={`text-content ${isMobile ? 'mobile' : 'left-align'}`}>
              <h2 className='fw-bold fs-3'>Bienvenue à</h2>
              <h1 className='text-capitalize fw-bold'>Al Firdaousse restaurant</h1>
              <p className='hover-text'>
                Bienvenue au Restaurant Al Firdaousse à Tazarine, Maroc.
                    Situé au cœur de cette charmante localité du sud-est marocain, notre restaurant vous accueille dans une ambiance chaleureuse et authentique.
              </p>
              <div className='button-group'>
                <MenuBtn />
                <Link to='#' className='contact-link'>
                  <button type='button' className='btn btn-outline-light btn-lg rounded-0'>
                    Nous contacter
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 2 - Anglais */}
        <Carousel.Item className="carousel-item2">
          <div className="carousel-content">
            <div className={`text-content ${isMobile ? 'mobile' : 'left-align'}`}>
              <h2 className='fw-bold fs-3'>Welcome to</h2>
              <h1 className='text-capitalize fw-bold'>Al Firdaousse restaurant</h1>
              <p className='hover-text'>
               Welcome to Restaurant Al Firdaousse in Tazarine, Morocco.
                    Located in the heart of this charming locality in southeastern Morocco, our restaurant welcomes you in a warm and authentic atmosphere.
              </p>
              <div className='button-group'>
                <MenuBtn />
                <Link to='#' className='contact-link'>
                  <button type='button' className='btn btn-outline-light btn-lg rounded-0'>
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Item>
          {/* Slide 3 - Arabe */}
       

        {/* Slide 3 - Arabe */}
        <Carousel.Item className="carousel-item3">
          <div className="carousel-content">
            <div className={`text-content ${isMobile ? 'mobile' : 'right-align'}`}>
              <h2 className='fw-bold fs-3'>مرحبا بكم في</h2>
              <h1 className='fw-bold'>مطعم الفردوس</h1>
              <p className='hover-text'>
                مرحبا بكم في مطعم الفردوس في تازارين، المغرب.
                يقع في قلب هذه البلدة الساحرة في الجنوب الشرقي للمغرب.
              </p>
              <div className='button-group'>
                <MenuBtn />
                <Link to='#' className='contact-link'>
                  <button type='button' className='btn btn-outline-light btn-lg rounded-0'>
                    اتصل بنا
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="custom-indicators">
        {[0, 1, 2, 3].map((i) => (
          <button
            key={i}
            className={`indicator ${index === i ? 'active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </header>
  );
}

export default Header;
// src/components/Menu/CardItem.js
import React, { useState } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import { motion } from 'framer-motion';

// Dictionnaire d'icônes pour les ingrédients 🍅🧀🌿
const ingredientIcons = {
  "Sauce tomate": "🍅",
  "Mozzarella": "🧀",
  "Basilic frais": "🌿",
  "Huile d'olive": "🫒",
  "Thon": "🐟",
  "Oignons": "🧅",
  "Poivrons": "🫑",
  "Champignons": "🍄",
  "Viande hachée": "🥩",
  "Dinde": "🍗",
  "Fruits de mer": "🦐",
  "Olives": "🫒",
  "Fromage": "🧀",
  "Tomates": "🍅"
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

function CardItem({ item, bgDark = false }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={item.id}
      className="menu-item-container"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.25 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          backgroundColor: isHovered
            ? bgDark
              ? "rgba(40, 167, 69, 0.2)" // vert transparent sur fond sombre
              : "rgba(220, 250, 220, 0.9)" // vert très clair sur fond clair
            : bgDark
              ? "#212529"
              : "#fff"
        }}
        transition={{ duration: 0.3 }}
        className={`border-0 mb-4 shadow-sm rounded-4 ${bgDark ? 'text-light' : 'text-dark'}`}
        style={{
          overflow: "hidden",
          boxShadow: isHovered
            ? "0 4px 15px rgba(0,0,0,0.2)"
            : "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <CardBody className="p-4">
          <div className='d-flex align-items-center'>
            
            {/* Image circulaire */}
            <div className='me-4' style={{ flex: '0 0 100px' }}>
              <motion.div
                className='rounded-circle overflow-hidden border border-success'
                style={{ width: '100px', height: '100px' }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className='img-fluid h-100 w-100'
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            </div>

            {/* Contenu principal */}
            <div className='flex-grow-1'>
              <CardTitle className='fs-4 text-capitalize mb-2 fw-bold text-success'>
                {item.name}
              </CardTitle>

              {/* Description */}
              {item.description && (
                <CardText
                  className={bgDark ? 'text-light' : 'text-muted'}
                  style={{ opacity: 0.9 }}
                >
                  {item.description}
                </CardText>
              )}

              {/* Ingrédients (en bas, visible uniquement au survol) */}
              {isHovered && item.ingredients && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mt-3 p-2 rounded-3 ${bgDark ? 'bg-secondary text-light' : 'bg-light text-dark'}`}
                  style={{
                    fontSize: '0.9rem',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  }}
                >
                  <strong>🧂 Ingrédients :</strong>
                  <ul className="mt-2 mb-0" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                    {item.ingredients.map((ingredient, index) => (
                      <li key={index}>
                        {ingredientIcons[ingredient] || "🍽️"} {ingredient}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Prix */}
            <motion.div
              style={{ flex: '0 0 100px', textAlign: 'right' }}
              whileHover={{ scale: 1.1 }}
            >
              <CardText className='fs-3 fw-bold text-success mb-0'>
                {item.price}
              </CardText>
            </motion.div>
          </div>
        </CardBody>
      </motion.div>
    </motion.div>
  );
}

export default CardItem;

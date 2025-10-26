// src/components/Menu/CardItem.js
import React, { useState } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLeaf, FaCheese, FaDrumstickBite, FaPizzaSlice, FaListUl } from 'react-icons/fa';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ingredientIcons = {
  cheese: <FaCheese className="text-warning" />,
  chicken: <FaDrumstickBite className="text-danger" />,
  veggie: <FaLeaf className="text-success" />,
  pizza: <FaPizzaSlice className="text-orange" />,
};

function CardItem({ item, bgDark = false }) {
  const [showIngredients, setShowIngredients] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={item.id}
      className="menu-item-container"
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -3 }}
      transition={{ duration: 0.25 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)} // pour mobile
    >
      <Card
        className={`border-0 mb-3 shadow-sm ${
          bgDark ? 'bg-dark text-light' : ''
        } ${isHovered ? 'bg-light shadow-lg' : ''}`}
        style={{
          height: '150px', // ✅ hauteur fixe
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
          overflow: 'hidden',
        }}
      >
        <CardBody className="py-3 h-100 d-flex align-items-center">
          <div className="d-flex align-items-center w-100">
            {/* Image */}
            <div className="me-3" style={{ flex: '0 0 80px' }}>
              <motion.div
                className="rounded-circle overflow-hidden"
                style={{ width: '80px', height: '80px' }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid h-100 w-100"
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
            </div>

            {/* Texte principal */}
            <div className="flex-grow-1 d-flex flex-column justify-content-center" style={{ overflow: 'hidden' }}>
              <CardTitle className="fs-5 text-capitalize mb-1 text-truncate">
                {item.name}
              </CardTitle>

              {item.description && (
                <CardText
                  className={bgDark ? 'text-light' : 'text-muted'}
                  style={{
                    fontSize: '0.85rem',
                    opacity: 0.85,
                    lineHeight: '1.2',
                    maxHeight: '36px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {item.description}
                </CardText>
              )}

              {/* Icône ingrédients */}
              {item.ingredients && item.ingredients.length > 0 && (
                <div
                  className="mt-1 d-flex align-items-center"
                  onClick={() => setShowIngredients(!showIngredients)}
                  style={{
                    cursor: 'pointer',
                    color: '#198754',
                    fontSize: '0.9rem',
                    gap: '6px',
                    userSelect: 'none',
                  }}
                >
                  <FaListUl /> <span>Ingrédients</span>
                </div>
              )}
            </div>

            {/* Prix */}
            <motion.div
              style={{ flex: '0 0 80px', textAlign: 'right' }}
              whileHover={{ scale: 1.1 }}
            >
              <CardText className="fs-5 fw-bold text-success mb-0">
                {item.price}
              </CardText>
            </motion.div>
          </div>
        </CardBody>
      </Card>

      {/* Liste des ingrédients (en dehors de la carte pour ne pas agrandir la hauteur) */}
      <AnimatePresence>
        {showIngredients && (
          <motion.div
            className="px-4 pb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {item.ingredients.map((ing, index) => (
              <motion.div
                key={index}
                className="d-flex align-items-center text-muted"
                style={{ fontSize: '0.85rem', gap: '5px' }}
              >
                {ingredientIcons[ing.icon] || <FaLeaf className="text-success" />}
                <span>{ing.name}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default CardItem;

// src/components/Menu/CardItem.js
import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

function CardItem({ item, bgDark = false }) {
  return (
    <motion.div
      key={item.id}
      className="menu-item-container"
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.25 }}
    >
      <Card className={`border-0 mb-4 shadow-sm ${bgDark ? 'bg-dark text-light' : ''}`}>
        <CardBody>
          <div className='d-flex align-items-center'>
            <div className='me-4' style={{ flex: '0 0 100px' }}>
              <motion.div
                className='rounded-circle overflow-hidden'
                style={{ width: '100px', height: '100px' }}
                whileHover={{ rotate: 3, scale: 1.05 }}
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

            <div className='flex-grow-1'>
              <CardTitle className='fs-4 text-capitalize mb-2'>{item.name}</CardTitle>
              {item.description && (
                <CardText className={bgDark ? 'text-light' : 'text-muted'} style={{ opacity: 0.8 }}>
                  {item.description}
                </CardText>
              )}
            </div>

            <motion.div
              style={{ flex: '0 0 100px', textAlign: 'right' }}
              whileHover={{ scale: 1.1 }}
            >
              <CardText className='fs-3 fw-bold text-success'>{item.price}</CardText>
            </motion.div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}

export default CardItem;

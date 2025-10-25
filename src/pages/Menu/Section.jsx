// src/components/Menu/Section.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import CardItem from './CardItem';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, staggerChildren: 0.1 }
  }
};

function Section({ title, showState, setShowState, chunks, bgDark = false, sectionImg = null, bgColor = null }) {
  return (
    <div
      className={`${title.toLowerCase()} ${bgDark ? ' text-light py-5' : 'py-5'} section-container`}
      style={{ background: bgColor ? bgColor : (bgDark ? '#1a1a1a' : '#f8f9fa') }}
    >
      <div className='container'>
        {/* Header cliquable */}
        <motion.div
          onClick={() => setShowState(!showState)}
          className='d-flex justify-content-between align-items-center mb-4 section-header'
          style={{ cursor: 'pointer' }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className='text-center fs-1 mb-0 text-uppercase fw-bold text-success section-title'>
            {title}
          </h2>
          {showState ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />}
        </motion.div>

        <AnimatePresence>
          {showState && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <motion.div
                className='row g-4 align-items-stretch'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Image de section */}
                {sectionImg && (
                  <motion.div
                    className='col-12 d-flex justify-content-center align-items-center mb-4 '
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <img src={sectionImg} alt={title} className="section-image" />
                  </motion.div>
                )}

                {/* Items en colonnes égales */}
                {chunks.flat().map(item => (
                  <motion.div 
                    key={item.id} 
                    className={`${sectionImg ? 'col-lg-6' : 'col-12 col-md-6 col-lg-6'} d-flex justify-content-center`}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className='w-100'>
                      <CardItem item={item} bgDark={bgDark} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Styles additionnels */}
      <style jsx>{`
        .section-container {
          border-radius: 15px;
          padding: 40px 20px;
          margin-bottom: 40px;
        }

        .section-header:hover .section-title {
          text-decoration: underline;
          text-decoration-color: #198754;
          text-underline-offset: 8px;
        }

        .section-title {
          transition: all 0.3s ease;
        }

        .section-image {
          max-height: 400px;
          width: 100%;
          object-fit: cover;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}

export default Section;

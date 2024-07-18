import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PopupOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled(motion.div)`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  text-align: center;
`;

const Popup = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <PopupOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <PopupContent
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </PopupContent>
    </PopupOverlay>
  );
};

export default Popup;

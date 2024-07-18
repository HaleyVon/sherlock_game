import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 20px;
  margin: 0 10px;
  width: 150px;
  flex-shrink: 0;
  cursor: pointer;
  border: ${props => props.isSelected ? '3px solid #4CAF50' : '1px solid #ddd'};
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Name = styled.h3`
  font-size: 16px;
  text-align: center;
`;

const WeaponCard = ({ weapon, onClick, isSelected }) => {
  return (
    <Card
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      isSelected={isSelected}
    >
      <Image src={weapon.image} alt={weapon.name} />
      <Name>{weapon.name}</Name>
      {isSelected && <span role="img" aria-label="selected">✅</span>}
    </Card>
  );
};

export default WeaponCard;
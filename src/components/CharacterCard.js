import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 20px;
  margin: 0 10px;
  width: 200px;
  flex-shrink: 0;
  cursor: pointer;
  border: ${props => props.isSelected ? '3px solid #4CAF50' : '1px solid #ddd'};
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Name = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

const Alibi = styled.p`
  font-size: 14px;
  color: #666;
`;

const CharacterCard = ({ character, onClick, isSelected }) => {
  return (
    <Card
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      isSelected={isSelected}
    >
      <Image src={character.image} alt={character.name} />
      <Name>{character.name}</Name>
      <Alibi>{character.alibi}</Alibi>
      {isSelected && <span role="img" aria-label="selected">✅</span>}
    </Card>
  );
};

export default CharacterCard;
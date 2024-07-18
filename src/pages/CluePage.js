import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';
import Background from '../components/Background';
import Dialogue from '../components/Dialogue';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const CluePage = () => {
  const navigate = useNavigate();
  const { currentCase, clueIndex } = useGame();

  return (
    <Background image={currentCase.background}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Dialogue text={currentCase.clues[clueIndex]} />
        <Button onClick={() => navigate('/deduction')} text="추리 시작하기" />
      </motion.div>
    </Background>
  );
};

export default CluePage;
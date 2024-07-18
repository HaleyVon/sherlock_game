import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';
import Background from '../components/Background';
import Dialogue from '../components/Dialogue';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const IntroPage = () => {
  const navigate = useNavigate();
  const { currentCase, startGame } = useGame();

  useEffect(() => {
    startGame();
  }, [startGame]);

  if (!currentCase) {
    return <div>Loading...</div>;
  }

  return (
    <Background image={currentCase.background}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Dialogue text={currentCase.scenario} />
        <Button onClick={() => navigate('/clues')} text="사건 조사 시작" />
      </motion.div>
    </Background>
  );
};

export default IntroPage;

/*
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';
import Background from '../components/Background';
import Dialogue from '../components/Dialogue';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const IntroPage = () => {
  const navigate = useNavigate();
  const { currentCase, startGame } = useGame();

  if (!currentCase) {
    return <div>Loading...</div>;
  }

  const handleStartGame = () => {
    startGame();
    navigate('/clues');
  };

  return (
    <Background image={currentCase.background}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Dialogue text={currentCase.scenario} />
        <Button onClick={handleStartGame} text="사건 조사 시작" />
      </motion.div>
    </Background>
  );
};

export default IntroPage;
*/
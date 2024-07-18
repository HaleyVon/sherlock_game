import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';
import Background from '../components/Background';
import CharacterCard from '../components/CharacterCard';
import WeaponCard from '../components/WeaponCard';
import Slider from '../components/Slider';
import Button from '../components/Button';
import Popup from '../components/Popup';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StatsBox = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const HintBox = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
`;

const DeductionPage = () => {
  const navigate = useNavigate();
  const { 
    currentCase, 
    selectedSuspect, 
    setSelectedSuspect, 
    selectedWeapon, 
    setSelectedWeapon, 
    attempts, 
    makeGuess, 
    reputation, 
    score, 
    timeLeft, 
    getHint,
    isTimerRunning
  } = useGame();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [currentHint, setCurrentHint] = useState('');

  const handleGuess = () => {
    if (selectedSuspect && selectedWeapon) {
      const result = makeGuess();
      setPopupMessage(result.correct ? "정답입니다!" : `틀렸습니다. 기회가 ${result.attemptsLeft}번 남았습니다.`);
      setIsPopupOpen(true);
      if (result.correct || result.attemptsLeft === 0) {
        setTimeout(() => navigate('/result'), 2000);
      }
    }
  };

  const handleGetHint = () => {
    const hint = getHint();
    setCurrentHint(hint);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <Background image={currentCase.background}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <StatsBox>
          <p>시간: {isTimerRunning ? formatTime(timeLeft) : "시간 정지"}</p>
          <p>명성: {reputation}</p>
          <p>점수: {score}</p>
          <p>남은 기회: {attempts}</p>
        </StatsBox>
        <Slider>
          {currentCase.suspects.map(suspect => (
            <CharacterCard
              key={suspect.name}
              character={suspect}
              onClick={() => setSelectedSuspect(suspect)}
              isSelected={selectedSuspect?.name === suspect.name}
            />
          ))}
        </Slider>
        <Slider>
          {currentCase.weapons.map(weapon => (
            <WeaponCard
              key={weapon.name}
              weapon={weapon}
              onClick={() => setSelectedWeapon(weapon)}
              isSelected={selectedWeapon?.name === weapon.name}
            />
          ))}
        </Slider>
        <Button onClick={handleGuess} text="추리 제출" disabled={!selectedSuspect || !selectedWeapon} />
        <Button onClick={handleGetHint} text="힌트 얻기 (-2 명성)" />
        {currentHint && <HintBox>{currentHint}</HintBox>}
        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
          <p>{popupMessage}</p>
        </Popup>
      </motion.div>
    </Background>
  );
};

export default DeductionPage;

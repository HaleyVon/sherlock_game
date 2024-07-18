import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';
import Background from '../components/Background';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const EndingContainer = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
`;

const Headline = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const NewspaperImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-bottom: 20px;
`;

const Stats = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const ResultPage = () => {
  const navigate = useNavigate();
  const { currentCase, selectedSuspect, selectedWeapon, score, reputation, startGame } = useGame();

  const isCorrect = 
    selectedSuspect?.name === currentCase.solution.suspect &&
    selectedWeapon?.name === currentCase.solution.weapon;

  const headline = isCorrect
    ? "셜록, 명탐정의 명성을 지키다"
    : "셜록, 추리도 못하는 탐정";

  const newspaperImage = isCorrect
    ? "/images/newspaper/success.png"
    : "/images/newspaper/failure.png";

  const handleNewGame = () => {
    startGame();
    navigate('/');
  };

  const handleShare = () => {
    const shareUrl = window.location.origin; // 현재 웹사이트의 기본 URL
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert("게임 링크가 클립보드에 복사되었습니다!");
    }).catch(err => {
      console.error('링크 복사 실패:', err);
      alert("링크 복사에 실패했습니다. 수동으로 복사해주세요.");
    });
  };

  return (
    <Background image={currentCase.background}>
      <EndingContainer
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Headline>{headline}</Headline>
        <NewspaperImage src={newspaperImage} alt="Newspaper Headline" />
        <Stats>
          <p>최종 점수: {score}</p>
          <p>최종 명성: {reputation}</p>
        </Stats>
        <ButtonContainer>
          <Button onClick={handleNewGame} text="다시 게임하기" />
          <Button onClick={handleShare} text="공유하기" />
        </ButtonContainer>
      </EndingContainer>
    </Background>
  );
};

export default ResultPage;

/*
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';
import Background from '../components/Background';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const EndingContainer = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  text-align: center;import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';
import Background from '../components/Background';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const EndingContainer = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
`;

const Headline = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const NewspaperImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-bottom: 20px;
`;

const Stats = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const ResultPage = () => {
  const navigate = useNavigate();
  const { currentCase, selectedSuspect, selectedWeapon, score, reputation, startGame } = useGame();

  const isCorrect = 
    selectedSuspect?.name === currentCase.solution.suspect &&
    selectedWeapon?.name === currentCase.solution.weapon;

  const headline = isCorrect
    ? "셜록, 명탐정의 명성을 지키다"
    : "셜록, 추리도 못하는 탐정";

  const newspaperImage = isCorrect
    ? "/images/newspaper/success.jpg"
    : "/images/newspaper/failure.jpg";
  max-width: 80%;
  margin: 0 auto;
`;

const Headline = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Stats = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const ResultPage = () => {
  const navigate = useNavigate();
  const { currentCase, selectedSuspect, selectedWeapon, score, reputation, startGame } = useGame();

  const isCorrect = 
    selectedSuspect?.name === currentCase.solution.suspect &&
    selectedWeapon?.name === currentCase.solution.weapon;

  const headline = isCorrect
    ? "셜록, 명탐정의 명성을 지키다"
    : "셜록, 추리도 못하는 탐정";

  const handleNewGame = () => {
    startGame();
    navigate('/');
  };

  const handleShare = () => {
    // 공유 기능 구현 (예: 소셜 미디어 공유)
    alert("결과가 공유되었습니다!");
  };

  return (
    <Background image={currentCase.background}>
      <EndingContainer
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Headline>{headline}</Headline>
        <Stats>
          <p>최종 점수: {score}</p>
          <p>최종 명성: {reputation}</p>
        </Stats>
        <ButtonContainer>
          <Button onClick={handleNewGame} text="다시 게임하기" />
          <Button onClick={handleShare} text="공유하기" />
        </ButtonContainer>
      </EndingContainer>
    </Background>
  );
};

export default ResultPage;
*/

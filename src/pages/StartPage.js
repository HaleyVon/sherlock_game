import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1a1a1a;
  color: #ffffff;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const StartPage = () => {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('/intro');
  };

  return (
    <StartContainer>
      <Title>명탐정 셜록</Title>
      <Button onClick={handleStartGame} text="게임 시작하기" />
    </StartContainer>
  );
};

export default StartPage;
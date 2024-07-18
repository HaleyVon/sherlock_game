import React, { createContext, useState, useContext, useEffect } from 'react';
import { cases } from '../data/cases';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);
  const [attempts, setAttempts] = useState(5);
  const [score, setScore] = useState(0);
  const [reputation, setReputation] = useState(100);
  const [selectedSuspect, setSelectedSuspect] = useState(null);
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const [clueIndex, setClueIndex] = useState(0);
  const [message, setMessage] = useState('');
  const [difficulty, setDifficulty] = useState('normal');
  const [timeLeft, setTimeLeft] = useState(300);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const startGame = () => {
    const randomIndex = Math.floor(Math.random() * cases.length);
    setCurrentCaseIndex(randomIndex);
    setAttempts(5);
    setScore(0);
    setReputation(100);
    setClueIndex(0);
    setMessage('');
    setTimeLeft(difficulty === 'easy' ? 420 : difficulty === 'normal' ? 300 : 180);
    setIsTimerRunning(true);
    setSelectedSuspect(null);
    setSelectedWeapon(null);
  };

  const currentCase = cases[currentCaseIndex];


  const makeGuess = () => {
    const currentCase = cases[currentCaseIndex];
    setAttempts((prevAttempts) => prevAttempts - 1);
    
    if (
      selectedSuspect?.name === currentCase.solution.suspect &&
      selectedWeapon?.name === currentCase.solution.weapon
    ) {
      const timeBonus = Math.floor(timeLeft / 10);
      const newScore = score + 100 + timeBonus + (attempts * 20);
      setScore(newScore);
      setReputation((prevReputation) => Math.min(prevReputation + 10, 100));
      setMessage(`축하합니다! 사건을 해결했습니다. 점수: ${newScore}`);
      setIsTimerRunning(false);
      return { correct: true, attemptsLeft: attempts - 1 };
    } else {
      const attemptsLeft = attempts - 1;
      setReputation((prevReputation) => Math.max(prevReputation - 5, 0));
      if (attemptsLeft > 0) {
        setMessage(`${6 - attemptsLeft}번째 추리가 실패했습니다. 명성이 5 깎입니다. 남은 기회: ${attemptsLeft}`);
      } else {
        setMessage(`모든 추리 기회를 소진했습니다. 게임 오버!`);
        setIsTimerRunning(false);
      }
      return { correct: false, attemptsLeft };
    }
  };

  const getHint = () => {
    const currentCase = cases[currentCaseIndex];
    if (clueIndex < currentCase.clues.length - 1) {
      setReputation((prevReputation) => Math.max(prevReputation - 2, 0));
      setClueIndex((prevIndex) => prevIndex + 1);
      return currentCase.clues[clueIndex + 1];
    }
    return "더 이상 사용 가능한 힌트가 없습니다.";
  };

  const value = {
    currentCase: cases[currentCaseIndex],
    attempts,
    score,
    reputation,
    selectedSuspect,
    setSelectedSuspect,
    selectedWeapon,
    setSelectedWeapon,
    clueIndex,
    message,
    difficulty,
    setDifficulty,
    timeLeft,
    startGame,
    makeGuess,
    getHint,
    isTimerRunning,
  };

  return (
    <GameContext.Provider value={{
      currentCase,
      attempts,
      score,
      reputation,
      selectedSuspect,
      setSelectedSuspect,
      selectedWeapon,
      setSelectedWeapon,
      clueIndex,
      message,
      difficulty,
      setDifficulty,
      timeLeft,
      startGame,
      makeGuess,
      getHint,
      isTimerRunning,
    }}>
      {children}
    </GameContext.Provider>
  );
};

/*
import React, { createContext, useState, useContext, useEffect } from 'react';
import { cases } from '../data/cases';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);
  const [attempts, setAttempts] = useState(5);
  const [score, setScore] = useState(0);
  const [reputation, setReputation] = useState(100);
  const [selectedSuspect, setSelectedSuspect] = useState(null);
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const [clueIndex, setClueIndex] = useState(0);
  const [message, setMessage] = useState('');
  const [difficulty, setDifficulty] = useState('normal');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setMessage('시간이 초과되었습니다!');
      setAttempts(0);
      setIsTimerRunning(false);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft]);

  const startGame = () => {
    setAttempts(5);
    setScore(0);
    setReputation(100);
    setClueIndex(0);
    setMessage('');
    setTimeLeft(difficulty === 'easy' ? 420 : difficulty === 'normal' ? 300 : 180);
    setIsTimerRunning(true);
    setSelectedSuspect(null);
    setSelectedWeapon(null);
  };

  const makeGuess = () => {
    const currentCase = cases[currentCaseIndex];
    setAttempts((prevAttempts) => prevAttempts - 1);
    
    if (
      selectedSuspect?.name === currentCase.solution.suspect &&
      selectedWeapon?.name === currentCase.solution.weapon
    ) {
      const timeBonus = Math.floor(timeLeft / 10);
      const newScore = score + 100 + timeBonus + (attempts * 20);
      setScore(newScore);
      setReputation((prevReputation) => Math.min(prevReputation + 10, 100));
      setMessage(`축하합니다! 사건을 해결했습니다. 점수: ${newScore}`);
      setIsTimerRunning(false);
      return { correct: true, attemptsLeft: attempts - 1 };
    } else {
      const attemptsLeft = attempts - 1;
      setReputation((prevReputation) => Math.max(prevReputation - 5, 0));
      if (attemptsLeft > 0) {
        setMessage(`${6 - attemptsLeft}번째 추리가 실패했습니다. 명성이 5 깎입니다. 남은 기회: ${attemptsLeft}`);
      } else {
        setMessage(`모든 추리 기회를 소진했습니다. 게임 오버!`);
        setIsTimerRunning(false);
      }
      return { correct: false, attemptsLeft };
    }
  };

  const getHint = () => {
    const currentCase = cases[currentCaseIndex];
    if (clueIndex < currentCase.clues.length - 1) {
      setReputation((prevReputation) => Math.max(prevReputation - 2, 0));
      setClueIndex((prevIndex) => prevIndex + 1);
      return currentCase.clues[clueIndex + 1];
    }
    return "더 이상 사용 가능한 힌트가 없습니다.";
  };

  const value = {
    currentCase: cases[currentCaseIndex],
    attempts,
    score,
    reputation,
    selectedSuspect,
    setSelectedSuspect,
    selectedWeapon,
    setSelectedWeapon,
    clueIndex,
    message,
    difficulty,
    setDifficulty,
    timeLeft,
    startGame,
    makeGuess,
    getHint,
    isTimerRunning,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
*/
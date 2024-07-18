import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GameProvider } from './contexts/GameContext';
import StartPage from './pages/StartPage';
import IntroPage from './pages/IntroPage';
import CluePage from './pages/CluePage';
import DeductionPage from './pages/DeductionPage';
import ResultPage from './pages/ResultPage';

const App = () => {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/clues" element={<CluePage />} />
          <Route path="/deduction" element={<DeductionPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Router>
    </GameProvider>
  );
};

export default App;

/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GameProvider } from './contexts/GameContext';
import IntroPage from './pages/IntroPage';
import CluePage from './pages/CluePage';
import DeductionPage from './pages/DeductionPage';
import ResultPage from './pages/ResultPage';

const App = () => {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/clues" element={<CluePage />} />
          <Route path="/deduction" element={<DeductionPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Router>
    </GameProvider>
  );
};

export default App;
*/
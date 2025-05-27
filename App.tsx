
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="quiz/:quizDate" element={<QuizPage />} />
        <Route path="results/:quizDate" element={<ResultsPage />} />
        <Route path="*" element={ // Basic 404
            <div className="text-center py-10">
                <h1 className="text-3xl font-bold text-theme-primary">404 - Page non trouvée</h1>
                <p className="text-theme-text-light mt-4">Désolé, la page que vous cherchez n'existe pas.</p>
            </div>
        } />
      </Route>
    </Routes>
  );
};

export default App;

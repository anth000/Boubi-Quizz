
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { tousLesQuestionnaires } from '../quizData';
import { Question, OptionKey, UserAnswers } from '../types';
import QuestionCard from './QuestionCard';
import Button from './Button';
import { formatDisplayDate } from '../utils/dateUtils';

const QuizPage: React.FC = () => {
  const { quizDate } = useParams<{ quizDate: string }>();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [quizTheme, setQuizTheme] = useState<string | undefined>(undefined);
  const [currentAnswers, setCurrentAnswers] = useState<UserAnswers>({});

  useEffect(() => {
    if (quizDate && tousLesQuestionnaires[quizDate]) {
      const quizDetails = tousLesQuestionnaires[quizDate];
      setQuestions(quizDetails.questions);
      setQuizTheme(quizDetails.theme);
      setCurrentAnswers({}); // Reset answers when quiz changes
    } else {
      // Handle quiz not found, navigate to a 404 page or home
      navigate('/');
    }
  }, [quizDate, navigate]);

  const handleOptionSelect = (questionId: number, optionKey: OptionKey) => {
    setCurrentAnswers(prev => ({
      ...prev,
      [questionId]: optionKey,
    }));
  };

  const handleSubmit = () => {
    // Could add validation: ensure all questions are answered
    // For now, directly navigate to results
    if (quizDate) {
      navigate(`/results/${quizDate}`, { state: { answers: currentAnswers, questions, theme: quizTheme } });
    }
  };

  if (!questions.length || !quizDate) {
    return <div className="text-center p-8">Chargement du questionnaire...</div>;
  }

  const allQuestionsAnswered = questions.length === Object.keys(currentAnswers).length;

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-theme-primary text-center mb-6">
        Questionnaire du {formatDisplayDate(quizDate)}
        {quizTheme ? ` - ${quizTheme}` : ''}
      </h2>
      {questions.map((q, index) => (
        <QuestionCard
          key={q.id}
          question={q}
          questionNumber={index + 1}
          selectedOption={currentAnswers[q.id]}
          onOptionSelect={handleOptionSelect}
          isSubmitted={false} // Options are active on this page
        />
      ))}
      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link to="/">
          <Button variant="ghost">Retour à l'accueil</Button>
        </Link>
        <Button onClick={handleSubmit} disabled={!allQuestionsAnswered} className="w-full sm:w-auto">
          {allQuestionsAnswered ? "Soumettre mes réponses" : `Répondez à ${questions.length - Object.keys(currentAnswers).length} question(s) restante(s)`}
        </Button>
      </div>
    </div>
  );
};

export default QuizPage;

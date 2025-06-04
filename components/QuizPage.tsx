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
  const [currentAnswers, setCurrentAnswers] = useState<UserAnswers>({});
  const [quizTitle, setQuizTitle] = useState<string>("");

  useEffect(() => {
    if (quizDate && tousLesQuestionnaires[quizDate]) {
      setQuestions(tousLesQuestionnaires[quizDate].questions);
      setQuizTitle(tousLesQuestionnaires[quizDate].title);
      setCurrentAnswers({}); // Reset answers when quiz changes
    } else {
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
    if (quizDate) {
      navigate(`/results/${quizDate}`, { state: { answers: currentAnswers, questions } });
    }
  };

  if (!questions.length || !quizDate) {
    return <div className="text-center p-8">Chargement du questionnaire...</div>;
  }

  const allQuestionsAnswered = questions.length === Object.keys(currentAnswers).length;

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-theme-primary text-center mb-2">
        {quizTitle}
      </h2>
      <p className="text-center text-theme-text-light mb-6">
        {formatDisplayDate(quizDate)}
      </p>
      {questions.map((q, index) => (
        <QuestionCard
          key={q.id}
          question={q}
          questionNumber={index + 1}
          selectedOption={currentAnswers[q.id]}
          onOptionSelect={handleOptionSelect}
          isSubmitted={false}
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
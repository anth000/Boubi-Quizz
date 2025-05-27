
import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { Question, UserAnswers, OptionKey } from '../types';
import ResultItem from './ResultItem';
import Button from './Button';
import { formatDisplayDate } from '../utils/dateUtils';

const ResultsPage: React.FC = () => {
  const { quizDate } = useParams<{ quizDate: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [submittedAnswers, setSubmittedAnswers] = useState<UserAnswers | null>(null);
  
  useEffect(() => {
    if (location.state?.questions && location.state?.answers) {
      setQuestions(location.state.questions as Question[]);
      setSubmittedAnswers(location.state.answers as UserAnswers);
    } else {
      // If state is lost (e.g. page refresh), redirect or show error
      // For simplicity, redirecting to home. A more robust solution might involve session/local storage.
      if (quizDate) {
         // Attempt to load questions if only answers are missing, but this is not ideal without persisted answers
         // This part is tricky without proper state persistence. The prompt asked for no DB.
         // We'll rely on location.state for now.
      }
      // If state is completely lost, user shouldn't be here.
      // navigate('/');
      // For now, let's allow it to try and render with what it has, or show error message
    }
  }, [location.state, quizDate, navigate]);

  if (!quizDate || !questions || !submittedAnswers) {
    return (
      <div className="text-center p-8">
        <p className="text-xl text-theme-text-light mb-4">Impossible d'afficher les résultats.</p>
        <p className="text-sm text-theme-text-light mb-6">Les données du questionnaire ou vos réponses n'ont pas été trouvées. Cela peut arriver si la page a été rechargée.</p>
        <Link to="/">
          <Button variant="primary">Retour à l'accueil</Button>
        </Link>
      </div>
    );
  }

  let score = 0;
  questions.forEach(q => {
    if (submittedAnswers[q.id] && submittedAnswers[q.id] === q.reponseCorrecte) {
      score++;
    }
  });

  const scorePercentage = (score / questions.length) * 100;
  let feedbackMessage = "";
  if (scorePercentage === 100) {
    feedbackMessage = "Excellent ! Score parfait ! 🎉";
  } else if (scorePercentage >= 75) {
    feedbackMessage = "Très bien ! Continue comme ça ! 💪";
  } else if (scorePercentage >= 50) {
    feedbackMessage = "Pas mal ! Chaque erreur est une leçon. 😊";
  } else {
    feedbackMessage = "Ne te décourage pas ! L'important c'est d'apprendre. 💖";
  }


  return (
    <div className="space-y-8">
      <section className="text-center p-6 bg-rose-100 rounded-lg shadow">
        <h2 className="text-3xl font-bold text-theme-primary mb-2">
          Résultats du Questionnaire du {formatDisplayDate(quizDate)}
        </h2>
        <p className="text-2xl font-semibold text-theme-text-main">
          Votre note: {score} / {questions.length} ({scorePercentage.toFixed(0)}%)
        </p>
        <p className="text-lg text-theme-accent mt-2">{feedbackMessage}</p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-theme-text-main mb-6">Détail des réponses :</h3>
        {questions.map((q, index) => (
          <ResultItem
            key={q.id}
            question={q}
            questionNumber={index + 1}
            userAnswerKey={submittedAnswers[q.id] as OptionKey | undefined}
          />
        ))}
      </section>

      <div className="mt-10 text-center">
        <Link to="/">
          <Button variant="primary" className="text-lg">
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ResultsPage;

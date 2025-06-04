
import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { Question, UserAnswers, OptionKey } from '../types';
import { tousLesQuestionnaires } from '../quizData'; // Import for fallback theme
import ResultItem from './ResultItem';
import Button from './Button';
import { formatDisplayDate } from '../utils/dateUtils';

const ResultsPage: React.FC = () => {
  const { quizDate } = useParams<{ quizDate: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [submittedAnswers, setSubmittedAnswers] = useState<UserAnswers | null>(null);
  const [quizTheme, setQuizTheme] = useState<string | undefined>(undefined);
  
  useEffect(() => {
    let themeFromState: string | undefined = undefined;
    if (location.state?.questions && location.state?.answers) {
      setQuestions(location.state.questions as Question[]);
      setSubmittedAnswers(location.state.answers as UserAnswers);
    if (location.state.theme) {
        themeFromState = location.state.theme as string;
        setQuizTheme(themeFromState);
      }
    }
    
    // Fallback for theme if not in state (e.g., direct navigation/refresh if questions/answers were persisted differently)
    // Or if state was partially lost but quizDate is valid
    if (!themeFromState && quizDate && tousLesQuestionnaires[quizDate]?.theme) {
      setQuizTheme(tousLesQuestionnaires[quizDate].theme);
    }
    
    // If essential data (questions/answers) is missing after trying to load from state
    if (!location.state?.questions || !location.state?.answers) {
        // This part can be enhanced if we had persistent storage for answers.
        // For now, if questions and answers are not in state, we show the error message.
        // The theme fallback above might still set the theme if quizDate is valid,
        // but the page will likely render the error message if questions/answers are missing.
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
    feedbackMessage = "Incroyable Boubi ! 100% ! Tu es une véritable championne, mon lapin sexy des îles du sud ! Je suis tellement fier de toi ! 🏆💖🎉"; 
  } else if (scorePercentage >= 90) {
    feedbackMessage = "Bravo mon lapin sexy des îles du sud ! C'est un excellent résultat ! Chaque jour tu te rapproches de la victoire ! 💖👍 Très bien ! Continue comme ça ! 💪";
  } else if (scorePercentage >= 80) {
    feedbackMessage = "Wouah Boubi ! Quel talent ! Tu es vraiment douée. Fière de toi ! 💪😘";   
  } else if (scorePercentage >= 70) {
    feedbackMessage = "Très bien, ma Boubi ! Tu progresses à une vitesse folle ! Continue comme ça, tu es une star ! ✨😊";
  } else if (scorePercentage >= 60) {
    feedbackMessage = "Super score Boubi c'est réussi ! Tu es sur la bonne voie ! C'est la note de passage mais je suis sur que t'es capble de mieux ! 💪💖";
  } else if (scorePercentage >= 50) {
    feedbackMessage = "Pas mal du tout, Boubi ! Chaque bonne réponse est une victoire, et chaque erreur une leçon. On continue ensemble, mon lapin sexy des îles du sud ! 😊💖";
  } else if (scorePercentage >= 25) { 
    feedbackMessage = "C'est déjà un bon début ! On analyse les erreurs et on revient plus forte demain ! Tu vas y arriver ! 😉💖"
  } else {
    feedbackMessage = "Ne te décourage surtout pas, ma Boubi d'amour ! C'est en s'entraînant qu'on devient plus fort. Je suis là pour toi. Chaque jour est une nouvelle chance ! 💖💖💖";
  }


  return (
    <div className="space-y-8">
      <section className="text-center p-6 bg-rose-100 rounded-lg shadow">
        <h2 className="text-3xl font-bold text-theme-primary mb-2">
          Résultats du Questionnaire du {formatDisplayDate(quizDate)}
          {quizTheme ? ` - ${quizTheme}` : ''}
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

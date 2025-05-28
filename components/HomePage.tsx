
import React from 'react';
import { Link } from 'react-router-dom';
import { tousLesQuestionnaires } from '../quizData';
import { getCurrentDateFormatted, formatDisplayDate } from '../utils/dateUtils';
import Button from './Button';

const HomePage: React.FC = () => {
  const today = getCurrentDateFormatted();
  const quizForToday = tousLesQuestionnaires[today];

  const now = new Date(today + 'T00:00:00');
  const pastQuizDates = Object.keys(tousLesQuestionnaires)
  .filter(date => new Date(date) < now)
  .sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  return (
    <div className="space-y-8">
      <section className="text-center p-6 bg-rose-100 rounded-lg shadow">
        <h2 className="text-3xl font-semibold text-theme-primary mb-3">Bienvenue BOUBI !</h2>
        <p className="text-theme-text-light text-lg">
          C'est ton espace personnel pour briller. Chaque jour un nouveau défi pour te rapprocher de ton objectif !
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-theme-text-main mb-4">Questionnaire du Jour</h3>
        {quizForToday ? (
          <Link to={`/quiz/${today}`}>
            <Button variant="primary" className="w-full text-lg">
              Commencer le Questionnaire du {formatDisplayDate(today)}
            </Button>
          </Link>
        ) : (
          <p className="text-theme-text-light p-4 bg-rose-100 rounded-md text-center">
            Pas de nouveau questionnaire pour aujourd'hui. Reviens plus tard ou consulte les anciens questionnaires !
          </p>
        )}
      </section>

      {pastQuizDates.length > 0 && (
        <section>
          <h3 className="text-2xl font-semibold text-theme-text-main mb-4">Anciens Questionnaires</h3>
          <ul className="space-y-3">
            {pastQuizDates.map(date => (
              <li key={date} className="bg-rose-100 hover:bg-rose-200 transition-colors duration-150 rounded-md shadow-sm">
                <Link to={`/quiz/${date}`} className="block p-4 text-theme-primary hover:text-theme-primary-hover font-medium">
                  Questionnaire du {formatDisplayDate(date)}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default HomePage;

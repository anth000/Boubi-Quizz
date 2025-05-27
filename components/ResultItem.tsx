
import React from 'react';
import { Question, OptionKey } from '../types';

interface ResultItemProps {
  question: Question;
  questionNumber: number;
  userAnswerKey: OptionKey | undefined;
}

const ResultItem: React.FC<ResultItemProps> = ({ question, questionNumber, userAnswerKey }) => {
  const isCorrect = userAnswerKey === question.reponseCorrecte;
  const correctOptionText = question.options[question.reponseCorrecte];
  const userAnswerText = userAnswerKey ? question.options[userAnswerKey] : "Pas de réponse";

  return (
    <div className={`p-5 mb-6 rounded-lg shadow-md border-l-4 ${isCorrect ? 'border-theme-correct bg-green-50' : 'border-theme-incorrect bg-red-50'}`}>
      <h5 className="text-md font-semibold text-theme-text-main mb-1">
        Question {questionNumber}: <span className="italic text-sm">{question.question}</span>
      </h5>
      
      <p className="text-sm text-theme-text-light mb-1">
        Votre réponse: <span className={`font-semibold ${isCorrect ? 'text-theme-correct' : 'text-theme-incorrect'}`}>
          {userAnswerKey ? `${userAnswerKey}. ${userAnswerText}` : "Non répondue"}
        </span>
        {isCorrect ? (
          <span className="text-theme-correct ml-2"> (Correct ✔)</span>
        ) : (
          <span className="text-theme-incorrect ml-2"> (Incorrect ❌)</span>
        )}
      </p>

      {!isCorrect && (
        <p className="text-sm text-theme-text-light mb-1">
          Réponse correcte: <span className="font-semibold text-theme-correct">{question.reponseCorrecte}. {correctOptionText}</span>
        </p>
      )}

      <p className="mt-2 text-xs sm:text-sm text-theme-text-light p-3 bg-opacity-50 bg-gray-100 rounded-md">
        <span className="font-semibold">Justification:</span> {question.justification}
      </p>
    </div>
  );
};

export default ResultItem;

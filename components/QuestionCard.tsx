
import React from 'react';
import { Question, OptionKey } from '../types';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  selectedOption: OptionKey | undefined;
  onOptionSelect: (questionId: number, optionKey: OptionKey) => void;
  isSubmitted: boolean; // To disable options after submission, if needed on this card.
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  selectedOption,
  onOptionSelect,
  isSubmitted
}) => {
  const optionKeys = Object.keys(question.options) as OptionKey[];

  return (
    <div className="mb-8 p-5 bg-white rounded-lg shadow-lg border border-rose-100">
      <h4 className="text-lg font-semibold text-theme-text-main mb-1">
        Question {questionNumber}:
      </h4>
      <p className="text-theme-text-main mb-4 text-base">{question.question}</p>
      <div className="space-y-3">
        {optionKeys.map(key => (
          <button
            key={key}
            onClick={() => !isSubmitted && onOptionSelect(question.id, key)}
            disabled={isSubmitted}
            className={`w-full text-left p-3 border rounded-md transition-all duration-150 ease-in-out
              ${isSubmitted ? 'cursor-not-allowed' : 'hover:border-theme-primary hover:bg-rose-50'}
              ${selectedOption === key 
                ? 'bg-theme-secondary border-theme-primary ring-2 ring-theme-primary' 
                : 'bg-white border-rose-200'}
            `}
          >
            <span className="font-semibold mr-2">{key}.</span>
            {question.options[key]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;

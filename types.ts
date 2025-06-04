
export enum OptionKeyEnum {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}
export type OptionKey = keyof typeof OptionKeyEnum;

export interface Question {
  id: number;
  question: string;
  options: Record<OptionKey, string>;
  reponseCorrecte: OptionKey;
  justification: string;
}

export interface Quiz {
  questions: Question[];
  theme?: string; // Thème optionnel du quiz
}

export interface QuizData {
  [date: string]: Quiz; // La clé est 'YYYY-MM-DD', la valeur est un objet Quiz
}

export interface UserAnswers {
  [questionId: number]: OptionKey;
}


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
  date: string; // YYYY-MM-DD
  theme: string;
  questions: Question[];
}

export interface QuizEntry {
  theme: string;
  questions: Question[];
}

export interface QuizData {
  [date: string]: QuizEntry; // Key is 'YYYY-MM-DD'
}

export interface UserAnswers {
  [questionId: number]: OptionKey;
}

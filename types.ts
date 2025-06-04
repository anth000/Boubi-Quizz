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
  title: string;
  questions: Question[];
}

export interface QuizData {
  [date: string]: Quiz; // Changed from Question[] to Quiz
}

export interface UserAnswers {
  [questionId: number]: OptionKey;
}
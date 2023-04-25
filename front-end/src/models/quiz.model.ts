import { Question } from './question.model';

export interface Quiz {
    id: string;
    name: string;
    theme: String;
    questions: Question[];
    image:string;
    points: number;
}

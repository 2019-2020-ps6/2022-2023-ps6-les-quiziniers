import { Question } from './question.model';

export interface Quiz {
    points: number;
    id: string;
    name: string;
    theme: string;
    questions: Question[];
    image:string;
}





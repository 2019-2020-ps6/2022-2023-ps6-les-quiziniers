import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
    id: '1',
    label: 'Jean Gabin a joué dans...',
    answers: [
        {
            value: 'Les tuches II',
            isCorrect: false,
        },
        {
            value: 'La grande illusion',
            isCorrect: true,
        }
    ],
  image:"https://imgs.search.brave.com/GinmnByb5ELNdDARTDuxj5kxyPunFt-10JNYBiuz9zc/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL25D/Sk9JS3VrbV9LbjNk/aVFJYjRTU2VNNVVO/aDNXWUhKWWlJNzVq/M3lJdnFTdGVFUTU0/SHBVZjY4cE0yX0Js/bV9iYXNuOVBObzZO/MlliVzJhPXM5MDAt/bW8tYy1jMHhmZmZm/ZmZmZi1yai1rLW5v"
};

export const QUIZ_LIST: Quiz[] = [
    {
        id: '1',
        name: 'Les Acteurs', // What's happening if I change this value..?
        theme: 'Actor',
        questions: [QUESTION_ACTOR],
        image:"https://imgs.search.brave.com/o1vtEBBa7JkMdc69cFWAfAn9NRc_6_15zOHpJaOs9KE/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5j/ZG40VHF0LVFqd3ZD/Sk1OaDFhX0dnSGFF/SyZwaWQ9QXBp"
    },
    {
        id: '2',
        name: 'Les technos WEB',
        questions: [],
        image:"https://imgs.search.brave.com/OqNuZDYb8Sg1V5IaMlmynXYabtMCoCsF7lA6Nqq6VVY/rs:fit:845:346:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhlLzQw/L2E5LzhlNDBhOTQy/MjMxOTY0ZjAzY2Mz/MzMwNzc2NGM4OTFj/LmpwZw"
    }
];

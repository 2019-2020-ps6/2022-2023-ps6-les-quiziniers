import { Question } from '../models/question.model';
export const QUESTION_ACTOR1: Question = {
  id: '1',
  label: 'Jean Gabin a joué dans...',
  answers: [
    {
      value: 'Les tuches II',
      isCorrect: false,
      isSelected: false,
    },
    {
      value: 'La grande illusion',
      isCorrect: true,
      isSelected: false,
    }
    ,{
      value: 'Tranformers',
      isCorrect: false,
      isSelected: false,
    },


  ],
  image:"https://imgs.search.brave.com/GinmnByb5ELNdDARTDuxj5kxyPunFt-10JNYBiuz9zc/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL25D/Sk9JS3VrbV9LbjNk/aVFJYjRTU2VNNVVO/aDNXWUhKWWlJNzVq/M3lJdnFTdGVFUTU0/SHBVZjY4cE0yX0Js/bV9iYXNuOVBObzZO/MlliVzJhPXM5MDAt/bW8tYy1jMHhmZmZm/ZmZmZi1yai1rLW5v"
};

export const QUESTION_ACTOR2: Question = {
  id: '2',
  label: 'Jean Dujardin a joué dans...',
  answers: [
    {
      value: 'Les Tudors',
      isCorrect: false,
      isSelected: false,
    },
    {
      value: 'OSS 117',
      isCorrect: true,
      isSelected: false,
    }
    ,{
      value: 'Peaky Blinders',
      isCorrect: false,
      isSelected: false,
    }
    ],
  image:"https://file1.closermag.fr/var/closermag/storage/images/bio-people/biographie-jean-dujardin-112277/815517-1-fre-FR/Jean-Dujardin.jpg?alias=square500x500&size=x100&format=webp"
}
export const QUESTION_CAPITALES: Question = {
  id: '3',
  label: 'Quelle est la capitale du Burkina Faso ?',
  answers: [
    {
      value: 'Ouagadougou',
      isCorrect: true,
      isSelected: false,
    },
    {
      value: 'Bamako',
      isCorrect: false,
      isSelected: false,
    }
    ,{
      value: 'Abidjan',
      isCorrect: false,
      isSelected: false,
    }
  ],
  image:"https://i0.wp.com/www.vivafrik.com/wp-content/uploads/2018/11/Ouagadougou-Burkina-Faso-la-capitale-africaine-de-le-SEERA-.jpg?fit=800%2C500&ssl=1"
}

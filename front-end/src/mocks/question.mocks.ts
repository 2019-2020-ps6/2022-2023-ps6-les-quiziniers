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
export const QUESTION_HISTOIRE1: Question = {
  id: '4',
  label: "Quand s'est dérouler la battaille de Waterloo ?",
  answers: [
    {
      value: '1815',
      isCorrect: true,
      isSelected: false,
    },
    {
      value: '1805',
      isCorrect: false,
      isSelected: false,
    }
    ,{
      value: '1795',
      isCorrect: false,
      isSelected: false,
    }
  ],
  image:"https://www.larousse.fr/encyclopedie/data/images/1315849-Napol%C3%A9on_Ier.jpg"
}
export const QUESTION_HISTOIRE2: Question = {
  id: '5',
  label: "En quelle année a été élue la première femme présidente de la république ?",
  answers: [
    {
      value: '2016',
      isCorrect: false,
      isSelected: false,
    },
    {
      value: '2001',
      isCorrect: false,
      isSelected: false,
    }
    ,{
      value: '1985',
      isCorrect: true,
      isSelected: false,
    }
  ],
  image:"https://media.sudouest.fr/3528892/1200x-1/so-58bda09f66a4bdfe0c7e46b7-ph0.jpg?v=1488953306"
}

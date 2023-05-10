import {Question, QuestionType} from '../models/question.model';

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
  image:"https://imgs.search.brave.com/GinmnByb5ELNdDARTDuxj5kxyPunFt-10JNYBiuz9zc/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL25D/Sk9JS3VrbV9LbjNk/aVFJYjRTU2VNNVVO/aDNXWUhKWWlJNzVq/M3lJdnFTdGVFUTU0/SHBVZjY4cE0yX0Js/bV9iYXNuOVBObzZO/MlliVzJhPXM5MDAt/bW8tYy1jMHhmZmZm/ZmZmZi1yai1rLW5v",
  type:QuestionType.QCM,
  trackSources:'0'
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
  image:"https://file1.closermag.fr/var/closermag/storage/images/bio-people/biographie-jean-dujardin-112277/815517-1-fre-FR/Jean-Dujardin.jpg?alias=square500x500&size=x100&format=webp",
  type:QuestionType.QCM,
  trackSources : "https://www.youtube.com/watch?v=Zx1_6F-nCaw"
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
  image:"https://i0.wp.com/www.vivafrik.com/wp-content/uploads/2018/11/Ouagadougou-Burkina-Faso-la-capitale-africaine-de-le-SEERA-.jpg?fit=800%2C500&ssl=1",
  type:QuestionType.QCM,
  trackSources:'0'
}
export const QUESTION_HISTOIRE1: Question = {
  id: '4',
  label: "Quand s'est dérouler la bataille de Waterloo ?",
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
  image:"https://www.larousse.fr/encyclopedie/data/images/1315849-Napol%C3%A9on_Ier.jpg",
  type:QuestionType.QCM,
  trackSources:'0'
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
  image:"https://media.sudouest.fr/3528892/1200x-1/so-58bda09f66a4bdfe0c7e46b7-ph0.jpg?v=1488953306",
  type:QuestionType.QCM,
  trackSources:"0"
}
export const QUESTION_BLINDTEST_ANNEE2000: Question = {
  id: '6',
  label: "Quelle est cette musique ?",
  answers: [
    {
      value: 'Toutes le femme de ta vie de L5',
      isCorrect: false,
      isSelected: false,
    },
    {
      value: 'Crazy in love de Beyoncé',
      isCorrect: true,
      isSelected: false,
    }
    ,{
      value: 'In da club de 50 cent',
      isCorrect: false,
      isSelected: false,
    }
  ]
  ,image:"https://i.ytimg.com/vi/ViwtNLUqkMY/maxresdefault.jpg",
  type:QuestionType.Blindtest,
  trackSources:"https://hiphopdes.com/uploads/2020/02/01%20Crazy%20in%20Love%20(feat_%20Jay-Z).mp3?_=1%22%3E"
}

export const QUESTION_HISTOIRE3: Question = {
  id: '7',
  label: "Dans quelle bataille les forces alliées ont-elles débarqué en Normandie ?",
  answers: [
    {
      value: 'Bataille de Stalingrad',
      isCorrect: false,
      isSelected: false,
    },
    {
      value: 'Bataille de Dunkerque',
      isCorrect: false,
      isSelected: false,
    }
    ,{
      value: ' Bataille de Normandie',
      isCorrect: true,
      isSelected: false,
    }
  ],
  image:"https://www.ecpad.fr/wp-content/uploads/2019/05/photogramme-debarquement-du-6-juin-et-bataille-de-normandie-1280x650.jpg",
  type:QuestionType.QCM,
  trackSources:"0"
}

export const QUESTION_HISTOIRE4: Question = {
  id: '8',
  label: "Quelle bataille a vu la victoire des forces grecques contre les Perses en 480 avant J.-C. ?",
  answers: [
    {
      value: 'Bataille de Salamine',
      isCorrect: true,
      isSelected: false,
    },
    {
      value: 'Bataille de Marathon',
      isCorrect: false,
      isSelected: false,
    }
    ,{
      value: ' Bataille de Thermopyles',
      isCorrect: false,
      isSelected: false,
    }
  ],
  image:"https://odysseum.eduscol.education.fr/sites/default/files/2019-12/SALAMINE%20von%20Kaulbach.png",
  type:QuestionType.QCM,
  trackSources:"0"
}

export const QUESTION_HISTOIRE5: Question = {
  id: '9',
  label: "Dans quelle bataille les forces romaines ont-elles vaincu Carthage ?",
  answers: [
    {
      value: 'Bataille de Cannae',
      isCorrect: false,
      isSelected: false,
    },
    {
      value: 'Bataille de Zama',
      isCorrect: true,
      isSelected: false,
    }
    ,{
      value: ' Bataille de Trasimène',
      isCorrect: false,
      isSelected: false,
    }
  ],
  image:"https://odysseum.eduscol.education.fr/sites/default/files/2019-12/Arista_romano%2C_battaglia_di_zama%2C_1570-1600_ca_02.jpeg",
  type:QuestionType.QCM,
  trackSources:"0"
}
export const QUESTION_HISTOIRE6: Question = {
  id: '10',
  label: "Dans quelle bataille de la Première Guerre mondiale les forces allemandes ont-elles été vaincues en 1918 ?",
  answers: [
    {
      value: 'Bataille de la Marne',
      isCorrect: false,
      isSelected: false,
    },
    {
      value: "Bataille d'Amiens",
      isCorrect: true,
      isSelected: false,
    }
    ,{
      value: ' Bataille de Verdun',
      isCorrect: false,
      isSelected: false,
    }
  ],
  image:"https://upload.wikimedia.org/wikipedia/commons/9/9f/8th_August_1918_%28Will_Longstaff%29.jpg",
  type:QuestionType.QCM,
  trackSources:"0"
}
export const QUESTION_BLINDTEST_ANNEE20002: Question = {
  id: '11',
  label: "Quel est le nom de l'artiste qui a interprété cette chanson R&B en 2001 ?",
  answers: [
    {
      value: "Destiny's Child",
      isCorrect: true,
      isSelected: false,
    },
    {
      value: 'Alicia Keys',
      isCorrect: false,
      isSelected: false,
    }
    ,{
      value: 'Beyoncé',
      isCorrect: false,
      isSelected: false,
    }
  ]
  ,image:"https://magazineantidote.com/wp-content/uploads/2019/02/survivor-cover-album-desitnys-child-survival-issue-magazine-antidote-1024x683.jpg",
  type:QuestionType.Blindtest,
  trackSources:"https://www.naijagreen.com/wp-content/uploads/music/2021/09/Destinys_Child_-_Survivor_[NaijaGreen.Com]_.mp3"
}
export const QUESTION_BLINDTEST_ANNEE20003: Question = {
  id: '13',
  label: "Quelle chanson a été un succès international pour Shakira en 2006 ?",
  answers: [
    {
      value: "Hips Don't Lie",
      isCorrect: true,
      isSelected: false,
    },
    {
      value: 'Whenever, Wherever',
      isCorrect: false,
      isSelected: false,
    }
    ,{
      value: 'Waka Waka',
      isCorrect: false,
      isSelected: false,
    }
  ]
  ,image:"https://i.ytimg.com/vi/DUT5rEU6pqM/maxresdefault.jpg",
  type:QuestionType.Blindtest,
  trackSources:"https://files.gospeljingle.com/uploads/music/2023/01/Shakira_-_Hips_Dont_Lie.mp3"
}



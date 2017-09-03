export const companies = [
  {
    id: '1',
    name: 'Robbie Rotten Campaign',
    icon: 'http://i0.kym-cdn.com/entries/icons/original/000/021/493/robbie_rotten.jpeg',
    questionCount: 15
  },
  {
    id: '2',
    name: 'Sportacus Healthy Program',
    icon: 'https://vignette4.wikia.nocookie.net/lazy-town4817/images/c/c6/Nick_Jr._LazyTown_Sportacus_2.png/revision/latest?cb=20161218032644',
    questionCount: 3
  },
  {
    id: '3',
    name: 'Упяска дэсу',
    icon: 'https://cs6.pikabu.ru/post_img/2015/01/28/9/1422457333_525912262.gif',
    questionCount: 151234
  },
];

export const company1 = {
  id: '1',
  name: 'Robbie Rotten Campaign',
  description: 'We are number one!',
  icon: 'http://i0.kym-cdn.com/entries/icons/original/000/021/493/robbie_rotten.jpeg',
  roles: [
    {
      id: '1',
      name: 'Villain #1'
    },
    {
      id: '2',
      name: 'Villain #2'
    },
    {
      id: '3',
      name: 'Robbie Double'
    }
  ],
  skills: [
    {
      id: '1',
      name: 'Throw Rotten Tomatoes',
      count: 2
    },
    {
      id: '2',
      name: 'Laziness',
      count: 3
    },
    {
      id: '3',
      name: 'Invent evil schemes',
      count: 1
    },
    {
      id: '4',
      name: 'Never worked with Sportacus',
      count: 151
    }
  ],
  questionCount: 15
};

export const roles = [
  {
    id: '1',
    name: 'Villain #1',
    questionCount: 12
  },
  {
    id: '2',
    name: 'Villain #2',
    questionCount: 12
  },
  {
    id: '3',
    name: 'Robbie Double',
    questionCount: 55
  },
  {
    id: '4',
    name: 'Sportacus apple supplier',
    questionCount: 5
  }
];

export const role1 = {
  id: '1',
  name: 'Villain #1',
  description: 'We are number one!',
  companies: [{
    id: '1',
    name: 'Robbie Rotten Campaign'
  }],
  questions: [
    {
      id: '1',
      name: 'Have you ever used banana peel to make Sportacus trip?',
      difficulty: 2
    },
    {
      id: '2',
      name: 'Do you prefer a cake or an apple for breakfast?',
      difficulty: 1
    }
  ],
  tags: [
    {
      id: '1',
      name: 'Throw Rotten Tomatoes',
      count: 2
    },
    {
      id: '2',
      name: 'Laziness',
      count: 3
    },
    {
      id: '3',
      name: 'Invent evil schemes',
      count: 1
    },
    {
      id: '4',
      name: 'Never worked with Sportacus',
      count: 151
    }
  ],
  questionCount: 12,
  difficulty: 2
};


export const questions = [
  {
    id: '1',
    name: 'Have you ever used banana peel to make Sportacus trip?',
    difficulty: 2
  },
  {
    id: '2',
    name: 'Do you prefer a cake or an apple for breakfast?',
    difficulty: 1
  },
  {
    id: '3',
    name: 'Do you prefer a green or red apples?',
    difficulty: 3
  }
];

export const question1 = {
  id: '1',
  name: 'Do you prefer a cake or an apple for breakfast?',
  description: 'We are number one!',
  answer: ' do this and that in see here and whatever',
  companies: [
    {
      id: '1',
      name: 'Robbie Rotten Campaign'
    },
    {
      id: '2',
      name: 'Star Wars troops Union'
    }
  ],
  roles: [
    {
      id: '1',
      name: 'Villain #1'
    },
    {
      id: '2',
      name: 'Villain #2'
    },
    {
      id: '3',
      name: 'Robbie Double'
    }
  ],
  tags: [
    {
      id: '1',
      name: 'Throw Rotten Tomatoes',
      count: 2
    },
    {
      id: '2',
      name: 'Laziness',
      count: 3
    },
    {
      id: '3',
      name: 'Invent evil schemes',
      count: 1
    },
    {
      id: '4',
      name: 'Never worked with Sportacus',
      count: 151
    }
  ],
  difficulty: 2
};

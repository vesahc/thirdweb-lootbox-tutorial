export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};

const quizQuestions: Question[] = [
  {
    questionText: "What color is the bandana of the dog on the left?",
    image: "https://images.unsplash.com/photo-1508814437933-f0c7d18a9217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    answers: [
      "Trick question: nothing!",
      "Blue",
      "White",
      "Black",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Which shape of glasses is this cool ass dog wearing?",
    image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    answers: ["Square", "Rectangle", "Round", "Who knows?"],
    correctAnswerIndex: 2,
  },
  {
    questionText: "What hood is this bad boy from?",
    image: "https://images.unsplash.com/photo-1517423738875-5ce310acd3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1370&q=80",
    answers: ["McCauley", "Compton", "Inglewood", "Edinburgh"],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "How may dogs does it take to screw in a light bulb?",
    answers: ["80", "100", "-1", "0"],
    correctAnswerIndex: 2,
  },
  {
    questionText: "Who's the best dog?",
    answers: ["Old yeller", "Boy", "Lassie", "Bijou"],
    correctAnswerIndex: 3,
  },
];

export default quizQuestions;

//Global Declarations
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const quizContainer = document.getElementById('quiz-container');

//Start the game state
startBtn.addEventListener('click', function() {
    startQuiz();
})

//Reset the game state
resetBtn.addEventListener('click', function(){

})

//Initiate the quiz
function startQuiz(){
    startBtn.classList.add('hide');

    //reveals the first question
    quizContainer.classlist.remove('hide');
    //another function to pass through questions?

}


//Questions and where each would direct user
//This will minimise html code and make it easier to assign questions to API requests
//Review with team members
//Get elements add attributes? try 
const questions = [
    {
      question: 'Question Here',
      answers: [
        { text: 'Choice here', correct: true },
        { text: 'Choice here', correct: false },
        { text: 'Choice here', correct: false },
        { text: 'Choice here', correct: false }
      ]
    },
    {
      question: 'Question Here',
      answers: [
        { text: 'Choice here', correct: true },
        { text: 'Choice here', correct: false },
        { text: 'Choice here', correct: false },
        { text: 'Choice here', correct: false }
      ]
    },
    {
      question: 'Question Here',
      answers: [
        { text: 'Choice here', correct: true },
        { text: 'Choice here', correct: false},
        { text: 'Choice here', correct: false },
        { text: 'Choice here', correct: false }
    ]
    },
    {
        question: 'Question Here',
        answers: [
          { text: 'Choice here', correct: true },
          { text: 'Choice here', correct: false},
          { text: 'Choice here', correct: false },
          { text: 'Choice here', correct: false }
        ]
    },
    {
        question: 'Question Here',
        answers: [
          { text: 'Choice here', correct: true },
          { text: 'Choice here', correct: false},
          { text: 'Choice here', correct: false },
          { text: 'Choice here', correct: false }
        ]
    },
    {
      question: 'Question Here',
      answers: [
        { text: 'Choice here', correct: true },
        { text: 'Choice here', correct: false },
        { text: 'Choice here', correct: false },
        { text: 'Choice here', correct: false }
      ]
    }
  ]
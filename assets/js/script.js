

// //Global Declarations
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const quizContainer = document.getElementById('quiz-container');

var APIKey = "TBD";

// // TO BE USED WITH FINAL ARRAY // var APIUrl = "www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredientArray;
// // TO BE USED WITH FINAL ARRAY // var ingredientArray = "Gin,Dry_Vermouth, Anis";

// //Start the game state
startBtn.addEventListener('click', function() {
    startQuiz();
})

// //Reset the game state
resetBtn.addEventListener('click', function(){

})

// //Initiate the quiz
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

  //------------------------Fetch Cocktail---------------------------------

  var cocktailName = "blank";



  function getCocktail(ingArray){

    //return function if array is null
    if(ingArray == "" || ingArray == null){
        
      return;
      
    } else {
      
      var ingredients = ingArray;
      var APIUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + ingredients;
    }

    fetch(APIUrl)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {

            console.log(data);

            cocktailName = data.drinks[0].strDrink;
            console.log(cocktailName);

            localStorage.setItem("cocktailName", cocktailName);
        });

    
    
  }

  getCocktail("Margarita");










  
  


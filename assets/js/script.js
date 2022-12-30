
// Ingredient List
var ingredientList =
    [
        category = ['Cocktail', 'Shot', 'Shake', 'Any'],

        spirits = ['Vodka', 'Gin', 'Whiskey', 'Absinthe', 'Rum',
                    'Wine', 'Beer', 'Liqueur', 'Champagne', 'Tequila',
                    'Any'  ],

        mixers = [  'Orange Juice', 'Milk', 'Lemon Juice', 'Orange Bitters', 
                    'Coffee', 'Any'   ],

        glassType = [   'Coupe Glass', 'Martini Glass', 
                        'Highball Glass', 'Margarita Glass', 'Shot Glass',
                        'Any'   ],

        firstLetter = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
                        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
                        'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',    ],
    ]


var quizEl = document.getElementById('quiz-box')

console.log(quizEl)
var questionIndex = 0

console.log(ingredientList[questionIndex][0])
//Input User Answer
function inputAns (event) {

}

// Write New and Answer Set
function writeIngredientBtn(questionIndex) {
    for (let i = 0; i < ingredientList[questionIndex].length; i++ ) {
        console.log(ingredientList[questionIndex])
        var answerEl = document.createElement('button');
        answerEl.textContent = ingredientList[questionIndex][i];

        // answerEl.append(btnText)
        quizEl.append(answerEl)
    }
    
}

writeIngredientBtn(questionIndex)



// //Global Declarations
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const quizContainer = document.getElementById('quiz-container');
var scoreSpan = document.getElementById('score-span');

var APIKey = "TBD";
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<LOCAL STORAGE


// // TO BE USED WITH FINAL ARRAY // var APIUrl = "www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredientArray;
// // TO BE USED WITH FINAL ARRAY // var ingredientArray = "Gin,Dry_Vermouth, Anis";

// //Start the game state
startBtn.addEventListener('click', function() {
    startQuiz();
    document.getElementById('main-btn').classList.add('hide');

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

//function to pass questions - show + hide
function showQuestion(){
  for(var i=0; i > questions.length; i++){
    question.classList.remove("hide");
    question.classList.add("hide")
   
  }
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










  
  



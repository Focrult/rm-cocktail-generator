
// Ingredient List
var ingredientList =
    [
        category =  [
                    question = 'type',
                    types = ['Cocktail', 'Shot', 'Shake', 'Any'],
                    filterDefinition = 'c'
                    ],

        spirits = [  
                  question = 'spirit',
                  types = [ 'Vodka', 'Gin', 'Whiskey', 'Absinthe', 'Rum',
                            'Wine', 'Beer', 'Liqueur', 'Champagne', 'Tequila',
                            'Any'  ],
                  filterDefinition = 'i',
                  ],
        mixers = [
                  question = 'mixer',
                  types = [ 'Orange Juice', 'Milk', 'Lemon Juice', 'Orange Bitters', 
                            'Coffee', 'Any' ],
                  filterDefinition = 'i',
                  ],
        glassType = [
                    question = 'glass type',
                    types = [ 'Coupe Glass', 'Martini Glass', 
                              'Highball Glass', 'Margarita Glass', 'Shot Glass',
                              'Any'   ],
                    filterDefinition = 'g',
                    ],

        // firstLetter = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
        //                 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
        //                 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',    ],
    ]


var quizLi = document.getElementById('quiz-list')

var questionIndex = 0
var drinkFilter = []

console.log(ingredientList[questionIndex][0])

//Save User Answer
function inputAns (event) {
  var ans = 'hello'
  console.log(ans)
}

// Clear Answer List
function clearList() {
  for (let i = 0; i < quizLi.childNodes.length; i++ )
  
}

// Write New and Answer Set
function writeIngredientBtn(questionIndex) {
    for (let i = 0; i < ingredientList[questionIndex][1].length; i++ ) {
        console.log(ingredientList[questionIndex][1])
        var answerEl = document.createElement('button');
        answerEl.textContent = ingredientList[questionIndex][1][i];

        // answerEl.append(btnText)
        quizLi.append(answerEl)
    }
    
}

writeIngredientBtn(questionIndex)



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
  
 // Answer Button Listener 
 quizLi.addEventListener("click", function(event)  { 
                                                      console.log(event.target.textContent)
                                                      var ans = ingredientList[questionIndex][2] + '=' + event.target.textContent
                                                      drinkFilter.push(ans)
                                                      console.log(drinkFilter)
                                                      questionIndex++
                                                      clearList()
                                                      writeIngredientBtn(questionIndex)
                                                    })    
//  $('#city-list').on('click', function(event){









  
  



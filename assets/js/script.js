//Added redirect URL request if error occurs
var redirectURL = './404.html'

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

// Clear Answer List
function clearList() {

  while (quizLi.hasChildNodes()){
    quizLi.removeChild(quizLi.firstChild)
  }
  // console.log(quizLi.childNodes.length)
  // for (let i = 0; i < quizLi.childNodes.length; i++)  {
  //   quizLi.removeChild(quizLi.firstChild)
 }

 function createFilter () {
  // Make all filters lowercase


  // Replace spaces with -

  // Join ingredient array
  var filters = drinkFilter.join('&')
    
  // Make all filters lowercase
    // Replace spaces with -
    filters = filters.replaceAll(' ', '_').toLowerCase();
  console.log(filters)
 }

// Write New and Answer Set
function writeIngredientBtn(questionIndex) {
    for (let i = 0; i < ingredientList[questionIndex][1].length; i++ ) {
        // console.log(ingredientList[questionIndex][1])
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
var scoreSpan = document.getElementById('score-span');

var APIKey = "9973533";
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<LOCAL STORAGE

// //Start the game state
startBtn.addEventListener('click', function() {
    startQuiz();
    document.getElementById('main-btn').classList.add('hide');

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

// const questions = [
//     {
//       question: 'Question Here',
//       answers: [
//         { text: 'Choice here', correct: true },
//         { text: 'Choice here', correct: false },
//         { text: 'Choice here', correct: false },
//         { text: 'Choice here', correct: false }
//       ]
//     },
//     {
//       question: 'Question Here',
//       answers: [
//         { text: 'Choice here', correct: true },
//         { text: 'Choice here', correct: false },
//         { text: 'Choice here', correct: false },
//         { text: 'Choice here', correct: false }
//       ]
//     },
//     {
//       question: 'Question Here',
//       answers: [
//         { text: 'Choice here', correct: true },
//         { text: 'Choice here', correct: false},
//         { text: 'Choice here', correct: false },
//         { text: 'Choice here', correct: false }
//     ]
//     },
//     {
//         question: 'Question Here',
//         answers: [
//           { text: 'Choice here', correct: true },
//           { text: 'Choice here', correct: false},
//           { text: 'Choice here', correct: false },
//           { text: 'Choice here', correct: false }
//         ]
//     },
//     {
//         question: 'Question Here',
//         answers: [
//           { text: 'Choice here', correct: true },
//           { text: 'Choice here', correct: false},
//           { text: 'Choice here', correct: false },
//           { text: 'Choice here', correct: false }
//         ]
//     },
//     {
//       question: 'Question Here',
//       answers: [
//         { text: 'Choice here', correct: true },
//         { text: 'Choice here', correct: false },
//         { text: 'Choice here', correct: false },
//         { text: 'Choice here', correct: false }
//       ]
//     }
//   ]

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

  var cocktailName = "cocktailblank";
  
  function getCocktail(ingArray){

    //return function if array is null
    if(ingArray == "" || ingArray == null){
        
      return;
      
    } else {
      
      var ingredients = ingArray;
      var APIUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=" + ingredients;
    }

    fetch(APIUrl)
        .then(function (response) {
          if(response.status === 404){
            document.location.replace("./404.html");

          } else {
            return response.json();
          }

          

          
          


        })
        .then(function (data) {

            console.log(data.drinks);

            if(data.drinks == "None Found"){
              document.location.replace("./404.html");

            } else {
              cocktailName = data.drinks[0].strDrink;
              console.log(cocktailName);

              localStorage.setItem("cocktailName", cocktailName);
            }

            

            
        });

    
    
  }

  //------------------------Fetch Character---------------------------------

  var characterNumber = "2";

  function getCharacter(){

    var characterUrl = "https://rickandmortyapi.com/api/character/" + characterNumber;

    fetch(characterUrl)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {

          //Create character object for character tile
            var characterObject = {
              name: data.name,
              species: data.species,
              gender: data.gender,
              origin: data.origin.name,
            }

            console.log(characterObject);
            localStorage.setItem("characterName", JSON.stringify(characterObject));
        });

    
    
  }

  // Dry_Vermouth,Gin,Anis
  getCocktail("Dry_Vermouth,Gin,Anis");

 // Answer Button Listener 
 quizLi.addEventListener("click", function(event)  { 
                                                      console.log(event.target.textContent)
                                                      var ans = ingredientList[questionIndex][2] + '=' + event.target.textContent
                                                      drinkFilter.push(ans)
                                                      console.log(drinkFilter)
                                                      questionIndex++
                                                      clearList()
                                                      
                                                      if (questionIndex > 3) {
                                                        createFilter()
                                                      }
                                                      else {
                                                        writeIngredientBtn(questionIndex)
                                                      }
                                                    })    

  getCharacter();




//Start of popup 
//GOAL make the pop-up appear after 2 seconds or user selects instructions tab?
const close2 = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');
const instructions = document.getElementById('instructions');
const title = document.getElementById('body');
setTimeout(function(){ //function to reveal pop-up after a few seconds
  overlay.style.visibility = 'visible';
},4000);
//Add click event when user clicks lets go
close2.addEventListener('click', function() {
  console.log('User clicked lets go!');
    overlay.style.display = "none"; //Makes overlay + Instructions disappear
});
//End of popup

//When user clicks start quiz









  
  



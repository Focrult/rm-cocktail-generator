// //Global Declarations
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const quizContainer = document.getElementById('quiz-container');
var scoreSpan = document.getElementById('score-span');
var countEl = document.querySelector("#count");

var APIKey = "9973533";

//Added redirect URL request if error occurs
var redirectURL = './404.html'
// Ingredient List
var ingredientList =
    [
        // category =  [
        //             question = 'type',
        //             types = ['Cocktail', 'Shot', 'Shake', 'Any'],
        //             filterDefinition = 'c'
        //             ],

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
        // glassType = [
        //             question = 'glass type',
        //             types = [ 'Coupe Glass', 'Martini Glass', 
        //                       'Highball Glass', 'Margarita Glass', 'Shot Glass',
        //                       'Any'   ],
        //             filterDefinition = 'g',
        //             ],

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
  var filters = drinkFilter.join(',')
    
  // Make all filters lowercase
    // Replace spaces with -
    filters = filters.replaceAll(' ', '_').toLowerCase();
  console.log(filters)
 }

 var questionCount = 0;

 //Update page count
 function setCounterText() {
  countEl.textContent = questionCount + "/4";
}

// Write New and Answer Set
function writeIngredientBtn(questionIndex) {
    for (let i = 0; i < ingredientList[questionIndex][1].length; i++ ) {
        // console.log(ingredientList[questionIndex][1])
        var answerEl = document.createElement('button');
        answerEl.textContent = ingredientList[questionIndex][1][i];

        // answerEl.append(btnText)
        quizLi.append(answerEl)

        //Update page count element textcontent with page increment values
        countEl.texcontent = questionCount;
        answerEl.addEventListener("click", function(){
          questionCount++;
          setCounterText();
    })
    }

    
    
}

writeIngredientBtn(questionIndex)




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<LOCAL STORAGE

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
     

      // var APIUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=" + ingredients;

      
      // var APIUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Tonic_Water";

      // var APIUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=" + ingredients;

      
      var APIUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Tonic_Water";

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


          // console.log(data)




            if(data.drinks == "None Found"){
              document.location.replace("./404.html");

            } else {



              var cocktailObject = {
                name: data.drinks[0].strDrink,
                image: data.drinks[0].strDrinkThumb,
              }
              
              
              console.log(cocktailObject);
              localStorage.setItem("cocktailName", JSON.stringify(cocktailObject));

              
              cocktailName = data.drinks[0].strDrink;
              console.log(cocktailName);

              localStorage.setItem("cocktailName", cocktailName);

            }
         
        });

  }

  //Experiment with looking for similarities in API calls. Potential to be used to increase success rate for viable cocktails, dynamically culling cocktails from each ingredient-based-Array API call.
  var array1 = ["cat", "sum","fun", "run"];
  var array2 = ["bat", "cat","dog","sun", "hut", "gut"];

  const intersection = array1.filter(element => array2.includes(element));

  console.log("Intersections = " + intersection);    

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
              image: data.image,
            }

            console.log(characterObject);
            localStorage.setItem("characterName", JSON.stringify(characterObject));
        });

    
    
  }

  // Dry_Vermouth,Gin,Anis
  // Vodka,Orange_Juice,Lemon_Juice
  getCocktail("Dry_Vermouth,Gin,Anis");

  
 // Answer Button Listener 
 quizLi.addEventListener("click", function(event)  { 
                                                      console.log(event.target.textContent)
                                                      // var ans = ingredientList[questionIndex][2] + '=' + event.target.textContent
                                                      var ans =  event.target.textContent
                                                      drinkFilter.push(ans)
                                                      console.log(drinkFilter)
                                                      questionIndex++
                                                      clearList()
                                                      
                                                      if (questionIndex > ingredientList[questionIndex][1].length) {
                                                        createFilter()
                                                      }
                                                      else {
                                                        writeIngredientBtn(questionIndex)
                                                      }
                                                    })    

  getCharacter();


  
                                              













  
  



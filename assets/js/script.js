// //Global Declarations
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const quizContainer = document.getElementById('quiz-container');
var scoreSpan = document.getElementById('score-span');
var countEl = document.querySelector("#count");
var renderCardEl = document.querySelector("#render-page")
const btn = document.getElementById('returnBtn');
//Cocktail Card Elements
var cocktailImageEl = document.querySelector("#cocktail-image");
var cocktailNameEl = document.querySelector("#cocktail-name");

//Character Card Elements
var characterImageEl = document.querySelector("#character-image");
var characterNameEl = document.querySelector("#character-name");
var characterSpeciesEl = document.querySelector("#species");
var characterGenderEl = document.querySelector("#gender");
var characterOriginEl = document.querySelector("#origin");


var APIKey = "9973533";
var drinksSaved = [];
var cocktailArray = [];



// Load Cocktail Array when program starts
function loadCocktails(drinksSaved) {
  for (var i = 0; i < 2; i++) {
    var callIndex = 0
    var APIUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php";

    fetch(APIUrl)
    .then(function(response){
     return response.json();
    })
    .then(function(data){
      console.log(data.drinks)
      for (var i =  0; i < 10; i++){
        drinksSaved.push(data.drinks[i]);
      }
    })
  }
  console.log(drinksSaved)
}

//Added redirect URL request if error occurs
var redirectURL = './404.html'

// Ingredient List
var ingredientList =
    [

        spirits = [  
          question = 'spirit',
          types = [ 'Vodka', 'Gin', 'Rum', 'Tequila', 'Scotch', 'Apple Brandy', 'Apple Schnaps', 
                    'Apricot Brandy', 'Bacardi', 'Baileys Irish Cream', 'Black Rum', 'Brandy', 
                    'Coconut Rum', 'Coffee Liquer', 'Dry Vermouth', 'Jack Daniels'  ],
                  ],
        mixers = [
          question = 'mixer',
          types = [ 'Aperol', 'Apple Cider', 'Carbonated Water', 'Club Soda', 'Coca-Cola', 'Cranberry Juice',
                    'Dr-Pepper', 'Ginger Ale', 'Orange Juice', 'Red Bull',],
                  ],   
          fruit = [
            question = 'fruit',
            types = [  'Apple', 'Apprictot', 'Berries', 'Blackberries', 'Blueberries',
                       'Cherries', 'Cranberries', 'Watermelon', 'Blood Orange'],
                  ],
          
          vegetable = [
            question = 'vegetable/herb',
            types = [ 'Celery', 'Cucumber', 'Basil', 'Coriander', 'Thyme' ],
            ],

            additive = [
              question = 'additive',
              types = [   'Agave Syrup', 'Allspice', 'Amaretto', 'Angostura Bitters',
                          'Apricot Nectar', 'Bitters', 'Lemon Lime', 'Tabasco Sauce', ],
              ],
            ]
    

var quizLi = document.getElementById('quiz-list')

var drinkFilter = []

// console.log(ingredientList[questionIndex][0])

// Clear Answer List
function clearList() {

  while (quizLi.hasChildNodes()){
    quizLi.removeChild(quizLi.firstChild)
  }
 }

 function createFilter () {
  var filters = drinkFilter.join(',')
    
  // Make all filters lowercase
  // Replace spaces with -
  filters = filters.replaceAll(' ', '_').toLowerCase();
  ingArray = filters
  console.log(filters)
  getCocktail(ingArray)
 }

 var questionCount = 0;

// Write New and Answer Set
function writeIngredientBtn(questionIndex) {
    for (let i = 0; i < ingredientList[questionIndex][1].length; i++ ) {
        var answerEl = document.createElement('button');
        answerEl.textContent = ingredientList[questionIndex][1][i];

        quizLi.append(answerEl)

    }
}

// Start quiz call

// //Start the game state
startBtn.addEventListener('click', function() {
  const quizContainer = document.getElementById('quiz-container');
  const test = document.documentElement;
  const stars = document.getElementById("stars");
  const logo = document.getElementById("logo");
const instructions = document.getElementById("instructions");


 
  instructions.classList.add("BlackCoverChange");
  logo.style.display = "none";
  startBtn.style.visibility = "hidden";
  quizContainer.style.visibility = "visible";
 
    startQuiz();
  
    document.getElementById('main-btn').classList.add('hide');

})
// //Initiate the quiz
function startQuiz(){

    startBtn.classList.add('hide');
    callPopDrinks(cocktailArray)
    // writeIngredientBtn(questionIndex)
    // //reveals the first question
    quizContainer.classList.remove('hide');

    Instructions();
    //another function to pass through questions?
}
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

var questionIndex = 1;

//Start of popup 
//GOAL make the pop-up appear after 2 seconds or user selects instructions tab?
const close2 = document.getElementById('closeBtn');
const helpBtnEl = document.getElementById('helpBtn');
const overlay = document.getElementById('overlay');
const instructions = document.getElementById('instructions');
const title = document.getElementById('body');

var retrieveData = JSON.parse(localStorage.getItem('characterName'));

console.log("Results:! " + retrieveData);

if(retrieveData == null){

  setTimeout(function () {
    console.log("instructions displayed");
    // overlay.style.visibility = 'visible';
    overlay.classList.remove('hidden');

  },1000);

} else {};



function Instructions(){ //function to reveal pop-up after a few seconds
console.log("passing");
};
//Add click event when user clicks lets go
close2.addEventListener('click', function() {
  console.log('User clicked lets go!');
  // overlay.style.display = "none"; //Makes overlay + Instructions disappear
  overlay.classList.add('hidden');
   

});
//End of popup

helpBtnEl.addEventListener('click', function() {
  console.log('User clicked Help');
  overlay.classList.remove('hidden');
});


//When user clicks start quiz
function writeCatButton(cocktailArray, questionIndex) {
  var quizLst = []
  // if (questionIndex == 0) {
  //   for (let i = 0; i < cocktailArray.length; i++ ) {
  //     // Check if value is already a child

  //     var checkValue = quizLst.includes(cocktailArray[i].strCategory)

  //     if (!checkValue) {
  //     var answerEl = document.createElement('button');
  //     answerEl.textContent = cocktailArray[i].strCategory
      
  //     quizLi.append(answerEl)
  //     quizLst.push(cocktailArray[i].strCategory)
      
  //   }

  // }
  // }
  
  // else {


  var quizLst = [];
 
  for (let i = 0; i < cocktailArray.length; i++ ) {
      
      // Check if value is already a child

      var checkValue = quizLst.includes(eval('cocktailArray[i].strIngredient'+questionIndex));

      if (!checkValue) {
      var answerEl = document.createElement('button');

      if (eval('cocktailArray[i].strIngredient'+questionIndex) == null) {
        answerEl.textContent = "I don't want to add anything else"
      } else {
        answerEl.textContent = eval('cocktailArray[i].strIngredient'+questionIndex)
        
      }
      
      quizLi.append(answerEl)
      quizLst.push(eval('cocktailArray[i].strIngredient'+questionIndex))
      }

  
}
createButtonEventListener()

}

  //------------------------Fetch Character---------------------------------
  

  var randomNumber = Math.floor(Math.random() * 825);

  var characterNumber = randomNumber;

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

            //Set Character Object to  local storage
            console.log(characterObject);
            localStorage.setItem("characterName", JSON.stringify(characterObject));

            //Retrieve character Object from local storage
            var retrieveCharacter = JSON.parse(localStorage.getItem('characterName'));

            //Update Character Card details based on retrieved values
            characterImageEl.setAttribute("src", retrieveCharacter.image);
            characterNameEl.textContent = retrieveCharacter.name;
            characterSpeciesEl.textContent = retrieveCharacter.species;
            characterGenderEl.textContent = retrieveCharacter.gender;
            characterOriginEl.textContent = retrieveCharacter.origin;

            


        });

    
    
  }


  function removeNonAns(ans) {
  var childCount = cocktailArray.length - 1

  
  
  for (let i = childCount - 1 ; i >=0; i--) {
    var drinkIngVal = [cocktailArray[i].strIngredient1, cocktailArray[i].strIngredient2, cocktailArray[i].strIngredient3, cocktailArray[i].strIngredient4]


    console.log(drinkIngVal)
      console.log(drinkIngVal)
      console.log(!drinkIngVal.includes(ans))

      if (ans === "I don't want to add anything else") {
        if (i = 0) {
          cocktailArray.splice(1, 1)
        } else {
          cocktailArray.splice(0, 1)
        }

      } else
      if (!drinkIngVal.includes(ans)){

        cocktailArray.splice(i, 1)
      }
    }

 
  if (cocktailArray.length <= 1) {

    clearList();
    
    // Retrieve Character API Details
    getCharacter();
    
    //Save cocktail object to local storage based on selected ingredients
    var cocktailObject = {
      name: cocktailArray[0].strDrink,
      image: cocktailArray[0].strDrinkThumb,
      instructions: cocktailArray[0].strInstructions,
      
    }

    console.log(cocktailObject);
    localStorage.setItem("cocktailName", JSON.stringify(cocktailObject));

    //Retrieve cocktail information from local storage
    var fetchCocktail = JSON.parse(localStorage.getItem('cocktailName'));

    //Set cocktail card information using retrieved cocktail information
    cocktailImageEl.setAttribute("src", fetchCocktail.image);
    cocktailNameEl.textContent = fetchCocktail.name;

    //Remove hidden class
    renderCardEl.classList.remove("hidden");

    //Return button functionality
    var returnUrl = './index.html'; 
    //When user clicks the return button, they return to the main html.
    btn.addEventListener('click', function(){
      document.location.replace(returnUrl);
    })
    
    } else {
    clearList()
    questionIndex++
    writeCatButton(cocktailArray, questionIndex)
      

  }
 
}



// Answer event listener 
function createButtonEventListener () {

  console.log(quizLi.childElementCount)
  for (let i = 0; i < quizLi.childElementCount; i++) {
  quizLi.children[i].addEventListener("click", function(event)  { 
  var ans =  event.target.textContent
  
  // Remove objects not containing answer
  removeNonAns(ans)

})
}    
}


// Popular Drinks API Call

function callPopDrinks (cocktailArray) {

  var uniqueObject = {};
  for (i in drinksSaved) {
    
    objID = drinksSaved[i].idDrink;
    uniqueObject[objID] = drinksSaved[i];
  
  }

  for (i in uniqueObject) {
    cocktailArray.push(uniqueObject[i]);
  }

  console.log(uniqueObject[1]);
  console.log(cocktailArray);


  // for(var i = 0; i < 3; i++){

  //   var APIUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php";



  //   fetch(APIUrl)
  //   .then(function(response){
  //    return response.json();
  //   })
  //   .then(function(data){
  //     console.log(data.drinks)
  //     for(var i =  0; i < 10; i++){
  //       cocktailArray.push(data.drinks[i]);
  //     }
  //   })

 
  // }

  // console.log(cocktailArray)

  // console.log(cocktailArray)
  // console.log(drinkData)
  
    writeCatButton(cocktailArray, questionIndex)
    
}  
loadCocktails(drinksSaved);

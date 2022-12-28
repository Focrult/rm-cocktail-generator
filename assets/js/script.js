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
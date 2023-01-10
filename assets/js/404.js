//Declare Button
const btn = document.getElementById('returnBtn');
//URL to return user to main html
var returnUrl = './index.html'; 
//When user clicks the return button, they return to the main html.
btn.addEventListener('click', function(){
    console.log("Testing btn")
    document.location.replace(returnUrl);
})
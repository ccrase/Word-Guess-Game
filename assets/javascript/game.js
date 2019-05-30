var words = [ //create array
    "spaghetti", 
    "poutine", 
    "tacos", 
    "casserole", 
    "fajitas",
    "kebab",
    "ramen",
    "churro",
    "donuts",
    "curry",
    "cheeseburger",
    "sashimi"
    ]; 
//define global variables    
var currentWord;
var randomIndex;
var wins = 0;
var remainingGuess = 10;
var underscores = [];
var wrongGuesses = [];
var gameStarted = false;

resetGame();
function resetGame(){
    document.getElementById("press-enter").style.cssText = "display: block;";
    document.addEventListener('keydown', function (e){
        if(e.keyCode === 13){
            sendToStart();
            gameStarted = true;
        }
    });
};

function sendToStart(){
    if(gameStarted){
        startGame();
    }
};

function startGame(){
    document.getElementById("press-enter").style.cssText = "display: none;";
    assignWord(words);
    displayWord();
    setEventListener();
};

function assignWord(array){
    randomIndex = Math.floor(Math.random() * ((array.length -1) - 0 + 1)) + 0;
    currentWord = array[randomIndex];
};

function displayWord(){ //saves underscores to underscore array and formats the look of word-placeholderText
    for(var i =0; i <currentWord.length; i++){
        underscores.push("_");
        document.getElementById("word-placeholder").innerHTML = underscores.join(' ');
    }
};

function setEventListener(){
    document.onkeyup = function(e){
        if(e.keyCode >= 65 && e.keyCode <=90){
            evaluateDuplicates(e.key);
            evaluateGuesses(e.key);
        }
        else{
            alert("You may only choose letters A-Z")
        }
    }
};

function evaluateDuplicates(letter) {
    var positions = [];
    // Loop through word finding all instances of guessed letter, store the indicies in an array.
    for (var i = 0; i <currentWord.length; i++) {
        if(currentWord[i] === letter) {
            positions.push(i);
        }
    }
    for(var i = 0; i < positions.length; i++) {
            underscores[positions[i]] = letter;
        }
    document.getElementById("word-placeholder").innerHTML = underscores.join(' ');
};

function evaluateGuesses(letter){
    if(!currentWord.includes(letter)){
        wrongGuesses.push(letter);
        remainingGuess--;
        console.log(wrongGuesses);
        updateDom();
        evaluateLoss();
    }
    else{
        if(currentWord === underscores.join('')){
            wins++;
            console.log(wins);
            updateDom();
            endGame();
        }
    }
};

function updateDom(){
    document.getElementById('win-count').innerHTML = wins;
    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join("   ");
    document.getElementById('remaining-count').innerHTML = remainingGuess;
};

function evaluateLoss(){
    if(remainingGuess > 0){
        updateDom();
    }
    else{
        alert("You Lost")
        endGame();
    }
};

function endGame(){
    //reset variable
    gameStarted = false;
    currentWord = "";
    randomIndex = "";
    remainingGuess = 10;
    underscores = [];
    wrongGuesses = [];
    //reset DOM
    document.getElementById("word-placeholder").innerHTML = "";
    document.getElementById('wrong-guesses').innerHTML = "";
    document.getElementById('remaining-count').innerHTML = 10;
    document.getElementById("press-enter").style.cssText = "display: block;";
};
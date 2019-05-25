//press any key to start
//create an array of words that you want the user to guess 
guessList = ["grimes", "the preatures", "parcels", "thundercat", "tennis", "jungle", "toro y moi", "tame impala"];

//create a function to randomly select a word from the array store into a variable(array)
function getRandom(array){
    randomWord = array[Math.floor(Math.random() * array.length)];
    return randomWord;
};

getRandom(guessList);
console.log(randomWord);

//empty array to hold letterholders
var answerArray = [];
for(var i = 0; i < randomWord.length; i++){
    if(randomWord[i] === " "){
        answerArray[i] = " ";
    }
    else{
        answerArray[i] = "_";
    }
};
console.log(answerArray)
//print letterholders to the div #values
for(var i = 0; i < randomWord.length; i++){
    var letterSpan = document.createElement('span');
    var textData = document.createTextNode(randomWord[i]);
    letterSpan.appendChild(textData);
    console.log()
    //document.getElementById("#values").appendChild(para);
};



//use .onkeyup to store the users letter choice
document.onkeyup = function(e){
    //assign onkeyup selection to variable letter
    var letter = e.key.toLowerCase();

    for(var i =0; i < randomWord.length; i++){
        if(letter === randomWord.charAt(i)){
            answerArray[i] = letter;
            console.log(letter);
        }
    }
};
//check to see if the users letter guess matches any of the letters in the word
//if the letter matches, print it into the "_" slot 
//if the letter does not match, send to an array of wrong guesses. 
//if the guessed letter has already been guessed, don't do anything
//the user has 15 guesses to figure out the word. When they are out of guesses, and haven't finished the word, computer writes "you Lost"
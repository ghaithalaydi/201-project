'use strict'
var score = 0;
var userName = prompt("What is your good name?");
alert("Welcome to the website " + userName + ", Lets get to know each other a little bit more");

questionOne ();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();
endingFunction();

function questionOne (){var firstAnswer = prompt("Do you think that I am an Engineer? (yes / no answers only)");
// console.log(firstAnswer);
alert("Your answer was: " + firstAnswer);
switch (firstAnswer.toLowerCase()) {

    case "yes":
        alert("You have guessed right!");
        score++;
        break;

    case "no":
        alert("Maybe you will get the next one right");
        break;
}
}

function questionTwo(){
    var secondAnswer = prompt("Is my prefered field of work related to consultancy work? (yes / no answers only)");
// console.log(secondAnswer);
alert("Your answer was: " + secondAnswer);
switch (secondAnswer.toLowerCase()) {

    case "yes":
        alert("You have guessed right!");
        score++;
        break;

    case "no":
        alert("Maybe you will get the next one right");
        break;
}
}

function questionThree(){
    var thirdAnswer = prompt("Do I have over 7 years of work experience? (yes / no answers only)");
// console.log(thirdAnswer);
alert("Your answer was: " + thirdAnswer);
switch (thirdAnswer.toLowerCase()) {

    case "no":
        alert("You have guessed right!");
        score++;
        break;

    case "yes":
        alert("Maybe you will get the next one right");
        break;
}
}

function questionFour(){
    var fourthAnswer = prompt("Do I speak any other languages apart from english and arabic? (yes / no answers only)");
// console.log(fourthAnswer);
alert("Your answer was: " + fourthAnswer);
switch (fourthAnswer.toLowerCase()) {

    case "yes":
        alert("You have guessed right!");
        score++;
        break;

    case "no":
        alert("Maybe you will get the next one right");
        break;
}
}

function questionFive(){
    var fifthAnswer = prompt("Do you think i prefer smaller projects to bigger ones? (yes / no answers only)");
// console.log(fifthAnswer);
alert("Your answer was: " + fifthAnswer);
switch (fifthAnswer.toLowerCase()) {

    case "no":
        alert("You have guessed right!");
        score++;
        break;

    case "yes":
        alert("Well note true, but uou have done well up until this point");
        break;
}
}



// First Feature
function questionSix(){
    var i = 0;
var userGuess = prompt("I have a number in mind (0-30) can you try and guess what it is? [You have 4 attempts}");
parseInt(userGuess);
if (userGuess == 18) {
    alert("You are a Phsycic!");
    score++;
}
else {
    while (userGuess != 18 && i < 4) {
        if (userGuess < 6) {
            alert("The number you have entered is too low!");
        }
        else if (userGuess > 25) {
            alert("The number you have entered is too high!");
        }
        else if (userGuess > 6 && userGuess < 18) {
            alert("Close! try again");
        }
        else if (userGuess > 18 && userGuess < 25) {
            alert("Close! try again");
        }
        userGuess = prompt("try again");
        parseInt(userGuess);
        i++;
    }
    if (i == 4) {
        alert("Your attempts has been depleted, the number is 18");
    }
    else {
        alert("Well done");
        score++;
    }
}
}

//Second feature
function questionSeven(){
    var x = 0;
var cityList = ['barcelona', 'berlin', 'bentota'];
var cityName = prompt("Can you guess the name of one of my favourite travel destinations?").toLowerCase();
if (cityName === cityList[0] || cityName === cityList[1] || cityName === cityList[2]) {
    alert("You have guessed right, answers include " + cityList[0] + " & " + cityList[1] + " & " + cityList[2]);
    score++;
}
else {
    while (cityName !== cityList[0] && cityName !== cityList[1] && cityName !== cityList[2] && x < 7) {
        cityName = prompt("Try Again!").toLowerCase();
        x++;
    }
    if (x == 7) {
        alert("Your attempts has been depleted, the correct answers are " + cityList[0] + " &" + cityList[1] + " &" + cityList[2]);
    }
    else {
        alert("You have guessed right, answers include " + cityList[0] + " & " + cityList[1] + " & " + cityList[2]);
        score++;
    }
}
}
function endingFunction(){
alert("Your final score is "+ score+ "/7"); 
alert("Well " + userName + " it was a pleasure!");
}
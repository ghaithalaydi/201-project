'use strict'
var userName = prompt("What is your good name?");
alert("Welcome to the website" + userName + ", Lets get to know each other a little bit more");

var firstAnswer = prompt("Do you think that I am an Engineer? (yes / no answers only)");
// console.log(firstAnswer);
alert("Your answer was: " + firstAnswer);
switch (firstAnswer.toLowerCase()) {

    case "yes":
        alert("You have guessed right!");
        break;

    case "no":
        alert("Maybe you will get the next one right");
        break;
}

var secondAnswer = prompt("Is my prefered field of work related to consultancy work? (yes / no answers only)");
// console.log(secondAnswer);
alert("Your answer was: " + secondAnswer);
switch (secondAnswer.toLowerCase()) {

    case "yes":
        alert("You have guessed right!");
        break;

    case "no":
        alert("Maybe you will get the next one right");
        break;
}

var thirdAnswer = prompt("Do I have over 7 years of work experience? (yes / no answers only)");
// console.log(thirdAnswer);
alert("Your answer was: " + thirdAnswer);
switch (thirdAnswer.toLowerCase()) {

    case "no":
        alert("You have guessed right!");
        break;

    case "yes":
        alert("Maybe you will get the next one right");
        break;
}

var fourthAnswer = prompt("Do I speak any other languages apart from english and arabic? (yes / no answers only)");
// console.log(fourthAnswer);
alert("Your answer was: " + fourthAnswer);
switch (fourthAnswer.toLowerCase()) {

    case "yes":
        alert("You have guessed right!");
        break;

    case "no":
        alert("Maybe you will get the next one right");
        break;
}

var fifthAnswer = prompt("Do you think i prefer smaller projects to bigger ones? (yes / no answers only)");
// console.log(fifthAnswer);
alert("Your answer was: " + fifthAnswer);
switch (fifthAnswer.toLowerCase()) {

    case "no":
        alert("You have guessed right!");
        break;

    case "yes":
        alert("You have done well up until this point");
        break;
}

alert("Well " + userName + " it was a pleasure!");

var readlineSync = require("readline-sync");
const chalk = require("chalk");
const log = console.log


var score = 0;

var userName = readlineSync.question(chalk.red("Hey, What's your name?"));

console.log(chalk.green("Welcome "+ userName + "!" + " Let's play a quiz- WHO SAID IT?"));

//play function

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log(chalk.green.underline("You are right!"));
    score=score+1;

  } else {
    console.log(chalk.red("You are wrong!"))
    console.log(chalk.blue.underline("The correct answer is: " + answer));

  }

  console.log("Your current score is", score);
  console.log(("-------------------"))
}

//Array of Questions

var questions = [ {
  question:"I shall curse you with book, bell, and candle.",
  answer:"Thomas Malory"
},  {
  question:"Speak and speed: the close mouth catches no flies.",
  answer:"Benjamin Franklin"
},{
  question:"I have nothing to offer but blood, toil, tears and sweat.",
  answer:"Winston Churchill"
},{
  question:"To appreciate the importance of fitting every human soul for independent action, think for a moment of the immeasurable solitude of self.",
  answer:"Elizabeth Cady Stanton"
},{
  question:"Children today are tyrants. They contradict their parents, gobble their food, and tyrannize their teachers.",
  answer:"Socrates"
},{
  question:"I have learned over the years that when one's mind is made up, this diminishes fear.",
  answer:"Rosa Parks"
}, {
  question:"The man with no imagination has no wings.",
  answer:"Muhammad Ali"}]

//loop

for (var i = 0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("You scored", score );
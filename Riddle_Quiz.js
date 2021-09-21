var readlinesync = require("readline-sync");
var score = 0;

console.log("Welcome " + readlinesync.question("What is your name? ") + "!");
console.log("Quick quiz, Let's check how much you can score :) ");
console.log("Note: Please enter all answers in small letters");
 console.log("-----------------------------");
function play(question, answer){
 var userAnswer = readlinesync.question(question);
 
 if(userAnswer === answer){
  console.log("Yes you are right");
  score++;
 }
 else {
  console.log("No you are Wrong");
 }
 console.log("Your current score :" + score);
 console.log("-----------------------------");
}

var questionOne = {
question: "I can live only where there is light But i die if the light shines on me? ",
answer: "shadow"
}
var questionTwo = {
question: "Divide 30 by half and add 10? ",
answer: "70"
}
var questionThree = {
question: "People buy me to eat but never eats me? ",
answer:"plate"
}
var questionFour = {
question: "What two words, added together, contain the most letters? ",
answer:"postoffice"
}
var questionFive = {
question: "You are my brother but i am not your brother. Who am i?",
answer:"sister"
}
var answer = ["shadow", "70", "plate", "postoffice", "sister"]
var question = [questionOne, questionTwo, questionThree, questionFour, questionFive];

for(var i = 0; i<question.length; i++){
  current = question[i];
  play(current.question, current.answer);
  console.log("answer is :" + answer[i]);
}
 
 console.log("Your final score is:" + score + "/5");

 console.log("Thanks for your participation in Quiz, Wishing you good day :)");




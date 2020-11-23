var chalk = require('chalk');
var read = require('readline-sync');
var qus = chalk.cyan
var opt = chalk.red
var red = chalk.red
var right = chalk.green
var blue = chalk.bold.blue


console.log("Please Enter Your Name ")
var userName = read.question()
//Message 
console.log(blue("Welcome " + userName))
console.log(blue("You are going to play a quiz based on Object Oriented Concepts."))
console.log(blue("You will have 3 points for each correct answer and -1 point for each wrong answer."))
console.log(blue("Are You ready to play ? Press Y for Yes N for No"))

//High score
var highScore ={
  score: 45,
  name: "Rahul", 
}
//Yes or no as user choice
var yesOrNo = read.question()
if(yesOrNo.toUpperCase() === 'Y'){
  var score = play()
  updateHighScore(score)
}
console.log("Thank You !")

//function to play quiz
function play (){
  var score = 0
  var correct = 0
  var wrong = 0
  var arr = {
    qus1: "1. How many types of constructors are available, in general, in any language?",
    opt1: "a) 2   b) 3    c) 4",
    ans1: "b",

    qus2: "2. Which constructor is called while assigning some object with another?",
    opt2: "a) Default   b) Parameterized    c) Copy",
    ans2: "c",

    qus3 : "3. Which specifier applies only to the constructors?",
    opt3: "a) Public    b) Explicit    c) Implicit",
    ans3: "b",

    qus4: "4. Which type of constructor can’t have a return type?",
    opt4: "a) Default   b) Parameterized    c) Constructors don’t have a return type",
    ans4: "c",

    qus5: "5. Within a class, only one static constructor can be created?",
    opt5 : "a) True    b) False",
    ans5: "a",

    qus6: "6. Which was the first purely object oriented programming language developed?",
    opt6: "a) Java    b) C++    c) SmallTalk",
    ans6: "c",

    qus7: "7. Who invented OOP?",
    opt7: "a) Alan Kay    b) Andrea Ferro   c) Dennis Ritchie",
    ans7: "a",

    qus8: "8. Which is not feature of OOP in general definitions?",
    opt8: "a) Code reusability    b) Modularity   c) Duplicate/Redundant data",
    ans8: "c",

    qus9: "9. Pure OOP can be implemented without using class in a program ?",
    opt9: "a) True    b) False",
    ans9: "b",

    qus10: "10. Which Feature of OOP illustrated the code reusability?",
    opt10: "a) Polymorphism   b) Abstraction    c) Inheritance",
    ans10: "c",

    qus11: "11. Which language does not support all 4 types of inheritance?",
    opt11: "a) C++    b) Java   c) Kotlin",
    ans11: "b",

    qus12: "12. How many classes can be defined in a single program?",
    opt12: "a) Only 1   b) Only 100   c) As many as you want",
    ans12: "c",

    qus13: "13. Which header file is required in C++ to use OOP?",
    opt13: "a) iostream.h   b) stdio.h    c) OOP can be used without using any header file",
    ans13: "c",

    qus14: "14. Which of the following is not type of class?",
    opt14: "a) Abstract Class   b) Final Class    c) Start Class",
    ans14: "c",

    qus15: "15. Class is pass by _______",
    opt15: "a) Value    b) Reference    c) Copy",
    ans15: "b",

    qus16: "16. Which is known as a generic class?",
    opt16: "a) Abstract class   b) Final class    c) Template class",
    ans16: "c",   

    qus17: "17. Which class can have member functions without their implementation?",
    opt17: "a) Default class    b) String class   c) Abstract class",
    ans17: "c",

    qus18: "18. What is the scope of a class nested inside another class?",
    opt18: "a) Protected scope    b) Private scope    c) Depends on access specifier and inheritance used",
    ans18: "c",

    qus19: "19. Class with main() function can be inherited?",
    opt19: "a) True   b) False",
    ans19: "a",

    qus20: "20. Instance of which type of class can’t be created?",
    opt20: "a) Anonymous class    b) Nested class   c) Abstract class",
    ans20: "c",
  }

  function checkLevel(correct){
    if (correct==5){
      console.log(chalk.yellow("You reached to Level 1 ."))
    }
    if(correct==10){
      console.log(chalk.yellow("You reached to Level 2 ."))
    }
    if(correct == 15){
      console.log(chalk.yellow("You reached to Level 3 ."))
    }
    if(correct == 20){
      console.log(chalk.yellow("You reached to Level 4 ."))
    }
  }
  for(var i=1 ; i<21 ; i++){
    console.log()
    console.log(qus(arr["qus" + i]))
    console.log(opt(arr["opt" + i]))
    var ans = read.question()
    if(ans === arr["ans" + i] ){
      console.log(right("Correct !"))
      score = score + 3
      correct++
    
    }else{
      console.log(red("Wrong ! correct answer : "+arr["ans" +i] ))
      score = score - 1
      wrong--
    }
    console.log("current score : " , score)
    checkLevel(correct)
  }
  return score
}

function updateHighScore(score){
  if(highScore.score < score )
  console.log("Congrats You just made a high score. Please Send Screenshot of your score and we will update High Score ")
}

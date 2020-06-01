
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", startgame);
const nextanswer1 = document.getElementById("answer-1");
const nextanswer2 = document.getElementById("answer-2");
const nextanswer3 = document.getElementById("answer-3");
const nextanswer4 = document.getElementById("answer-4");
nextanswer1.addEventListener("click", nextquestion);
nextanswer2.addEventListener("click", nextquestion);
nextanswer3.addEventListener("click", nextquestion);
nextanswer4.addEventListener("click", nextquestion);
var counter = 0;

function startgame (){

   var questionEl = document.getElementById("question") 
   questionEl.innerText = questionElement[counter].text
   var answerEl = document.getElementById("answer-1")
   answerEl.innerHTML = questionElement[counter].answers[0]
   answerEl = document.getElementById("answer-2")
   answerEl.innerHTML = questionElement[counter].answers[1]
   answerEl = document.getElementById("answer-3")
   answerEl.innerHTML = questionElement[counter].answers[2]
   answerEl = document.getElementById("answer-4")
   answerEl.innerHTML = questionElement[counter].answers[3]
  counter++
   console.log("start game")

}

function nextquestion (event){
    var questionEl = document.getElementById("question") 
    questionEl.innerText = questionElement[counter].text
    var answerEl = document.getElementById("answer-1")
    answerEl.innerHTML = questionElement[counter].answers[0]
    answerEl = document.getElementById("answer-2")
    answerEl.innerHTML = questionElement[counter].answers[1]
    answerEl = document.getElementById("answer-3")
    answerEl.innerHTML = questionElement[counter].answers[2]
    answerEl = document.getElementById("answer-4")
    answerEl.innerHTML = questionElement[counter].answers[3]
    counter++
    
}

function correctAnswer(){
    alert("Correct")
    counter++
}

let countdown = 200;
let timer;

function updateTimer(){
    countdown -= 1;
    
    if( countdown<0 ){
        document.querySelector('#timer').innerHTML = 
            `<img src='https://image.flaticon.com/icons/svg/100/100291.svg' width=64 /> Time up!`;
        clearInterval( timer );
    } else {
        document.querySelector('#timer').innerHTML = 
            `${countdown}s left!`;

    }
}

function startTimer(){
    timer = setInterval( updateTimer, 1000 );
}
function yourScore(){
    clearInterval( timer );
    alert(document.querySelector('#timer').innerHTML = 
    `${countdown}s left!`)
}

function addTime(){
    countdown += 30;
}

function removeTime(){
    countdown -= 30;           
}

const questionElement=[
    { text: "Who invented JavaScript?",
              answers: [ "Brendan Eich", "Bill Gates", "Donald Trump", "Steve Jobs" ],
              correctAnswer: "Brendan Eich" },
    { text: "When was JavaScript invented?",
              answers: [ "1985", "2000", "1995", "2011" ],
              correctAnswer: "1995" },
    { text: "What is the $ in Javascript?",
              answers: ["Parameter", "Identifier", "Function", "Money"],
              correctAnswer: "Identifier"},
    { text: "What else could Java mean?",
              answers: ["Coffee", "Beer", "Tea", "Ice cream"],
              correctAnswer: "Coffee" 
},
        ];

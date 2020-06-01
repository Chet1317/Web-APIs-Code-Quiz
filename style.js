
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", startgame);
let questionNum
let statsCorrectAnswers = 0;
        let statsWrongAnswers = 0;
        let timerInterval;

function startgame (){

   
    const currentQuestion = questionElement[questionNum];
    document.querySelector('#question').innerHTML = currentQuestion.text;

    document.querySelector('#answers').innerHTML = '';
    for( var i=0; i<currentQuestion.answers.length; i++ ){
        const activeAnswer = currentQuestion.answers[i];
        document.querySelector('#answers').innerHTML += 
            `<li onClick="checkAnswer(event,'${activeAnswer}')" class="list-group-item">${activeAnswer}</li>`
    
            console.log("start game")
        }
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

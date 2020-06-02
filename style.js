
 const startButton = document.getElementById("start-btn")
 startButton.addEventListener("click",startGame)
 let timer;
 let questionNum;
 let statsCorrectAnswers = 0;
 let statsWrongAnswers = 0;
 let timerInterval;
 
 const questions = [
    { text: "Who invented JavaScript?",
      answers: [ "Brendan Eich", "Bill Gates", "Donald Trump", "Steve Jobs" ],
      correctAnswer: "Brendan Eich" },
    { text: "What is the $ in JavaScript?",
      answers: [ "Function", "Parameter", "Identifier", "Money" ],
      correctAnswer: "Identifier" },
      { text: "When was JavaScript invented?",
    answers: ["1985", "1995", "2000", "2011"],
    correctAnswer: "1995"},
    { text: "What else could Java mean?",
    answers: [ "Beer", "Coffee", "Wine", "Pop"],
    correctAnswer: "Coffee" }
    ];


function checkTime(){
    timer = timer - 1;
    document.querySelector('#timer').innerHTML = `${timer} seconds remaining...`;

    if( timer<1 ){
        // time is up! end the game
        showFinished();
    }
}

function showQuestion(){
    const currentQuestion = questions[questionNum];
    document.querySelector('#question').innerHTML = currentQuestion.text;

    document.querySelector('#answers').innerHTML = '';
    for( var i=0; i<currentQuestion.answers.length; i++ ){
        const activeAnswer = currentQuestion.answers[i];
        document.querySelector('#answers').innerHTML += 
            `<li onClick="checkAnswer(event,'${activeAnswer}')" class="list-group-item">${activeAnswer}</li>`
    }
}

function checkAnswer( event, userAnswer ){
    event.preventDefault();

    console.log( `[checkAnswer] checking question, answer given: ${userAnswer}` );
    
    // check if user got hte question right, 
    const currentQuestion = questions[questionNum];
    // display a message            
    if( currentQuestion.correctAnswer === userAnswer ){
        document.querySelector('#alertCorrect').style.display = 'block';
        document.querySelector('#alertWrong').style.display = 'none';
        statsCorrectAnswers++;
    } else {
        document.querySelector('#alertCorrect').style.display = 'none';
        document.querySelector('#alertWrong').style.display = 'block';
        timer = timer-30;
        statsWrongAnswers++;
    }

    // move on to next question (if any more exist)
    questionNum = questionNum+1;
    if( questionNum >= questions.length ){
        // we are done! no more questions!
        showFinished();
        return;
    };

    // show next question
    showQuestion();
}

function showFinished(){
    // show whatever code for the finished display here
    document.querySelector('#alertCorrect').style.display = 'block';
    document.querySelector('#alertCorrect').innerHTML =  
        `Done, your right answers: ${statsCorrectAnswers}, and wrong: ${statsWrongAnswers}`;
    // stop the timer
    clearInterval( timerInterval );
}

function startGame(){
    // reset the timer to 200s, and start count-down
    timer = 200;
    timerInterval = setInterval( checkTime, 1000 );

    // show first question
    questionNum = 0;
    showQuestion();
}


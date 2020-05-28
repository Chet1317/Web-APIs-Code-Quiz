const startButton = document.getElementById("start-btn")
//const answerButtons = document.getElementById("answer-buttons") 
startButton.addEventListener('click', startgame)
var counter = 0


function startgame (){
   var questionEl = document.getElementById("question") 
   questionEl.innerText = questionElement[counter].question
   var answerEl = document.getElementById("answer-1")
   answerEl.innerHTML = questionElement[counter].answer[0].text
   answerEl = document.getElementById("answer-2")
   answerEl.innerHTML = questionElement[counter].answer[1].text
    console.log("start game")
    counter++

}

function nextquestion (){
   
}
function showQuestion (){
   
    console.long("question is shown")
}
function answer (){

}

const questionElement = [
    {
        question: "Who invented Javascript?",
        answer: [
            {text: "Brendan Eich", correct: true},
            {text: "Bill Gates", correct: false},
            {text: "Donald Trump", correct: false},
            {text: "Steve Jobs", correct: false}]
    }
]
const startButton = document.getElementById("start-btn")
//const answerButtons = document.getElementById("answer-buttons") 
startButton.addEventListener('click', startgame)
const nextanswer1 = document.getElementById("answer-1")
const nextanswer2 = document.getElementById("answer-2")
const nextanswer3 = document.getElementById("answer-3")
const nextanswer4 = document.getElementById("answer-4")
nextanswer1.addEventListener("click", nextquestion)
nextanswer2.addEventListener("click", nextquestion)
nextanswer3.addEventListener("click", nextquestion)
nextanswer4.addEventListener("click", nextquestion)
var counter = 0

function startgame (){
   
   var questionEl = document.getElementById("question") 
   questionEl.innerText = questionElement[counter].question
   var answerEl = document.getElementById("answer-1")
   answerEl.innerHTML = questionElement[counter].answer[0].text
   answerEl = document.getElementById("answer-2")
   answerEl.innerHTML = questionElement[counter].answer[1].text
   answerEl = document.getElementById("answer-3")
   answerEl.innerHTML = questionElement[counter].answer[2].text
   answerEl = document.getElementById("answer-4")
   answerEl.innerHTML = questionElement[counter].answer[3].text
  
    console.log("start game")

}

function nextquestion (){
    
    var questionEl = document.getElementById("question") 
    questionEl.innerText = questionElement[counter].question
    var answerEl = document.getElementById("answer-1")
    answerEl.innerHTML = questionElement[counter].answer[0].text
    answerEl = document.getElementById("answer-2")
    answerEl.innerHTML = questionElement[counter].answer[1].text
    answerEl = document.getElementById("answer-3")
    answerEl.innerHTML = questionElement[counter].answer[2].text
    answerEl = document.getElementById("answer-4")
    answerEl.innerHTML = questionElement[counter].answer[3].text
    
    
    counter++
}

//function nextquestion (){
   
   

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
    },
    
    {question: "JavaScript was invented in what year?",
        answer: [
            {text: "1986", correct: true},
            {text: "Bill Gates", correct: false},
            {text: "Donald Trump", correct: false},
            {text: "Steve Jobs", correct: false}]
        },
        {question: "What is a paramater",
        answer: [
            {text: "Used in a function", correct: true},
            {text: "Bill Gates", correct: false},
            {text: "Donald Trump", correct: false},
            {text: "Steve Jobs", correct: false}]
        }

        ,
        {question: "What is a paramater",
        answer: [
            {text: "Used in a function", correct: true},
            {text: "Bill Gates", correct: false},
            {text: "Donald Trump", correct: false},
            {text: "Steve Jobs", correct: false}]
        }

       
]

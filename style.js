const startButton = document.getElementById("start-btn")
const questionBox = document.getElementById("question-container")

startButton.addEventListener('click', startgame)

function startgame (){
    console.log("start game")
}

function nextquestion (){

}

function answer (){

}

const questions = [
    {
        question: "Who invented Javascript?",
        answer: [
            {text: "Brendan Eich", correct: true}
            {text: "Bill Gates", correct: false}
            {text: "Donald Trump", correct: false}
            {text: "Steve Jobs", correct: false}]
    }
]
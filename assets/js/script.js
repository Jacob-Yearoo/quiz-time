
document.addEventListener('DOMContentLoaded', function() {
    alert('Welcome Challenger, we are ready for you.')
})

const nextBtn = document.getElementById('next-btn')
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answers')


const qList = [
    {
        question: 'in which continent are Chile, Argentina and Brazil?', answers: [
            {text: 'South America', correct: true},
            {text: 'North America', correct: false},
            {text: 'Europe', correct: false},
            {text: 'Australasia', correct: false},
            
        ]
    },
    {
        question: 'The Mad Hatter and the Cheshire Cat are characters in which famous book?', answers: [
            {text: 'Winnie-The-Pooh', correct: false},
            {text: "Charlotte's Web", correct: false},
            {text: 'Charlie and the Chocolate Factory', correct: false},
            {text: 'Alice in Wonderlanc', correct: true},
            
        ]
    },
    {
        question: 'What measurement scale is used to determine wind speed?', answers: [
            {text: 'Beaufort Scale', correct: true},
            {text: 'Richter Scale', correct: false},
            {text: 'Synoptic Scale', correct: false},
            {text: 'Gusting Scale', correct: false},
            
        ]
    },
    {
        question: 'What other country, besides the US, uses the US dollar as its official currency?', answers: [
            {text: 'Ecuador', correct: true},
            {text: 'Canada', correct: false},
            {text: 'Mexico', correct: false},
            {text: 'United Kingdom', correct: false},
            
        ]
    },
]

// function startGame() {
//     nextBtn.addEventListener('click'); {
//         answerElement.classList.remove('hide')
//     }
// }

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})

let shuffledQuestions = qList.sort()
let currentQuestionIndex = 0

function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
    resetGameState()
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', checkAnswer)
        answerElement.appendChild(button)
    });
}

function checkAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    answerHighlight(document.body, correct)
    Array.from(answerElement.children).forEach(button => {
      answerHighlight(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextBtn.classList.remove('hide')
}}

function incrementScore() {

}

function incrementWrongScore() {

}

function resetGameState() {
    removeHighlight(document.body)
    nextBtn.classList.add('hide')
    // while (answerElement.firstChild) {
    //     answerElement.removeChild(answerElement.firstChild)
    // }
}

function answerHighlight(element, correct) {
    removeHighlight(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function removeHighlight(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


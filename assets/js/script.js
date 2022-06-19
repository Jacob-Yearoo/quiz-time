
document.addEventListener('DOMContentLoaded', function() {
    alert('Welcome Challenger, we are ready for you.')
})

const nextBtn = document.getElementById('next-btn')
const questionElement = document.getElementById('question')
const resetbtn = document.getElementById('restart-btn')
const answerElement = document.getElementById('answers')

let shuffledQuestions, currentQuestionIndex

nextBtn.addEventListener('click', startGame)
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})

resetbtn.addEventListener('click', () => {
    answerElement.classList.add('hide')
    questionElement.textContent = `Thanks for playing! you scored (blank) out of (blank)`
    nextBtn.classList.remove('hide')
})


function startGame() {
    shuffledQuestions = qList.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionElement.classList.remove('hide')
    nextQuestion()
  }


function nextQuestion() {
    resetGameState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
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

function resetGameState() {
    // removeHighlight(document.body)
    nextBtn.classList.add('hide')
    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild)
    }
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

// function incrementScore() {
//     const right = document.getElementById('right')
//     right.textContent = 0
//     if (answerElement === 'correct') {
//         right++        
//     }
// }

// function incrementWrongScore() {

// }


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
            {text: 'Alice in Wonderland', correct: true},
            
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
    {
        question: 'Who was elected President of the United States in 2017?', answers: [
            {text: 'Barack Obama', correct: false},
            {text: 'Donald Trump', correct: true},
            {text: 'George Bush', correct: false},
            {text: 'Joe Biden', correct: false},
            
        ]
    },
    {
        question: 'What is the national language of Canada?', answers: [
            {text: 'English', correct: false},
            {text: 'French', correct: false},
            {text: 'Dutch', correct: true},
            {text: 'Creole', correct: false},
            
        ]
    },
    {
        question: 'Brazil is the biggest producer of?', answers: [
            {text: 'Rice', correct: false},
            {text: 'Oil', correct: false},
            {text: 'Tobacco', correct: false},
            {text: 'Coffee', correct: true},
            
        ]
    },
    {
        question: 'How many colors in the Rainbow?', answers: [
            {text: 'Seven', correct: true},
            {text: 'One', correct: false},
            {text: 'Five', correct: false},
            {text: 'Nine', correct: false},
            
        ]
    },
    {
        question: 'What is the currency of India?', answers: [
            {text: 'Pound', correct: false},
            {text: 'Riyal', correct: false},
            {text: 'Rupee', correct: true},
            {text: 'Euro', correct: false},
            
        ]
    },
    {
        question: 'Times Square is located famously in which popular city of United States of America?', answers: [
            {text: 'Washington DC', correct: false},
            {text: 'Chicago', correct: false},
            {text: 'New York City', correct: true},
            {text: 'Miami', correct: false},
            
        ]
    },
    {
        question: 'Which is the closest planet to Earth?', answers: [
            {text: 'Jupiter', correct: false},
            {text: 'Venus', correct: false},
            {text: 'Mercury', correct: true},
            {text: 'Mars', correct: false},
            
        ]
    },
    {
        question: 'Jon Snow is a popular character of which television series?', answers: [
            {text: 'Friends', correct: false},
            {text: 'Greys Anatomy', correct: false},
            {text: 'Lucifer', correct: false},
            {text: 'Game of Thrones', correct: true},
            
        ]
    },
    {
        question: 'What is the capital city of India?', answers: [
            {text: 'Mumbai', correct: false},
            {text: 'New Delhi', correct: true},
            {text: 'Calcutta', correct: false},
            {text: 'Jaipur', correct: false},
            
        ]
    },
    {
        question: 'What is the most popular baby boy name in Britain?', answers: [
            {text: 'George', correct: true},
            {text: 'Arthur', correct: false},
            {text: 'John', correct: false},
            {text: 'William', correct: false},
            
        ]
    },
    {
        question: 'Which two colors mix to form pink?', answers: [
            {text: 'White & Orange', correct: false},
            {text: 'White & Yellow', correct: false},
            {text: 'White & Red', correct: true},
            {text: 'Yellow & Red', correct: false},
            
        ]
    },
]
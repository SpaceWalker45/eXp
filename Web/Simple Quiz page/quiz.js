const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const qustionContainerElement = document.getElementById('qustion-container')
const qustionElement = document.getElementById('start-btn')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQustions, currentQusetionIndex;
let quizScore = 0;

function selectAnswer(e){
    const selectedButton=e.target
    const correct =selectedButton.dataset.correct

    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach((button)=>{

    })
    if(shuffleQuestions.length >currentQusetionIndex){
        nextButton.classList.remover("hide")
    }
}

function getStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }
    else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const qustion = {
    {
    qustion: 'which one of these is a JavaScript framework?'
    answers: [
        { Text: 'python', correct: false },
        { Text: 'Django', correct: false },
        { Text: 'React', correct: true },
        { Text: 'Eclipse', correct: false }
    ],
    },
{
    qustion: 'What does HTML stand for?'
    answers: [
        { Text: 'HighText Machine Language', correct: false },
        { Text: 'HyperText and links Markup Language', correct: false },
        { Text: 'HyperText Markup Language', correct: true },
        { Text: 'None of these', correct: false }
    ],
    },
{
    qustion: 'Which tag is used to create a hyperlink?'
    answers: [
        { Text: '<link>', correct: false },
        { Text: '<a>', correct: true },
        { Text: '<href>', correct: false },
        { Text: '<ul>', correct: false }
    ],
    },
{
    question: 'Which of these is a self-closing tag?',
        answers: [
            { Text: '<p>', correct: false },
            { Text: '<div>', correct: false },
            { Text: '<img>', correct: true },
            { Text: '<span>', correct: false }
        ]
}
}
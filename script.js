let questions = [
    {
        "question": "Wer hat HTML erfunden",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right-answer": 3
    },
    {
        "question": "Wer entwickelte die Relativitätstheorie",
        "answer_1": "Isaac Newton",
        "answer_2": "Albert Einstein",
        "answer_3": "Nikola Tesla",
        "answer_4": "Galileo Galilei",
        "right-answer": 2
    },
    {
        "question": "Welche Programmiersprache wird hauptsächlich für Webseiten im Browser verwendet",
        "answer_1": "Python",
        "answer_2": "C++",
        "answer_3": "Java",
        "answer_4": "JavaScript",
        "right-answer": 4
    },
    {
        "question": "Welcher Planet ist der größte in unserem Sonnensystem",
        "answer_1": "Mars",
        "answer_2": "Jupiter",
        "answer_3": "Venus",
        "answer_4": "Saturn",
        "right-answer": 2
    },
    {
        "question": "Wie heißt die Hauptstadt von Frankreich",
        "answer_1": "Berlin",
        "answer_2": "Madrid",
        "answer_3": "Paris",
        "answer_4": "Rom",
        "right-answer": 3
    },
    {
        "question": "Wer schrieb das Drama Faust",
        "answer_1": "Friedrich Schiller",
        "answer_2": "Johann Wolfgang von Goethe",
        "answer_3": "Thomas Mann",
        "answer_4": "Franz Kafka",
        "right-answer": 2
    },
    {
        "question": "Welches Unternehmen entwickelte das Betriebssystem Windows",
        "answer_1": "Apple",
        "answer_2": "Google",
        "answer_3": "Microsoft",
        "answer_4": "IBM",
        "right-answer": 3
    }
];

let currentQuestion = 0;
let rightAnswers = 0;

let audioSuccess = new Audio('audio/right.mp3');
let audioFail = new Audio('audio/wrong.mp3');


function init() {
    document.getElementById('all_questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    if (currentQuestion >= questions.length) {
        document.getElementById('endscreen').style = '';
        document.getElementById('question_body').style = 'display: none';
        document.getElementById('endscreen_all_questions').innerHTML = questions.length;
        document.getElementById('endscreen_right_answers').innerHTML = rightAnswers;
        document.getElementById('header_img').src = 'img/pokal.svg';
    }
    else {

        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progressbar_percent').innerHTML = `${percent} %`
        document.getElementById('progressbar_percent').style.width = `${percent}%`

        console.log(percent);

        document.getElementById('current_question').innerHTML = currentQuestion + 1;
        document.getElementById('question_text').innerHTML = question['question'] + "?";
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(clickedAnswer) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = clickedAnswer.slice(-1); // nimmt das letzte Zeichen von clickedAnswer, also in dem Fall die Nummer der answer
    let idOfRightAnswer = `answer_${question['right-answer']}`;

    if (selectedQuestionNumber == question['right-answer']) {
        document.getElementById(clickedAnswer).parentNode.classList.add('bg-success');
        audioSuccess.play();
        rightAnswers++;
    }
    else {
        document.getElementById(clickedAnswer).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        audioFail.play();
    }
    document.getElementById('next_button').disabled = false;
    // document.getElementById('next_button').removeAttribute('disabled');

}

function nextQuestion() {
    currentQuestion++; // erhöht um 1, also z.b. 0 + 1;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('next_button').disabled = true;
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    currentQuestion = 0;
    rightAnswers = 0;
    document.getElementById('header_img').src = 'img/quiz.jpg';
    document.getElementById('endscreen').style = 'display: none';
    document.getElementById('question_body').style = '';
    init();
}